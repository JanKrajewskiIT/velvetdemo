# Contabo: SSH key and deployment setup

This guide covers Windows PowerShell on your local computer and a Linux VPS hosted by Contabo. It describes the configuration used by the [deployment workflow](../.github/workflows/deploy.yml).

## 1. Find your server details in Contabo

In the Contabo panel, select your server under **VPS control** (older panel) or **Servers & Hosting → VPS/VDS** (newer panel).

- **VPS_HOST**: the server's public IPv4 address. Enter only the address, without `https://`, a port or a path. Using an IP address bypasses DNS resolution.
- **VPS_USER**: the Linux user you use for deployment. In the Contabo screen reviewed during setup, **Default User** was `root`.

You can also find the IP address and initial system username in Contabo's **“Your login data!”** email. The VPS password is separate from the customer panel password and the VNC password. If you have forgotten the VPS password, the older panel provides **Manage → Password reset**. Resetting it changes the account's existing password.

In the commands below, replace `USER@VPS_IP` with your username and address, for example `root@YOUR_SERVER_IP`.

## 2. Check SSH access with your password

Open PowerShell on your local computer and run:

```powershell
ssh USER@VPS_IP
```

On your first connection, verify the server's identity before accepting its host key. Then enter the VPS user's password; no characters will appear as you type it.

After successfully signing in, return to your local PowerShell session:

```bash
exit
```

The current workflow uses the default SSH port, **22**. If your server uses a different port, set `port` in all three SCP/SSH steps in the workflow and use `ssh -p PORT_NUMBER` locally.

## 3. Generate a dedicated deployment key

Run in your local PowerShell session:

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\.ssh" | Out-Null
ssh-keygen -t ed25519 -f "$env:USERPROFILE\.ssh\velvetdemo_contabo" -C "velvetdemo-deploy"
```

When prompted:

```text
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

Press **Enter at both prompts**. The current workflow does not pass a `passphrase`, so this guide uses a dedicated key without a passphrase for automated deployments. A key protected by a passphrase requires adding `passphrase` support to each SCP/SSH step and a separate GitHub secret.

If the program asks to overwrite an existing file, do not overwrite it. Choose a different name and update the paths in the following commands accordingly.

Two files will be created in the `.ssh` directory of your Windows user profile:

| File                     | Purpose                                           |
| ------------------------ | ------------------------------------------------- |
| `velvetdemo_contabo.pub` | Public key to add to the VPS.                     |
| `velvetdemo_contabo`     | Private key to store in the `VPS_SSH_KEY` secret. |

Keep the private key out of the repository, logs and chat messages.

## 4. Add the public key to the VPS

Run from your local PowerShell session, replacing `USER@VPS_IP`:

```powershell
Get-Content "$env:USERPROFILE\.ssh\velvetdemo_contabo.pub" |
  ssh USER@VPS_IP 'umask 077; mkdir -p ~/.ssh; cat >> ~/.ssh/authorized_keys; chmod 700 ~/.ssh; chmod 600 ~/.ssh/authorized_keys'
```

Enter your existing VPS password. The command appends the public key to the signed-in user's `~/.ssh/authorized_keys`, preserving existing entries. It sets permissions to `700` for the `.ssh` directory and `600` for the `authorized_keys` file.

The user you connect as here must match the user you later enter in `VPS_USER`.

## 5. Check access with the new key

In your local PowerShell session:

```powershell
ssh -o IdentitiesOnly=yes -i "$env:USERPROFILE\.ssh\velvetdemo_contabo" USER@VPS_IP
```

You should be able to sign in without being prompted for the account password. After checking, end the session with `exit`.

If you are still prompted for the account password, check the username, address and whether the public key is in the correct user's `authorized_keys`. Confirm that authentication with the key works before deploying.

## 6. Configure GitHub secrets

In the repository, open **Settings → Environments → production**. Create the `production` environment if it does not exist. Under **Environment secrets**, add:

