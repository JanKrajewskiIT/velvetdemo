# Showcase coverage

Audited on 2026-10-10 against VelvetUi 3.4.3, commit `cadcd03`, using the public component barrels and component source rather than the changelog. The changelog does not enumerate the recent auth and table API changes.

All **225 public visual components** have a live representation in the showcase. The table links to the rendering source. A component can appear as a composition within a larger specimen; dialogs and other temporary surfaces appear after activating their triggers. `SkipLink` is represented by the actual page skip link, visible on keyboard focus.

The inventory was rechecked against the current public barrels and mapped JSX after the lint fixes: 225 unique components, no missing exports or mapped source files. This establishes component representation, not exhaustive coverage of every prop, variant combination or interaction.

Hooks, utilities, types, constants and configuration are outside this inventory. `VelvetProvider`, `AuthProvider` and `ToastProvider` are integration providers: the entry mounts theme/i18n/toasts through `mountVelvetApp`, while the auth specimens mount their own `AuthProvider`.

## Additions and updates

| Area         | Gap or change                                             | Result                                                                          |
| ------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Atoms        | No direct ColumnResize, FieldHint or Indicator specimen   | Dedicated live specimens with resizing, validation and count/placement states   |
| Surfaces     | Incomplete Surface and Card paint galleries               | All 12 supported paints; Text gallery covers all 17 roles                       |
| Data         | No standalone ColumnManager or TableAddRowAction specimen | Column configuration drives a preview table; invitations can be added and reset |
| DataGrid     | View settings, controlled view and virtualization absent  | Editable controlled view and a separate 10,000-row virtual example              |
| VirtualTable | New row identity API                                      | Explicit `rowKey="reference"`                                                   |
| Auth         | Previous callback-based AuthButton API                    | Current provider-backed AuthButton/AuthActionButton and role-gated AuthGuard    |
| Patterns     | FileUrlImportDialog and TypingIndicator absent            | Local file/URL selection and explicit typing states                             |
| Navigation   | TreeView move mode absent                                 | Pointer and keyboard moves update the sample tree                               |
| Feedback     | No direct ToastRegion specimen                            | Contained live queue with dismissal and a three-toast bound                     |
| Media        | PlayerButton absent and limited layouts                   | Interactive button states, masonry ImageGrid and crop shape/zoom controls       |

The auth examples use the public `@jankrajewskiit/auth` factory adapter and independent provider-owned registrations. They use synthetic sessions and never contact an identity server. Search may mount both auth examples at once; each has a separate client id, manager and return-url key. The showcase owns the factory until it is disposed, so this adapter belongs only in this standalone demo.

## UI 3.4.4 adaptation

Updated on 2026-10-11 from the committed VelvetUi 3.4.4 source, within the preceding Git-based design-system change scope. The component inventory above records the 3.4.3 audit; this update adds behavior coverage rather than repeating that complete inventory.

| Area              | Live coverage                                                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navbar            | Existing account pill plus compact account panel with email, metadata, theme choices, disabled action and offline sign-out feedback                            |
| TreeView          | Public `moveTreeNode`, positional drops, Alt+arrow moves and `canDrop`; separate legacy parent-only keyboard example                                           |
| Menu              | Start/end icons in popup and inline panels, including checkable items                                                                                          |
| Table             | Fixed/auto layout switch and percentage-width fixed table with the library's sticky ghost add-row action                                                       |
| ColumnManager     | Capability aliases and reset to an explicit baseline with email initially hidden                                                                               |
| DataGrid          | `defaultGridView` baseline, `reconcileGridView` saved view, nonempty initial filters, column/width resets and a separate offline paged example with `rowCount` |
| QueryBuilder      | Controlled query, clear-to-empty, `onClear` feedback, disabled editing, limited Email operators and existing reorder controls                                  |
| CalendarOrganizer | Controlled `selected`/`onSelectedChange`, external day changes that cross months, and switchable deletion confirmation                                         |
| AuthButton        | Visible offline initialization delay, secondary variant and simulated sign-in failure                                                                          |
| Markdown          | WWW/email autolinks, full/collapsed/shortcut reference images from local favicon and colliding/empty heading slugs                                             |
| Icons             | Registry-derived gallery covers the four new filled glyphs; filled-only person/desktop are kept separate from actual outline/filled pairs                      |
| Motion            | `--ease-back` track and `--motion-travel` intent with reduced-motion handling                                                                                  |

New specimen `data-grid-server` uses the existing typed EN/PL registry, so search and counts include it automatically. New controls and specimen labels have EN/PL messages. The showcase continues to import the published UI package; no sibling source or copied library styles are used at runtime.

Read-only inspection on 2026-10-12 confirmed installed and locked UI/Data 3.4.8 and I18n 3.4.3, including the public template formatters and UI's shared fallback correction. The Data integration below uses published packages rather than linking sibling source into the showcase. This confirms dependency installation, not the result of a new aggregate verification or browser interaction audit.

