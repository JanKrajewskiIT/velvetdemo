import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const showcaseEn = defineDictionary({
  showcase: {
    meta: {
      title: 'Velvet UI — Showcase',
    },
    nav: {
      sections: 'Sections',
      brand: 'Brand',
      foundations: 'Foundations',
      ecosystem: 'Ecosystem',
      library: 'Library',
    },
    hero: {
      eyebrow: 'Velvet UI · Design system',
      title: 'Quietly confident <em>interfaces.</em>',
      lead: 'One brand colour, three typefaces and a token architecture that carries every component through light and dark — from a single checkbox to a full scheduler.',
      browse: 'Browse components',
      seeFoundations: 'See foundations',
      facts: {
        groups: 'Groups',
        specimens: 'Live specimens',
        typefaces: 'Typefaces',
        themes: 'Themes',
      },
      stage: {
        revenue: 'Revenue',
        revenueHint: 'vs. last month',
        workspace: 'Workspace',
        autosaved: 'Saved automatically',
        emailNotifications: 'Email notifications',
        compactDensity: 'Compact density',
        monthlyBudget: 'Monthly budget',
        sendAnotherInvite: 'Send another invite',
        inviteSent: 'Invite sent',
        inviteDescription: 'anna@velvet.io will get an email.',
        category: 'Category',
        categories: {
          design: 'Design',
          engineering: 'Engineering',
          research: 'Research',
        },
        launch: 'Launch v1.0',
        onboarding: 'Onboarding',
        steps: '{done}/{total} steps',
      },
    },
    brand: {
      overline: 'Brand colour · Velvet 700',
      description:
        'A deep, saturated crimson that reads premium without shouting. Built as an eleven-step OKLCH ramp — lightness steps evenly, chroma peaks mid-ramp. Click a step to copy it.',
      copy: 'Copy velvet {step} {hex}',
      copied: 'Copied',
      copyFailed: 'Copy failed',
      statusCopied: 'Colour copied to the clipboard.',
      statusFailed: 'Copying the colour failed.',
    },
    foundations: {
      overline: 'Foundations',
      title: 'Decisions made once, inherited everywhere.',
      lead: 'Raw scales become intent tokens, intent tokens become component knobs. Switch the theme above — every value on this page re-resolves without a single component changing.',
      typography: { title: 'Typography', meta: '3 families' },
      typeRoles: { title: 'Type roles', sample: 'Calm, precise, quietly confident' },
      status: { title: 'Status', surfacesAndInk: 'Surfaces & ink' },
      shape: { title: 'Shape' },
      motion: { title: 'Motion', meta: '5 curves' },
      depth: { title: 'Depth' },
      families: {
        display: {
          label: 'Display',
          description: 'Headlines, titles and figures. Tight tracking, geometric confidence.',
        },
        text: {
          label: 'Text',
          description: 'Body, labels and controls. Open, legible, calm at every size.',
        },
        mono: {
          label: 'Mono',
          description: 'Code, tokens, counters and tabular data.',
        },
      },
      roles: {
        'display-md': 'Display',
        h2: 'Heading',
        'title-lg': 'Title',
        'body-lg': 'Body',
        code: 'Code',
      },
      tones: {
        success: 'success',
        warning: 'warning',
        danger: 'danger',
        info: 'info',
        brand: 'brand',
        neutral: 'neutral',
      },
    },
    ecosystem: {
      overline: 'Ecosystem',
      title: '{count} packages. One way of building.',
      lead: 'Everything ships for SolidJS from one scope. Install only what you need — the packages stay independent, and your app is where they meet. Hover a package to trace its connections.',
      yourApp: 'Your app',
      solidApp: 'SolidJS application',
      imports: 'imports',
      peerDependency: 'peer dependency',
      wiredInApp: 'wired in your app, not a package dependency',
      external: 'external · ≥ 3.1',
      sharedPeer: 'Shared peer of every runtime package — one instance per app',
      buildTime: 'Build time',
      packages: {
        ui: {
          description:
            'Core components, tokens and light & dark themes. mountVelvetApp wires theme, locale, toasts and an error boundary in one call.',
        },
        data: {
          description:
            'Advanced data components composed from Velvet UI: editable grids, column management, nested queries, virtual collections and TradingView charts with polling and subscription feeds.',
        },
        auth: {
          description:
            'Browser-side OIDC sign-in. Redirect flow, callback, silent renewal, cross-tab sign-out and roles behind one provider and one hook.',
        },
        reactive: {
          description: 'Headless data layer — HTTP clients, queries, mutations, pagination and local or synced stores.',
        },
        i18n: {
          description:
            'Type-safe translations. ICU plurals, rich-text tags, Intl formatting and compile-time key checks.',
        },
        configs: {
          description:
            'Shared tooling presets — ESLint, Prettier, Stylelint, TypeScript, Vite, lint-staged, Husky, Nginx. Used by every package at build time.',
        },
      },
    },
    library: {
      overline: 'Library',
      title: 'Everything in the box. All of it live.',
      lead: 'Every specimen below is the real component, rendered from the shipping package. Click, type, drag and tab through them — then flip the theme and watch them follow.',
      indexLabel: 'Library sections',
      filterLabel: 'Filter specimens',
      filterPlaceholder: 'Filter {count} specimens — button, date, chart…',
      scopeLabel: 'Show',
      scopes: {
        all: 'All',
        foundation: 'Foundations',
        component: 'Components',
      },
      sectionLabel: 'Section',
      empty: 'Nothing matches “{query}”. Try a component name like “table” or “picker”.',
      loading: 'Loading specimens…',
      specimenCount: '{count, plural, one {# specimen} other {# specimens}}',
    },
    footer: {
      title: 'Velvet UI Design System',
      note: 'Light & dark · Built on tokens',
    },
  },
});