| Secret        | Value                                                         |
| ------------- | ------------------------------------------------------------- |
| `VPS_HOST`    | The Contabo server's public IPv4 address.                     |
| `VPS_USER`    | The Linux user whose account you added the public key to.     |
| `VPS_SSH_KEY` | The entire contents of the private `velvetdemo_contabo` file. |

To copy the private key without printing it in the terminal, run locally:

```powershell
Get-Content -Raw "$env:USERPROFILE\.ssh\velvetdemo_contabo" | Set-Clipboard
```

Paste the clipboard contents directly into `VPS_SSH_KEY`, preserving actual line breaks and the `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----` lines. The secret must contain the file contents, rather than a file path, the `.pub` key or text containing literal `\n` sequences.

After saving the secret, clear the clipboard:

```powershell
Set-Clipboard -Value ''
```

### GitHub Packages and GHCR access

Set `GHCR_TOKEN` as a repository secret under **Settings → Secrets and variables → Actions → Repository secrets**. The `verify` and `publish` jobs also use it, and those jobs are not assigned to the `production` environment. The repository secret is also available to the deployment job, so you do not need to duplicate it in the environment. If the environment contains a secret with the same name, its value takes precedence in the `deploy` job.

The token needs `read:packages`, and its owner must have access to the private npm packages and the container image. The workflow uses it to install dependencies, build the image and pull the image on the VPS.

Image publishing uses the automatic `GITHUB_TOKEN` with `packages: write`. Do not create a `GITHUB_TOKEN` secret manually. If the `velvet-demo` container package already exists, open its **Package settings → Manage Actions access** and grant the `velvetdemo` repository the **Write** role.

## 7. Check VPS requirements and start deployment

Before deployment, the VPS needs:

- Docker and the `docker compose` command, accessible to `VPS_USER`.
- The `/opt/velvet` directory, writable by that user.
- A running Traefik instance connected to the Docker `proxy` network, with the `websecure` entrypoint and the `letsencrypt` certificate resolver.
- DNS for `velvet.bluebraces.online` pointing to the VPS, with HTTP, HTTPS and SSH accessible from the internet. The configured HTTP-01 certificate challenge requires port `80`.

The workflow creates the `proxy` network if it is missing, but does not install Docker or Traefik. The [Compose configuration](../deploy/docker-compose.yml) connects the demo to the existing proxy.

In GitHub, open **Actions → Deploy → Run workflow** for the `main` branch. After correcting secrets, you can also retry a failed job using **Re-run failed jobs** in the previous run.

The workflow verifies the project, publishes the image, copies Compose to `/opt/velvet`, pulls the image on the VPS, starts the container and checks its health and `https://velvet.bluebraces.online/`.

The current HTTPS smoke check accepts a successful HTTP response without checking which application returned it. It also has a `curl -k` fallback that skips certificate verification. A successful workflow therefore does not prove that the intended application and a trusted certificate are being served. Complete the checks below after deployment.

## 8. Configure and verify DNS

For this deployment, the application URL is **https://velvet.bluebraces.online/**. Deployment does not create DNS records.

The `bluebraces.online` DNS zone is managed in Hostinger. In hPanel, select the domain, open **DNS / Nameservers**, and edit its DNS records:

| Type | Name     | Points to                                                  |
| ---- | -------- | ---------------------------------------------------------- |
| `A`  | `velvet` | Your Contabo VPS public IPv4 address, matching `VPS_HOST`. |

Edit an existing `velvet` record instead of adding another address for the same name. If only a wildcard record (`*`) covers the subdomain, create an explicit `A` record for `velvet`. If a conflicting `CNAME` exists for that name, replace it with the intended `A` record. Other subdomains and the root domain have their own deployment requirements; change their records only when those services are also moving.