## VelvetData integration

The existing DataGrid, ColumnManager, QueryBuilder, VirtualTable and VirtualList demos now consume `@jankrajewskiit/data`, including their public types and column/view helpers. They keep their current sections and interactive examples. Table and TableAddRowAction continue to come from Velvet UI. The entry loads Data styles after UI styles and composes the English/Polish `velvetDataMessages` into the existing provider.

The additional `trading` group demonstrates `TradingViewChart`, `TradingViewChartToolbar`, `TradingViewChartMetrics` and `TradingViewChartData`, together with offline examples of `useTradingViewPollingFeed` and `useTradingViewWsFeed`. The group and its Lightweight Charts adapter load on demand. Specimen ids and English/Polish labels participate in the existing search/count registry.

| Data API                    | Live example                                                                            |
| --------------------------- | --------------------------------------------------------------------------------------- |
| `TradingViewChart`          | [TradingChartDemo.tsx](../src/library/demos/trading/TradingChartDemo.tsx)               |
| `TradingViewChartToolbar`   | [TradingToolbarDemo.tsx](../src/library/demos/trading/TradingToolbarDemo.tsx)           |
| `TradingViewChartMetrics`   | [TradingMetricsDemo.tsx](../src/library/demos/trading/TradingMetricsDemo.tsx)           |
| `TradingViewChartData`      | [TradingDataDemo.tsx](../src/library/demos/trading/TradingDataDemo.tsx)                 |
| `useTradingViewPollingFeed` | [TradingPollingDemo.tsx](../src/library/demos/trading/TradingPollingDemo.tsx)           |
| `useTradingViewWsFeed`      | [TradingSubscriptionDemo.tsx](../src/library/demos/trading/TradingSubscriptionDemo.tsx) |

The component map below retains the earlier UI audit inventory. The five transferred components now belong to VelvetData; it is not a new count of current UI exports. Ecosystem cards derive minimum declared package versions from the demo manifest and include UI's auth dependency. Follow the [release order](../../VelvetData/docs/migration.md#release-order), then run `npm run verify` and a browser pass against the refreshed installation.

## Component map