export const showcasePl: TranslationOf<typeof showcaseEn> = {
  showcase: {
    meta: {
      title: 'Velvet UI — Prezentacja',
    },
    nav: {
      sections: 'Sekcje',
      brand: 'Marka',
      foundations: 'Fundamenty',
      ecosystem: 'Ekosystem',
      library: 'Biblioteka',
    },
    hero: {
      eyebrow: 'Velvet UI · System projektowy',
      title: 'Interfejsy z <em>cichą pewnością.</em>',
      lead: 'Jeden kolor marki, trzy kroje pisma i architektura tokenów, która prowadzi każdy komponent przez jasny i ciemny motyw — od pojedynczego checkboxa po pełny scheduler.',
      browse: 'Przeglądaj komponenty',
      seeFoundations: 'Zobacz fundamenty',
      facts: {
        groups: 'Grupy',
        specimens: 'Żywe przykłady',
        typefaces: 'Kroje pisma',
        themes: 'Motywy',
      },
      stage: {
        revenue: 'Przychód',
        revenueHint: 'vs. poprzedni miesiąc',
        workspace: 'Przestrzeń robocza',
        autosaved: 'Zapisywane automatycznie',
        emailNotifications: 'Powiadomienia e-mail',
        compactDensity: 'Zwarty układ',
        monthlyBudget: 'Budżet miesięczny',
        sendAnotherInvite: 'Wyślij kolejne zaproszenie',
        inviteSent: 'Zaproszenie wysłane',
        inviteDescription: 'anna@velvet.io otrzyma wiadomość e-mail.',
        category: 'Kategoria',
        categories: {
          design: 'Projektowanie',
          engineering: 'Inżynieria',
          research: 'Badania',
        },
        launch: 'Premiera v1.0',
        onboarding: 'Wdrożenie',
        steps: '{done}/{total} kroków',
      },
    },
    brand: {
      overline: 'Kolor marki · Velvet 700',
      description:
        'Głęboki, nasycony karmazyn, który wygląda premium bez krzykliwości. Zbudowany jako jedenastostopniowa skala OKLCH — jasność rośnie równomiernie, nasycenie osiąga szczyt w środku skali. Kliknij stopień, aby go skopiować.',
      copy: 'Kopiuj velvet {step} {hex}',
      copied: 'Skopiowano',
      copyFailed: 'Nie udało się skopiować',
      statusCopied: 'Kolor skopiowano do schowka.',
      statusFailed: 'Nie udało się skopiować koloru.',
    },
    foundations: {
      overline: 'Fundamenty',
      title: 'Decyzje podejmowane raz, dziedziczone wszędzie.',
      lead: 'Surowe skale stają się tokenami intencji, a tokeny intencji — pokrętłami komponentów. Przełącz motyw powyżej — każda wartość na tej stronie przelicza się na nowo, bez zmiany choćby jednego komponentu.',
      typography: { title: 'Typografia', meta: '3 kroje' },
      typeRoles: { title: 'Role typograficzne', sample: 'Spokojnie, precyzyjnie, z cichą pewnością' },
      status: { title: 'Status', surfacesAndInk: 'Powierzchnie i tekst' },
      shape: { title: 'Kształt' },
      motion: { title: 'Ruch', meta: '5 krzywych' },
      depth: { title: 'Głębia' },
      families: {
        display: {
          label: 'Nagłówkowy',
          description: 'Nagłówki, tytuły i liczby. Ciasny kerning, geometryczna pewność.',
        },
        text: {
          label: 'Tekstowy',
          description: 'Treść, etykiety i kontrolki. Otwarty, czytelny, spokojny w każdym rozmiarze.',
        },
        mono: {
          label: 'Mono',
          description: 'Kod, tokeny, liczniki i dane tabelaryczne.',
        },
      },
      roles: {
        'display-md': 'Display',
        h2: 'Nagłówek',
        'title-lg': 'Tytuł',
        'body-lg': 'Treść',
        code: 'Kod',
      },
      tones: {
        success: 'sukces',
        warning: 'ostrzeżenie',
        danger: 'błąd',
        info: 'informacja',
        brand: 'marka',
        neutral: 'neutralny',
      },
    },
    ecosystem: {
      overline: 'Ekosystem',
      title: '{count} pakietów. Jeden sposób budowania.',
      lead: 'Wszystko jest dostępne dla SolidJS w jednym zakresie nazw. Instaluj tylko to, czego potrzebujesz — pakiety pozostają niezależne, a spotykają się w Twojej aplikacji. Najedź na pakiet, aby zobaczyć jego powiązania.',
      yourApp: 'Twoja aplikacja',
      solidApp: 'Aplikacja SolidJS',
      imports: 'importuje',
      peerDependency: 'zależność peer',
      wiredInApp: 'łączone w Twojej aplikacji, nie jest zależnością pakietu',
      external: 'zewnętrzny · ≥ 3.1',
      sharedPeer: 'Wspólna zależność peer każdego pakietu uruchomieniowego — jedna instancja na aplikację',
      buildTime: 'Czas budowania',
      packages: {
        ui: {
          description:
            'Podstawowe komponenty, tokeny oraz jasny i ciemny motyw. mountVelvetApp jednym wywołaniem podłącza motyw, język, toasty i granicę błędów.',
        },
        data: {
          description:
            'Zaawansowane komponenty danych złożone z Velvet UI: edytowalne siatki, zarządzanie kolumnami, zagnieżdżone zapytania, kolekcje wirtualne oraz wykresy TradingView z pollingiem i subskrypcjami.',
        },
        auth: {
          description:
            'Logowanie OIDC po stronie przeglądarki. Przekierowanie, callback, ciche odnawianie, wylogowanie między kartami i role za jednym providerem i jednym hookiem.',
        },
        reactive: {
          description:
            'Bezgłowa warstwa danych — klienty HTTP, zapytania, mutacje, paginacja oraz magazyny lokalne lub synchronizowane.',
        },
        i18n: {
          description:
            'Bezpieczne typowo tłumaczenia. Liczby mnogie ICU, tagi rich-text, formatowanie Intl i sprawdzanie kluczy w czasie kompilacji.',
        },
        configs: {
          description:
            'Wspólne presety narzędzi — ESLint, Prettier, Stylelint, TypeScript, Vite, lint-staged, Husky, Nginx. Używane przez każdy pakiet w czasie budowania.',
        },
      },
    },
    library: {
      overline: 'Biblioteka',
      title: 'Wszystko, co w pudełku. I wszystko na żywo.',
      lead: 'Każdy przykład poniżej to prawdziwy komponent, renderowany z publikowanego pakietu. Klikaj, pisz, przeciągaj i przechodź tabulatorem — a potem przełącz motyw i zobacz, jak za nim podążają.',
      indexLabel: 'Sekcje biblioteki',
      filterLabel: 'Filtruj przykłady',
      filterPlaceholder: 'Filtruj {count} przykładów — przycisk, data, wykres…',
      scopeLabel: 'Pokaż',
      scopes: {
        all: 'Wszystko',
        foundation: 'Fundamenty',
        component: 'Komponenty',
      },
      sectionLabel: 'Sekcja',
      empty: 'Brak wyników dla „{query}”. Spróbuj nazwy komponentu, np. „tabela” lub „selektor”.',
      loading: 'Ładowanie przykładów…',
      specimenCount: '{count, plural, one {# przykład} few {# przykłady} many {# przykładów} other {# przykładu}}',
    },
    footer: {
      title: 'Velvet UI Design System',
      note: 'Jasny i ciemny · Zbudowany na tokenach',
    },
  },
};