A TTL of `300` seconds can be useful during migration if the DNS panel supports it. Previously cached records can still remain until their earlier TTL expires: the `14400` value seen during this setup represents four hours. Lowering the TTL now does not immediately invalidate those cached responses.

In local Windows PowerShell, check both address families:

```powershell
Resolve-DnsName velvet.bluebraces.online -Type A
Resolve-DnsName velvet.bluebraces.online -Type AAAA
```

The `A` response must match your VPS IPv4 address. If there is an `AAAA` record, it must point to the correct VPS IPv6 address as well. An `AAAA` query returning only an SOA authority record does not provide an IPv6 address for the subdomain.

During the initial migration, the subdomain still resolved to the previous server and displayed ATÔ instead of Velvet UI. Correcting the `velvet` record made the browser reach the demo on Contabo.

## 9. Verify and recover HTTPS certificates

The separate Traefik repository owns the shared proxy configuration and its deployment. That configuration defines a Let's Encrypt resolver named `letsencrypt`, uses `ACME_EMAIL`, and performs HTTP-01 validation through the `web` entrypoint on port `80`. Certificates are stored on the VPS in `/opt/traefik/acme.json`, mounted as `/acme.json` inside Traefik.

The demo requests a certificate through these existing labels in [its Compose configuration](../deploy/docker-compose.yml):

```yaml
- traefik.http.routers.velvet-demo.rule=Host(`velvet.bluebraces.online`)
- traefik.http.routers.velvet-demo.entrypoints=websecure
- traefik.http.routers.velvet-demo.tls.certresolver=letsencrypt
```

Traefik obtains and renews the certificate automatically. For HTTP-01 validation, Let's Encrypt must be able to reach Traefik through the domain on port `80`; port `443` serves HTTPS. A running HTTPS endpoint alone does not prove the HTTP challenge is reachable.

### Diagnose a certificate error

Connect to the VPS and run these commands there:

```bash
docker logs --tail 200 traefik 2>&1 | grep -Ei 'acme|certificate|challenge|resolver|error'
```

```bash
ls -l /opt/traefik/acme.json
```

```bash
curl -Iv https://velvet.bluebraces.online/
```

The certificate storage file should have permissions `600`, shown as `-rw-------`. Do not print, share or delete its contents: it holds ACME credentials and private keys.

During this setup, Traefik logged `Unable to obtain ACME certificate` with `403 unauthorized` and a `404` challenge response from the old server IP. After DNS was corrected, HTTPS still presented `CN=TRAEFIK DEFAULT CERT`, whose subject alternative names did not match the demo domain. Those results showed that the initial certificate request had failed before the DNS migration completed.

### Retry after correcting DNS

Once DNS points to the correct VPS and port `80` is reachable, restart Traefik once to reload the routers and retry the missing certificate request:

```bash
docker restart traefik
```

This briefly interrupts access to all applications served by that Traefik instance. Keep the existing `acme.json`; restarting does not require deleting the certificate store.

Allow about a minute for issuance, then check recent errors and the HTTPS response:

```bash
docker logs --since 5m traefik 2>&1 | grep -Ei 'acme|certificate|challenge|resolver|error'
```

```bash
curl -Iv https://velvet.bluebraces.online/
```

Successful verification shows a certificate covering `velvet.bluebraces.online`, a Let's Encrypt issuer, no certificate validation error, and an HTTP `200` response. Curl's exact success message depends on its TLS backend; on the VPS it reported `SSL certificate verified via OpenSSL.`

An empty filtered log is not sufficient evidence by itself. If a new ACME error still points to the old IP, allow the previous DNS TTL to expire before retrying. Avoid repeated restarts while validation is still failing. For a different error, use the new ACME log to diagnose the remaining cause.

## 10. Check HTTPS from Windows and Edge

A successful check on the VPS verifies that connection. Confirm the result from your local Windows computer as well:

```powershell
curl.exe -Iv https://velvet.bluebraces.online/
```