| Component                   | Public module | Live representation                                                                  |
| --------------------------- | ------------- | ------------------------------------------------------------------------------------ |
| `Button`                    | actions       | [actions.tsx](../src/library/specimens/actions.tsx)                                  |
| `ButtonGroup`               | actions       | [actions.tsx](../src/library/specimens/actions.tsx)                                  |
| `CalendarEventButton`       | actions       | [CalendarEventsDemo.tsx](../src/library/demos/actions/CalendarEventsDemo.tsx)        |
| `CopyButton`                | actions       | [actions.tsx](../src/library/specimens/actions.tsx)                                  |
| `CopyField`                 | actions       | [actions.tsx](../src/library/specimens/actions.tsx)                                  |
| `Fab`                       | actions       | [actions.tsx](../src/library/specimens/actions.tsx)                                  |
| `IconButton`                | actions       | [actions.tsx](../src/library/specimens/actions.tsx)                                  |
| `LocaleSwitcher`            | actions       | [actions.tsx](../src/library/specimens/actions.tsx)                                  |
| `ThemeToggle`               | actions       | [actions.tsx](../src/library/specimens/actions.tsx)                                  |
| `ToggleButton`              | actions       | [StateLanguageDemo.tsx](../src/library/demos/state/StateLanguageDemo.tsx)            |
| `ToggleGroup`               | actions       | [actions.tsx](../src/library/specimens/actions.tsx)                                  |
| `BarChart`                  | charts        | [BarChartDemo.tsx](../src/library/demos/data-viz/BarChartDemo.tsx)                   |
| `ComparisonBar`             | charts        | [ComparisonDemo.tsx](../src/library/demos/data-viz/ComparisonDemo.tsx)               |
| `ComparisonDialog`          | charts        | [ComparisonDemo.tsx](../src/library/demos/data-viz/ComparisonDemo.tsx)               |
| `DonutChart`                | charts        | [data-viz.tsx](../src/library/specimens/data-viz.tsx)                                |
| `FunnelChart`               | charts        | [data-viz.tsx](../src/library/specimens/data-viz.tsx)                                |
| `Gantt`                     | charts        | [GanttDemo.tsx](../src/library/demos/data-viz/GanttDemo.tsx)                         |
| `Gauge`                     | charts        | [data-viz.tsx](../src/library/specimens/data-viz.tsx)                                |
| `Heatmap`                   | charts        | [HeatmapDemo.tsx](../src/library/demos/data-viz/HeatmapDemo.tsx)                     |
| `LineChart`                 | charts        | [data-viz.tsx](../src/library/specimens/data-viz.tsx)                                |
| `RadarChart`                | charts        | [data-viz.tsx](../src/library/specimens/data-viz.tsx)                                |
| `Sparkline`                 | charts        | [SparklineStatsDemo.tsx](../src/library/demos/data-viz/SparklineStatsDemo.tsx)       |
| `Accordion`                 | data          | [data.tsx](../src/library/specimens/data.tsx)                                        |
| `Avatar`                    | data          | [display.tsx](../src/library/specimens/display.tsx)                                  |
| `AvatarGroup`               | data          | [display.tsx](../src/library/specimens/display.tsx)                                  |
| `CodeSnippet`               | data          | [data.tsx](../src/library/specimens/data.tsx)                                        |
| `ColumnManager`             | data          | [ColumnManagerDemo.tsx](../src/library/demos/data/ColumnManagerDemo.tsx)             |
| `DataGrid`                  | data          | [DataGridDemo.tsx](../src/library/demos/data/DataGridDemo.tsx)                       |
| `DescriptionList`           | data          | [data.tsx](../src/library/specimens/data.tsx)                                        |
| `DiffViewer`                | data          | [DiffViewerDemo.tsx](../src/library/demos/data/DiffViewerDemo.tsx)                   |
| `Divider`                   | data          | [data.tsx](../src/library/specimens/data.tsx)                                        |
| `EventCalendar`             | data          | [planning.tsx](../src/library/specimens/planning.tsx)                                |
| `FeatureCard`               | data          | [cards.tsx](../src/library/specimens/cards.tsx)                                      |
| `FlipCard`                  | data          | [cards.tsx](../src/library/specimens/cards.tsx)                                      |
| `Kanban`                    | data          | [KanbanBoardDemo.tsx](../src/library/demos/planning/KanbanBoardDemo.tsx)             |
| `List`                      | data          | [PeopleListDemo.tsx](../src/library/demos/data/PeopleListDemo.tsx)                   |
| `LogViewer`                 | data          | [LogViewerDemo.tsx](../src/library/demos/data/LogViewerDemo.tsx)                     |
| `QuestionCard`              | data          | [QuestionCardDemo.tsx](../src/library/demos/cards/QuestionCardDemo.tsx)              |
| `Scheduler`                 | data          | [SchedulerDayDemo.tsx](../src/library/demos/planning/SchedulerDayDemo.tsx)           |
| `ScoreCard`                 | data          | [cards.tsx](../src/library/specimens/cards.tsx)                                      |
| `SkillBar`                  | data          | [data.tsx](../src/library/specimens/data.tsx)                                        |
| `Stat`                      | data          | [cards.tsx](../src/library/specimens/cards.tsx)                                      |
| `Table`                     | data          | [ColumnManagerDemo.tsx](../src/library/demos/data/ColumnManagerDemo.tsx)             |
| `TableAddRowAction`         | data          | [TableAddRowDemo.tsx](../src/library/demos/data/TableAddRowDemo.tsx)                 |
| `Timeline`                  | data          | [data.tsx](../src/library/specimens/data.tsx)                                        |
| `VirtualList`               | data          | [VirtualListDemo.tsx](../src/library/demos/data/VirtualListDemo.tsx)                 |
| `VirtualTable`              | data          | [VirtualTableDemo.tsx](../src/library/demos/data/VirtualTableDemo.tsx)               |
| `Badge`                     | display       | [display.tsx](../src/library/specimens/display.tsx)                                  |
| `BrandLogo`                 | display       | [BrandFillsDemo.tsx](../src/library/demos/brand/BrandFillsDemo.tsx)                  |
| `Card`                      | display       | [CardVariantsDemo.tsx](../src/library/demos/cards/CardVariantsDemo.tsx)              |
| `Icon`                      | display       | [display.tsx](../src/library/specimens/display.tsx)                                  |
| `Markdown`                  | display       | [MarkdownDemo.tsx](../src/library/demos/display/MarkdownDemo.tsx)                    |
| `MarkdownEditDialog`        | display       | [MarkdownEditorDemo.tsx](../src/library/demos/display/MarkdownEditorDemo.tsx)        |
| `MarkdownEditor`            | display       | [MarkdownEditorDemo.tsx](../src/library/demos/display/MarkdownEditorDemo.tsx)        |
| `QRCode`                    | display       | [QrCodeDemo.tsx](../src/library/demos/display/QrCodeDemo.tsx)                        |
| `StructuredCard`            | display       | [cards.tsx](../src/library/specimens/cards.tsx)                                      |
| `Tag`                       | display       | [CategoricalDemo.tsx](../src/library/demos/color/CategoricalDemo.tsx)                |
| `Watermark`                 | display       | [WatermarkDemo.tsx](../src/library/demos/display/WatermarkDemo.tsx)                  |
| `Alert`                     | feedback      | [DismissibleAlertDemo.tsx](../src/library/demos/feedback/DismissibleAlertDemo.tsx)   |
| `Banner`                    | feedback      | [feedback.tsx](../src/library/specimens/feedback.tsx)                                |
| `BottomSheet`               | feedback      | [BottomSheetDemo.tsx](../src/library/demos/overlays/BottomSheetDemo.tsx)             |
| `ConfirmAction`             | feedback      | [ConfirmDemo.tsx](../src/library/demos/overlays/ConfirmDemo.tsx)                     |
| `ConfirmDialog`             | feedback      | [ConfirmDemo.tsx](../src/library/demos/overlays/ConfirmDemo.tsx)                     |
| `Countdown`                 | feedback      | [feedback.tsx](../src/library/specimens/feedback.tsx)                                |
| `Dialog`                    | feedback      | [DialogDemo.tsx](../src/library/demos/overlays/DialogDemo.tsx)                       |
| `EmptyState`                | feedback      | [feedback.tsx](../src/library/specimens/feedback.tsx)                                |
| `ErrorState`                | feedback      | [feedback.tsx](../src/library/specimens/feedback.tsx)                                |
| `Loader`                    | feedback      | [feedback.tsx](../src/library/specimens/feedback.tsx)                                |
| `LoadingOverlay`            | feedback      | [feedback.tsx](../src/library/specimens/feedback.tsx)                                |
| `NotificationCenter`        | feedback      | [NotificationsDemo.tsx](../src/library/demos/feedback/NotificationsDemo.tsx)         |
| `NotificationList`          | feedback      | [NotificationsDemo.tsx](../src/library/demos/feedback/NotificationsDemo.tsx)         |
| `PageLoader`                | feedback      | [feedback.tsx](../src/library/specimens/feedback.tsx)                                |
| `Popover`                   | feedback      | [overlays.tsx](../src/library/specimens/overlays.tsx)                                |
| `Progress`                  | feedback      | [feedback.tsx](../src/library/specimens/feedback.tsx)                                |
| `ProgressRing`              | feedback      | [feedback.tsx](../src/library/specimens/feedback.tsx)                                |
| `SetupChecklist`            | feedback      | [SetupChecklistDemo.tsx](../src/library/demos/feedback/SetupChecklistDemo.tsx)       |
| `Skeleton`                  | feedback      | [feedback.tsx](../src/library/specimens/feedback.tsx)                                |
| `SkeletonText`              | feedback      | [feedback.tsx](../src/library/specimens/feedback.tsx)                                |
| `Spinner`                   | feedback      | [feedback.tsx](../src/library/specimens/feedback.tsx)                                |
| `StatusPage`                | feedback      | [feedback.tsx](../src/library/specimens/feedback.tsx)                                |
| `Toast`                     | feedback      | [ToastRegionDemo.tsx](../src/library/demos/feedback/ToastRegionDemo.tsx)             |
| `ToastRegion`               | feedback      | [ToastRegionDemo.tsx](../src/library/demos/feedback/ToastRegionDemo.tsx)             |
| `Tooltip`                   | feedback      | [overlays.tsx](../src/library/specimens/overlays.tsx)                                |
| `Tour`                      | feedback      | [TourDemo.tsx](../src/library/demos/overlays/TourDemo.tsx)                           |
| `ActionRow`                 | forms         | [AccountSettingsDemo.tsx](../src/library/demos/forms/AccountSettingsDemo.tsx)        |
| `Autocomplete`              | forms         | [AutocompleteDemo.tsx](../src/library/demos/selection/AutocompleteDemo.tsx)          |
| `Calendar`                  | forms         | [CalendarRangeDemo.tsx](../src/library/demos/pickers/CalendarRangeDemo.tsx)          |
| `Cascader`                  | forms         | [selection.tsx](../src/library/specimens/selection.tsx)                              |
| `Checkbox`                  | forms         | [AuthSessionDemo.tsx](../src/library/demos/actions/AuthSessionDemo.tsx)              |
| `Chip`                      | forms         | [A11yContractDemo.tsx](../src/library/demos/state/A11yContractDemo.tsx)              |
| `ChipGroup`                 | forms         | [selection.tsx](../src/library/specimens/selection.tsx)                              |
| `ColorPicker`               | forms         | [pickers.tsx](../src/library/specimens/pickers.tsx)                                  |
| `DatePicker`                | forms         | [pickers.tsx](../src/library/specimens/pickers.tsx)                                  |
| `DateRangePicker`           | forms         | [pickers.tsx](../src/library/specimens/pickers.tsx)                                  |
| `DateTimePicker`            | forms         | [pickers.tsx](../src/library/specimens/pickers.tsx)                                  |
| `EditableCollection`        | forms         | [selection.tsx](../src/library/specimens/selection.tsx)                              |
| `ErrorSummary`              | forms         | [ErrorSummaryDemo.tsx](../src/library/demos/forms/ErrorSummaryDemo.tsx)              |
| `FileUpload`                | forms         | [FileUploadDemo.tsx](../src/library/demos/inputs/FileUploadDemo.tsx)                 |
| `FormGrid`                  | forms         | [AccountSettingsDemo.tsx](../src/library/demos/forms/AccountSettingsDemo.tsx)        |
| `FormLayout`                | forms         | [AccountSettingsDemo.tsx](../src/library/demos/forms/AccountSettingsDemo.tsx)        |
| `FormSection`               | forms         | [AccountSettingsDemo.tsx](../src/library/demos/forms/AccountSettingsDemo.tsx)        |
| `FormSpan`                  | forms         | [forms.tsx](../src/library/specimens/forms.tsx)                                      |
| `InlineEdit`                | forms         | [inputs.tsx](../src/library/specimens/inputs.tsx)                                    |
| `Input`                     | forms         | [AccountSettingsDemo.tsx](../src/library/demos/forms/AccountSettingsDemo.tsx)        |
| `MentionInput`              | forms         | [MentionInputDemo.tsx](../src/library/demos/inputs/MentionInputDemo.tsx)             |
| `MultiSelect`               | forms         | [selection.tsx](../src/library/specimens/selection.tsx)                              |
| `NumberInput`               | forms         | [inputs.tsx](../src/library/specimens/inputs.tsx)                                    |
| `OptionSwitcher`            | forms         | [AuthGuardSessionDemo.tsx](../src/library/demos/patterns/AuthGuardSessionDemo.tsx)   |
| `OtpInput`                  | forms         | [inputs.tsx](../src/library/specimens/inputs.tsx)                                    |
| `PasswordInput`             | forms         | [inputs.tsx](../src/library/specimens/inputs.tsx)                                    |
| `PhoneInput`                | forms         | [inputs.tsx](../src/library/specimens/inputs.tsx)                                    |
| `Radio`                     | forms         | [selection.tsx](../src/library/specimens/selection.tsx)                              |
| `RangeInput`                | forms         | [forms.tsx](../src/library/specimens/forms.tsx)                                      |
| `Rating`                    | forms         | [selection.tsx](../src/library/specimens/selection.tsx)                              |
| `RatingSummary`             | forms         | [RatingReviewsDemo.tsx](../src/library/demos/selection/RatingReviewsDemo.tsx)        |
| `RichTextEditor`            | forms         | [inputs.tsx](../src/library/specimens/inputs.tsx)                                    |
| `SearchInput`               | forms         | [SearchSuggestionsDemo.tsx](../src/library/demos/inputs/SearchSuggestionsDemo.tsx)   |
| `Select`                    | forms         | [AccountSettingsDemo.tsx](../src/library/demos/forms/AccountSettingsDemo.tsx)        |
| `SignaturePad`              | forms         | [SignaturePadDemo.tsx](../src/library/demos/inputs/SignaturePadDemo.tsx)             |
| `Slider`                    | forms         | [selection.tsx](../src/library/specimens/selection.tsx)                              |
| `Switch`                    | forms         | [AccountSettingsDemo.tsx](../src/library/demos/forms/AccountSettingsDemo.tsx)        |
| `TagInput`                  | forms         | [inputs.tsx](../src/library/specimens/inputs.tsx)                                    |
| `Textarea`                  | forms         | [forms.tsx](../src/library/specimens/forms.tsx)                                      |
| `TimePicker`                | forms         | [pickers.tsx](../src/library/specimens/pickers.tsx)                                  |
| `TimeStepper`               | forms         | [pickers.tsx](../src/library/specimens/pickers.tsx)                                  |
| `TransferList`              | forms         | [selection.tsx](../src/library/specimens/selection.tsx)                              |
| `TreeSelect`                | forms         | [selection.tsx](../src/library/specimens/selection.tsx)                              |
| `Footer`                    | layout        | [layout.tsx](../src/library/specimens/layout.tsx)                                    |
| `Grid`                      | layout        | [FieldShellDemo.tsx](../src/library/demos/atoms/FieldShellDemo.tsx)                  |
| `NavItem`                   | layout        | [SidebarDemo.tsx](../src/library/demos/layout/SidebarDemo.tsx)                       |
| `NavSection`                | layout        | [SidebarDemo.tsx](../src/library/demos/layout/SidebarDemo.tsx)                       |
| `PageHeader`                | layout        | [layout.tsx](../src/library/specimens/layout.tsx)                                    |
| `ScrollArea`                | layout        | [ScrollAreaDemo.tsx](../src/library/demos/layout/ScrollAreaDemo.tsx)                 |
| `SearchTrigger`             | layout        | [SidebarDemo.tsx](../src/library/demos/layout/SidebarDemo.tsx)                       |
| `Sidebar`                   | layout        | [SidebarDemo.tsx](../src/library/demos/layout/SidebarDemo.tsx)                       |
| `SplitPane`                 | layout        | [SplitPaneDemo.tsx](../src/library/demos/layout/SplitPaneDemo.tsx)                   |
| `Stack`                     | layout        | [ColumnResizeDemo.tsx](../src/library/demos/atoms/ColumnResizeDemo.tsx)              |
| `AudioPlayer`               | media         | [AudioPlayerDemo.tsx](../src/library/demos/media/AudioPlayerDemo.tsx)                |
| `Carousel`                  | media         | [CarouselDemo.tsx](../src/library/demos/media/CarouselDemo.tsx)                      |
| `ImageCropper`              | media         | [ImageCropperDemo.tsx](../src/library/demos/media/ImageCropperDemo.tsx)              |
| `ImageGrid`                 | media         | [media.tsx](../src/library/specimens/media.tsx)                                      |
| `Lightbox`                  | media         | [LightboxDemo.tsx](../src/library/demos/media/LightboxDemo.tsx)                      |
| `Marquee`                   | media         | [MarqueeDemo.tsx](../src/library/demos/media/MarqueeDemo.tsx)                        |
| `MediaFrame`                | media         | [CarouselDemo.tsx](../src/library/demos/media/CarouselDemo.tsx)                      |
| `PlayerButton`              | media         | [PlayerButtonDemo.tsx](../src/library/demos/media/PlayerButtonDemo.tsx)              |
| `VideoPlayer`               | media         | [VideoPlayerDemo.tsx](../src/library/demos/media/VideoPlayerDemo.tsx)                |
| `CommandPalette`            | menus         | [CommandPaletteDemo.tsx](../src/library/demos/menus/CommandPaletteDemo.tsx)          |
| `ContextMenu`               | menus         | [ContextMenuDemo.tsx](../src/library/demos/menus/ContextMenuDemo.tsx)                |
| `DropdownButton`            | menus         | [DropdownButtonDemo.tsx](../src/library/demos/menus/DropdownButtonDemo.tsx)          |
| `Menu`                      | menus         | [MenuDemo.tsx](../src/library/demos/menus/MenuDemo.tsx)                              |
| `MenuChip`                  | menus         | [menus.tsx](../src/library/specimens/menus.tsx)                                      |
| `MenuPanel`                 | menus         | [menus.tsx](../src/library/specimens/menus.tsx)                                      |
| `Toolbar`                   | menus         | [ToolbarDemo.tsx](../src/library/demos/menus/ToolbarDemo.tsx)                        |
| `Anchor`                    | navigation    | [AnchorScrollDemo.tsx](../src/library/demos/navigation/AnchorScrollDemo.tsx)         |
| `BackToTop`                 | navigation    | [AnchorScrollDemo.tsx](../src/library/demos/navigation/AnchorScrollDemo.tsx)         |
| `BottomNav`                 | navigation    | [navigation.tsx](../src/library/specimens/navigation.tsx)                            |
| `Breadcrumb`                | navigation    | [navigation.tsx](../src/library/specimens/navigation.tsx)                            |
| `HierarchyNavigator`        | navigation    | [navigation.tsx](../src/library/specimens/navigation.tsx)                            |
| `Link`                      | navigation    | [navigation.tsx](../src/library/specimens/navigation.tsx)                            |
| `LoadMore`                  | navigation    | [LoadMoreDemo.tsx](../src/library/demos/navigation/LoadMoreDemo.tsx)                 |
| `Navbar`                    | navigation    | [NavbarDemo.tsx](../src/library/demos/navigation/NavbarDemo.tsx)                     |
| `NavbarLocale`              | navigation    | [NavbarDemo.tsx](../src/library/demos/navigation/NavbarDemo.tsx)                     |
| `NavbarUser`                | navigation    | [NavbarDemo.tsx](../src/library/demos/navigation/NavbarDemo.tsx)                     |
| `Pagination`                | navigation    | [PaginationDemo.tsx](../src/library/demos/navigation/PaginationDemo.tsx)             |
| `Stepper`                   | navigation    | [StepperDemo.tsx](../src/library/demos/navigation/StepperDemo.tsx)                   |
| `Tabs`                      | navigation    | [navigation.tsx](../src/library/specimens/navigation.tsx)                            |
| `TreeView`                  | navigation    | [LazyTreeDemo.tsx](../src/library/demos/navigation/LazyTreeDemo.tsx)                 |
| `Wizard`                    | navigation    | [WizardDemo.tsx](../src/library/demos/forms/WizardDemo.tsx)                          |
| `AiResultPanel`             | patterns      | [patterns.tsx](../src/library/specimens/patterns.tsx)                                |
| `AnalysisRequest`           | patterns      | [AnalysisFlowDemo.tsx](../src/library/demos/patterns/AnalysisFlowDemo.tsx)           |
| `AtsAnalysisPanel`          | patterns      | [AnalysisFlowDemo.tsx](../src/library/demos/patterns/AnalysisFlowDemo.tsx)           |
| `CalendarOrganizer`         | patterns      | [CalendarOrganizerDemo.tsx](../src/library/demos/patterns/CalendarOrganizerDemo.tsx) |
| `ChatMessage`               | patterns      | [ChatThreadDemo.tsx](../src/library/demos/patterns/ChatThreadDemo.tsx)               |
| `ChatThread`                | patterns      | [ChatThreadDemo.tsx](../src/library/demos/patterns/ChatThreadDemo.tsx)               |
| `ColorLabelManager`         | patterns      | [ColorLabelsDemo.tsx](../src/library/demos/patterns/ColorLabelsDemo.tsx)             |
| `ColorLabelSelectionDialog` | patterns      | [ColorLabelsDemo.tsx](../src/library/demos/patterns/ColorLabelsDemo.tsx)             |
| `CommentThread`             | patterns      | [CommentThreadDemo.tsx](../src/library/demos/patterns/CommentThreadDemo.tsx)         |
| `DualFilterBar`             | patterns      | [DualFilterBarDemo.tsx](../src/library/demos/patterns/DualFilterBarDemo.tsx)         |
| `FileUrlImportDialog`       | patterns      | [FileUrlImportDemo.tsx](../src/library/demos/patterns/FileUrlImportDemo.tsx)         |
| `FilterBar`                 | patterns      | [FilterBarDemo.tsx](../src/library/demos/patterns/FilterBarDemo.tsx)                 |
| `FlashcardSession`          | patterns      | [FlashcardFlowDemo.tsx](../src/library/demos/patterns/FlashcardFlowDemo.tsx)         |
| `FlashcardSetup`            | patterns      | [FlashcardFlowDemo.tsx](../src/library/demos/patterns/FlashcardFlowDemo.tsx)         |
| `FlashcardSummary`          | patterns      | [FlashcardFlowDemo.tsx](../src/library/demos/patterns/FlashcardFlowDemo.tsx)         |
| `ImportSourcesDialog`       | patterns      | [ImportSourcesDemo.tsx](../src/library/demos/patterns/ImportSourcesDemo.tsx)         |
| `PricingTable`              | patterns      | [PricingDemo.tsx](../src/library/demos/patterns/PricingDemo.tsx)                     |
| `PromptInput`               | patterns      | [ChatThreadDemo.tsx](../src/library/demos/patterns/ChatThreadDemo.tsx)               |
| `QueryBuilder`              | patterns      | [QueryBuilderDemo.tsx](../src/library/demos/patterns/QueryBuilderDemo.tsx)           |
| `TypingIndicator`           | patterns      | [patterns.tsx](../src/library/specimens/patterns.tsx)                                |
| `Checkmark`                 | primitives    | [DisclosureDismissDemo.tsx](../src/library/demos/atoms/DisclosureDismissDemo.tsx)    |
| `Chevron`                   | primitives    | [DisclosureDismissDemo.tsx](../src/library/demos/atoms/DisclosureDismissDemo.tsx)    |
| `CloseButton`               | primitives    | [DisclosureDismissDemo.tsx](../src/library/demos/atoms/DisclosureDismissDemo.tsx)    |
| `ColumnResize`              | primitives    | [ColumnResizeDemo.tsx](../src/library/demos/atoms/ColumnResizeDemo.tsx)              |
| `Control`                   | primitives    | [DisclosureDismissDemo.tsx](../src/library/demos/atoms/DisclosureDismissDemo.tsx)    |
| `Count`                     | primitives    | [RowsDemo.tsx](../src/library/demos/atoms/RowsDemo.tsx)                              |
| `Dot`                       | primitives    | [StatusMarksDemo.tsx](../src/library/demos/atoms/StatusMarksDemo.tsx)                |
| `EmptyText`                 | primitives    | [TextEmphasisDemo.tsx](../src/library/demos/atoms/TextEmphasisDemo.tsx)              |
| `Field`                     | primitives    | [FieldShellDemo.tsx](../src/library/demos/atoms/FieldShellDemo.tsx)                  |
| `FieldHint`                 | primitives    | [FieldHintDemo.tsx](../src/library/demos/atoms/FieldHintDemo.tsx)                    |
| `FieldLabel`                | primitives    | [FieldHintDemo.tsx](../src/library/demos/atoms/FieldHintDemo.tsx)                    |
| `Glyph`                     | primitives    | [StatusMarksDemo.tsx](../src/library/demos/atoms/StatusMarksDemo.tsx)                |
| `Handle`                    | primitives    | [DisclosureDismissDemo.tsx](../src/library/demos/atoms/DisclosureDismissDemo.tsx)    |
| `IconTile`                  | primitives    | [IndicatorDemo.tsx](../src/library/demos/atoms/IndicatorDemo.tsx)                    |
| `Indicator`                 | primitives    | [IndicatorDemo.tsx](../src/library/demos/atoms/IndicatorDemo.tsx)                    |
| `Kbd`                       | primitives    | [OptionsDemo.tsx](../src/library/demos/atoms/OptionsDemo.tsx)                        |
| `ListItem`                  | primitives    | [RowsDemo.tsx](../src/library/demos/atoms/RowsDemo.tsx)                              |
| `LiveRegion`                | primitives    | [A11yContractDemo.tsx](../src/library/demos/state/A11yContractDemo.tsx)              |
| `Mark`                      | primitives    | [TextEmphasisDemo.tsx](../src/library/demos/atoms/TextEmphasisDemo.tsx)              |
| `Marker`                    | primitives    | [StepsDemo.tsx](../src/library/demos/atoms/StepsDemo.tsx)                            |
| `Meter`                     | primitives    | [TracksDemo.tsx](../src/library/demos/atoms/TracksDemo.tsx)                          |
| `Option`                    | primitives    | [OptionsDemo.tsx](../src/library/demos/atoms/OptionsDemo.tsx)                        |
| `Rail`                      | primitives    | [StepsDemo.tsx](../src/library/demos/atoms/StepsDemo.tsx)                            |
| `RailItem`                  | primitives    | [StepsDemo.tsx](../src/library/demos/atoms/StepsDemo.tsx)                            |
| `SectionLabel`              | primitives    | [DisclosureDismissDemo.tsx](../src/library/demos/atoms/DisclosureDismissDemo.tsx)    |
| `Segmented`                 | primitives    | [TracksDemo.tsx](../src/library/demos/atoms/TracksDemo.tsx)                          |
| `SegmentedItem`             | primitives    | [TracksDemo.tsx](../src/library/demos/atoms/TracksDemo.tsx)                          |
| `Separator`                 | primitives    | [TextEmphasisDemo.tsx](../src/library/demos/atoms/TextEmphasisDemo.tsx)              |
| `SkipLink`                  | primitives    | [App.tsx](../src/App.tsx)                                                            |
| `Surface`                   | primitives    | [OptionsDemo.tsx](../src/library/demos/atoms/OptionsDemo.tsx)                        |
| `Swatch`                    | primitives    | [StatusMarksDemo.tsx](../src/library/demos/atoms/StatusMarksDemo.tsx)                |
| `Text`                      | primitives    | [TextRolesDemo.tsx](../src/library/demos/atoms/TextRolesDemo.tsx)                    |
| `VisuallyHidden`            | primitives    | [ColumnResizeDemo.tsx](../src/library/demos/atoms/ColumnResizeDemo.tsx)              |
| `Weekday`                   | primitives    | [TextEmphasisDemo.tsx](../src/library/demos/atoms/TextEmphasisDemo.tsx)              |
| `AuthActionButton`          | auth          | [AuthSessionDemo.tsx](../src/library/demos/actions/AuthSessionDemo.tsx)              |
| `AuthButton`                | auth          | [AuthSessionDemo.tsx](../src/library/demos/actions/AuthSessionDemo.tsx)              |
| `AuthGuard`                 | auth          | [AuthGuardSessionDemo.tsx](../src/library/demos/patterns/AuthGuardSessionDemo.tsx)   |

