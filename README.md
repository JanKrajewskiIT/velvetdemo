# VelvetDemo

Showcase application for the VelvetUi and VelvetData component libraries.

Documentation: [Recron project docs](https://docs.bluebraces.online/projects/velvet-demo/).

The catalogue follows the current showcase's 31 groups and numbering, from Brand
to Trading, with Atoms selected initially. Progress, Wayfinding, Charts and Metrics
have their own groups. Former Finance examples now sit with their neutral peers:
Delta and Money in Metrics, CodeLabel and NewsItem in Display, EnvironmentBar and
DataState in Feedback, and RangeBandChart in Charts. Pattern examples use
PracticeSetup, PracticeSession, PracticeSummary and AnalysisReport.

Existing examples remain live, including advanced VelvetData grids and offline
TradingView feeds. Trading also demonstrates StatusBar, MarketSessionClock,
ContextSwitcher, KillSwitchButton, PriceCell, InstrumentHeader, OrderTicket and
WidgetGrid. Orders and safety actions affect only their local example; no broker
or market service is contacted. English and Polish messages and both themes are
preserved.

The page follows the showcase's hero and section typography, brand band and card
geometry, with a responsive index, search and previous/next group navigation.
Numbered hashes now match the new group order (`#g10` selects Atoms). The original
token/composition overview examples are retained at the end of Atoms rather than
occupying a separate numbered group. Hero facts report actual catalogue groups
and specimens instead of copying the template's component/token totals. The demo
uses live Solid components, not the reference's React runtime or iframe previews.
Catalogue captions determine search, counts, order and which existing examples a
group loads; missing renderers fail explicitly rather than disappearing silently.

## Showcase coverage

Static inspection of the reference `showcase/sections.json` found 229 component
entries in groups 09–31. Each name now has a direct JSX example in the demo
source. This is source coverage, not a claim that every variant or interaction
has passed runtime verification. Examples may combine related components.
ListItem belongs to Display; Option, IconTile and Listbox remain in Atoms.

The latest additions include interactive PeriodNav, weighted/wrapping Columns,
Listbox selection with separate focus and value, ChartLegend toggles and list
values, and a keyboard-controlled ChartTooltip read-out. The Listbox example
supports arrows, Home/End, typeahead and Enter/Space, skips its disabled option,
and keeps actionable retry controls outside option content.

Foundation coverage follows the reference topics rather than its iframe names:

| Reference group | Live demo coverage                                                                                       |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| Brand           | Wordmark, logo, brand fills and ramp                                                                     |
| Color           | Ramps, backgrounds, status/category roles, on-color, text/background pairs and tone contrast             |
| Type            | Families, role specimens, figures, size scale, tracking and leading                                      |
| Shape           | Border weights, radius scale, nested radii and controls                                                  |
| Space & Layout  | Spacing, density, fixed sizes, nested controls, overlay limits, halos, containers, breakpoints and shell |
| Depth           | Elevation intents, layers, shadows, scrims and glow                                                      |
| Motion          | Durations, easing, intents and keyframes, with additional stagger examples                               |
| State           | Interaction, focus, washes, action states and accessibility examples                                     |

New controls and captions have English/Polish messages. Review-filter statuses,
weekday names, option previews, hero currency/budget and Stat deltas now follow
the selected locale. Existing illustrative copy and datasets are not all
translated. Library tokens, fonts and component styles come from the installed
packages; the demo does not maintain a second port of their CSS. The installed
library's six easing tokens are retained even though the reference section blurb
mentions five curves.

After updating the demo, run `npm run verify` and review narrow layouts, both
themes, language switching, confirmation flows and editable widgets in a browser.
Also check Listbox focus/typeahead/selection, month navigation, legend toggles,
tooltip read-outs and the new foundation specimens at narrow widths.
Automated verification and formatting for this alignment are deferred to the
maintainer. Pixel parity, complete variant coverage and assistive-technology
behavior remain unverified; source presence alone does not establish them.

The static demo is served through Traefik directly to the unprivileged Nginx
container on port 3000. It does not deploy a WAF. Delivery retains the SBOM,
signed image verification and the HTTPS smoke test. Image scans and the ZAP
baseline run in the independent weekly security workflow. See [CI pipelines](CI-PIPELINES.md).

The demo selects `waf-enabled: false` in the shared image verification workflow.
The workflow must support the `spa` security profile (Configs 3.7.12 or later).
The locked `@jankrajewskiit/configs` package must be at least 3.12.2 so the generated
SPA artifact includes the scanner installer's `security-tool-directory.mjs`
dependency. Workflow references are pinned to immutable commits. After updating
the lockfile, run a fresh application build to recreate the SPA artifact;
rerunning image verification on an older artifact retains its missing files.