Use `curl.exe` explicitly in Windows PowerShell. A successful response without a TLS validation error and without `-k` confirms that the local curl client accepted the certificate. During this setup, Windows curl used Schannel and returned `HTTP/1.1 200 OK`.

If Edge still shows **Not secure** after these checks succeed:

1. Save any unfinished forms in your browser tabs.
2. Enter `edge://restart` in Edge's address bar to restart the entire browser.
3. Open `https://velvet.bluebraces.online/` again.

In the observed migration, restarting Edge cleared the remaining warning after the server certificate and Windows curl check were already valid.

If the warning persists, click **Not secure** and inspect the presented certificate and error. You can also open DevTools with **Ctrl+Shift+I**, select **Security** under **More tools**, and use **View certificate**. Record the certificate's subject, issuer, validity dates and the exact error. A `TRAEFIK DEFAULT CERT` subject means that connection is still receiving the default certificate; a certificate for the correct domain requires investigating the specific browser error. The Security panel can also identify mixed content.

## Completion checklist

- The demo domain resolves to the intended VPS.
- The page displays Velvet UI.
- HTTPS validation succeeds on both the VPS and your Windows computer without `-k`.
- Edge shows a secure connection after reconnecting.

## Troubleshooting

| Error                                                               | What to check                                                                                                        |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `ssh: no key found`                                                 | `VPS_SSH_KEY` must contain the entire private key in OpenSSH format, including its header, footer and line breaks.   |
| `lookup ... server misbehaving`                                     | Check `VPS_HOST`. Use the correct public IPv4 address without a protocol or port.                                    |
| `Permission denied (publickey)` or an SSH authentication error      | Check the username, matching key pair and `authorized_keys` permissions. Repeat the local sign-in check from step 5. |
| Timeout or `Connection refused`                                     | Check the address, SSH port, SSH server and firewall rules on the VPS and in Contabo.                                |
| npm `401 Unauthorized`                                              | Check that `GHCR_TOKEN` is valid, has `read:packages` and belongs to a user with access to the npm packages.         |
| GHCR `permission_denied: read_package` during publishing            | Check **Manage Actions access** for the existing package: the publishing repository needs the **Write** role.        |
| Docker or `/opt/velvet` access error                                | The SSH user needs permission to access both resources.                                                              |
| The container runs, but the HTTPS check fails                       | Check the domain's DNS, Traefik configuration, shared `proxy` network and HTTPS port access.                         |
| The demo domain displays a different application                    | Check its `A` and `AAAA` records, then the proxy's domain routing. See step 8.                                       |
| ACME `403 unauthorized` with a challenge `404` from the previous IP | Correct DNS, allow cached records to expire, then retry issuance as described in step 9.                             |
| `TRAEFIK DEFAULT CERT` or a certificate hostname mismatch           | Traefik has not served a certificate covering the requested domain. Check the ACME errors and DNS before retrying.   |
| Edge says **Not secure**, but both curl checks succeed              | Restart Edge, then inspect its Security panel if the warning remains. See step 10.                                   |

## Provider documentation

- [Contabo: server login details](https://help.contabo.com/en/support/solutions/articles/103000253457-where-can-i-find-my-server-login-details-)
- [Microsoft: generating and using OpenSSH keys on Windows](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement)
- [appleboy/scp-action: connection settings](https://github.com/appleboy/scp-action#-connection-settings)
- [GitHub: workflow access to packages](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)
- [Traefik: ACME certificate resolver and HTTP-01 validation](https://doc.traefik.io/traefik/reference/install-configuration/tls/certificate-resolvers/acme/)
- [Microsoft: inspect security issues and certificates in Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools/security/)
- [Microsoft Community Hub: restart Edge using its internal page](https://techcommunity.microsoft.com/discussions/edgeinsiderdiscussions/any-already-well-known-official-way-to-force-edge-to-restart-/3761018)