## Verification of the 3.4.3 audit

Coverage and public API compatibility were inspected statically. Type checking passed in the supplied `npm run verify` output. The final agent-run `npm run lint`, using `@jankrajewskiit/configs` 3.4.2, passed with no errors or warnings. The user subsequently reported successful manual execution; a complete browser interaction audit has not been recorded.

Checks recorded for that earlier audit, from the VelvetDemo root (CSS lint and build were not agent-run at that time):

```powershell
npm run typecheck
npm run lint
npm run lint:css
npm run build
```

A browser pass should cover both themes, a narrow viewport, overlays, table column resizing, tree keyboard moves, and a search for "Auth" that displays both independent auth sessions.

Adding the existing auth package as a direct dependency was approved. The installation attempt returned GitHub Packages HTTP 401; the manifest and root lockfile declaration therefore use the already installed, locked 3.4.1 package without changing its resolved URL or integrity.

## Verification of the 3.4.4 adaptation

All approved checks ran on 2026-10-11 in VelvetDemo. The local UI package remained 3.4.3 after the rejected installation.

| Command                                                      | Result                                                                                                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm exec -- prettier --write src docs/showcase-coverage.md` | Passed; requested source and coverage documentation formatted                                                                               |
| `npm run lint:css`                                           | Passed                                                                                                                                      |
| `npm run typecheck`                                          | Failed: installed 3.4.3 lacks the new helpers and props; positional handler inference errors follow those missing types                     |
| `npm run build`                                              | Failed at the same TypeScript stage; Vite did not build the updated app                                                                     |
| `npm run lint`                                               | New helper and handler types cannot resolve through installed 3.4.3; unrelated import ordering and auth conditional findings were corrected |
| `npm run format:check`                                       | Failed on 57 untouched files in `.agents` and `docs/contabo-deployment.md`; no changed source or coverage file was flagged                  |

Compatibility of those calls was checked statically against the 3.4.4 public source. That historical result does not describe the current installation; see the later dependency inspection above. Run a fresh aggregate `npm run verify` against the installed releases. The user reported successful earlier manual execution; a complete browser interaction audit has not been recorded. The existing deployment-document edits were preserved.
