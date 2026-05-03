import {
  Button,
  Chip,
  CodeText,
  ConfirmAction,
  ConfirmDialog,
  ContextMenu,
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
  Heading,
  Popover,
  Sheet,
  Text,
  Tooltip,
  Tour,
  type TourStep,
  useI18n,
} from '@jankrajewskiit/ui';
import { IoCopy, IoPencil, IoTrash } from 'solid-icons/io';
import { createMemo, createSignal, Show } from 'solid-js';

import { PreviewGroup, PreviewPanel, ShowcaseMeta, ShowcaseSection } from '../components/ShowcaseSection';
import type { SectionId } from '../nav/demoNavConfig';

const OverlaysSection = (props: { sectionId: SectionId }) => {
  const { ts, tx } = useI18n();
  const [tourOpen, setTourOpen] = createSignal(false);
  const [dialogOpen, setDialogOpen] = createSignal(false);
  const [confirmOpen, setConfirmOpen] = createSignal(false);
  const [sheetActionsOpen, setSheetActionsOpen] = createSignal(false);
  const [confirmRuns, setConfirmRuns] = createSignal(0);
  const [bottomSheetOpen, setBottomSheetOpen] = createSignal(false);
  const [leftSheetOpen, setLeftSheetOpen] = createSignal(false);
  const [rightSheetOpen, setRightSheetOpen] = createSignal(false);

  const tourSteps = createMemo<TourStep[]>(() => [
    {
      target: '.showcaseTitle',
      title: ts('demo.text.overlays.tour.welcomeTitle'),
      content: ts('demo.text.overlays.tour.welcomeContent'),
      placement: 'bottom',
    },
    {
      target: '.previewPanel',
      title: ts('demo.text.overlays.tour.previewTitle'),
      content: ts('demo.text.overlays.tour.previewContent'),
      placement: 'bottom',
    },
    {
      target: '.themeToggleBar',
      title: ts('demo.text.overlays.tour.themeTitle'),
      content: ts('demo.text.overlays.tour.themeContent'),
      placement: 'top',
    },
  ]);

  return (
    <div>
      <Show when={props.sectionId === 'overlays-tooltips'}>
        <ShowcaseSection
          title={ts('demo.showcase.overlays.tooltip.title')}
          subtitle={ts('demo.showcase.overlays.tooltip.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.common.examples')}>
              <div class="row">
                <Tooltip content={ts('demo.text.overlays.tooltip.topContent')} position="top">
                  <Button variant="ghost">{ts('demo.text.overlays.tooltip.top')}</Button>
                </Tooltip>
                <Tooltip content={ts('demo.text.overlays.tooltip.bottomContent')} position="bottom">
                  <Button variant="ghost">{ts('demo.text.overlays.tooltip.bottom')}</Button>
                </Tooltip>
                <Tooltip content={ts('demo.text.overlays.tooltip.leftContent')} position="left">
                  <Button variant="ghost">{ts('demo.text.overlays.tooltip.left')}</Button>
                </Tooltip>
                <Tooltip content={ts('demo.text.overlays.tooltip.rightContent')} position="right">
                  <Button variant="ghost">{ts('demo.text.overlays.tooltip.right')}</Button>
                </Tooltip>
              </div>
            </PreviewGroup>
          </PreviewPanel>
        </ShowcaseSection>

        <ShowcaseSection
          title={ts('demo.showcase.overlays.popover.title')}
          subtitle={ts('demo.showcase.overlays.popover.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.common.examples')}>
              <div class="row">
                <Popover
                  trigger={(triggerProps) => (
                    <Button variant="ghost" {...triggerProps}>
                      {ts('demo.text.overlays.tooltip.top')}
                    </Button>
                  )}
                  content={ts('demo.text.overlays.popover.topContent')}
                  position="top"
                />
                <Popover
                  trigger={(triggerProps) => (
                    <Button variant="ghost" {...triggerProps}>
                      {ts('demo.text.overlays.tooltip.bottom')}
                    </Button>
                  )}
                  content={ts('demo.text.overlays.popover.bottomContent')}
                  position="bottom"
                />
                <Popover
                  trigger={(triggerProps) => (
                    <Button variant="ghost" {...triggerProps}>
                      {ts('demo.text.overlays.tooltip.left')}
                    </Button>
                  )}
                  content={ts('demo.text.overlays.popover.leftContent')}
                  position="left"
                />
                <Popover
                  trigger={(triggerProps) => (
                    <Button variant="ghost" {...triggerProps}>
                      {ts('demo.text.overlays.tooltip.right')}
                    </Button>
                  )}
                  content={ts('demo.text.overlays.popover.rightContent')}
                  position="right"
                />
              </div>
            </PreviewGroup>
          </PreviewPanel>
        </ShowcaseSection>
      </Show>

      <Show when={props.sectionId === 'overlays-dialogs'}>
        <ShowcaseSection
          title={ts('demo.showcase.overlays.dialog.title')}
          subtitle={ts('demo.showcase.overlays.dialog.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.common.examples')}>
              <div class="scenarioShell">
                <div class="scenarioHeader">
                  <div class="scenarioHeaderCopy">
                    <Text as="p" variant="overline" tone="primary">
                      {ts('demo.page.overlaysDialogs.title')}
                    </Text>
                    <Heading level={3} variant="titleLg">
                      {ts('demo.page.overlaysDialogs.description')}
                    </Heading>
                  </div>
                  <div class="scenarioMetricRow">
                    <div class="scenarioMetric">
                      <Text as="span" variant="overline" tone="tertiary">
                        {ts('demo.text.overlays.confirmAction.confirmedActions')}
                      </Text>
                      <Text as="span" variant="labelLg">
                        {confirmRuns()}
                      </Text>
                    </div>
                    <div class="scenarioMetric">
                      <Text as="span" variant="overline" tone="tertiary">
                        {ts('demo.text.overlays.confirmAction.confirmOpened')}
                      </Text>
                      <Text as="span" variant="labelLg">
                        {dialogOpen()
                          ? ts('demo.text.overlays.confirmAction.yes')
                          : ts('demo.text.overlays.confirmAction.no')}
                      </Text>
                    </div>
                  </div>
                </div>

                <div class="actionCluster">
                  <Button variant="primary" onClick={() => setDialogOpen(true)}>
                    {ts('demo.text.overlays.dialog.openDialog')}
                  </Button>
                  <Button variant="danger" onClick={() => setConfirmOpen(true)}>
                    {ts('demo.text.overlays.confirmDialog.deleteItem')}
                  </Button>
                </div>
              </div>

              <Dialog open={dialogOpen()} onClose={() => setDialogOpen(false)}>
                <DialogTitle label={ts('demo.text.overlays.dialog.exampleTitle')} />
                <DialogBody>
                  <Text as="p" variant="bodySm" tone="muted" class="mutedText">
                    {tx('demo.text.overlays.dialog.meta', {
                      dialogElement: () => (
                        <CodeText as="span" class="codeInline">
                          &lt;dialog&gt;
                        </CodeText>
                      ),
                    })}
                  </Text>
                </DialogBody>
                <DialogActions>
                  <Button variant="ghost" onClick={() => setDialogOpen(false)}>
                    {ts('demo.text.overlays.dialog.cancel')}
                  </Button>
                  <Button variant="primary" onClick={() => setDialogOpen(false)}>
                    {ts('demo.text.overlays.dialog.confirm')}
                  </Button>
                </DialogActions>
              </Dialog>
            </PreviewGroup>
          </PreviewPanel>
        </ShowcaseSection>

        <ShowcaseSection
          title={ts('demo.showcase.overlays.confirmDialog.title')}
          subtitle={ts('demo.showcase.overlays.confirmDialog.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.common.examples')}>
              <Button variant="danger" onClick={() => setConfirmOpen(true)}>
                {ts('demo.text.overlays.confirmDialog.deleteItem')}
              </Button>

              <ConfirmDialog
                open={confirmOpen()}
                label={ts('demo.text.overlays.confirmDialog.deleteItemQuestion')}
                message={ts('demo.text.overlays.confirmDialog.deleteItemMessage')}
                confirmLabel={ts('demo.text.overlays.confirmDialog.delete')}
                variant="danger"
                onConfirm={() => setConfirmOpen(false)}
                onClose={() => setConfirmOpen(false)}
              />
            </PreviewGroup>
          </PreviewPanel>
        </ShowcaseSection>

        <ShowcaseSection
          title={ts('demo.showcase.overlays.confirmAction.title')}
          subtitle={ts('demo.showcase.overlays.confirmAction.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.common.examples')}>
              <ConfirmAction
                label={ts('demo.text.overlays.confirmAction.runDestructive')}
                message={ts('demo.text.overlays.confirmAction.message')}
                confirmLabel={ts('demo.text.overlays.confirmAction.run')}
                variant="danger"
                onConfirm={() => {
                  setConfirmRuns((current) => current + 1);
                }}
              >
                {({ openConfirm, isConfirmOpen }) => (
                  <div class="row">
                    <Button variant="danger" onClick={openConfirm}>
                      {ts('demo.text.overlays.confirmAction.openConfirmation')}
                    </Button>
                    <Chip
                      variant="subtle"
                      label={`${ts('demo.text.overlays.confirmAction.confirmOpened')}: ${isConfirmOpen() ? ts('demo.text.overlays.confirmAction.yes') : ts('demo.text.overlays.confirmAction.no')}`}
                    />
                  </div>
                )}
              </ConfirmAction>
            </PreviewGroup>
          </PreviewPanel>
          <ShowcaseMeta>
            {ts('demo.text.overlays.confirmAction.confirmedActions')}:{' '}
            <CodeText as="span" class="codeInline">
              {String(confirmRuns())}
            </CodeText>
          </ShowcaseMeta>
        </ShowcaseSection>
      </Show>

      <Show when={props.sectionId === 'overlays-sheets'}>
        <ShowcaseSection
          title={ts('demo.showcase.overlays.sheets.title')}
          subtitle={ts('demo.showcase.overlays.sheets.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.common.examples')}>
              <div class="row">
                <Button variant="ghost" onClick={() => setBottomSheetOpen(true)}>
                  {ts('demo.text.overlays.sheets.bottomSheet')}
                </Button>
                <Button variant="ghost" onClick={() => setLeftSheetOpen(true)}>
                  {ts('demo.text.overlays.sheets.leftSheet')}
                </Button>
                <Button variant="ghost" onClick={() => setRightSheetOpen(true)}>
                  {ts('demo.text.overlays.sheets.rightSheet')}
                </Button>
                <Button variant="ghost" onClick={() => setSheetActionsOpen(true)}>
                  {ts('demo.text.overlays.sheets.openRightSheet')}
                </Button>
              </div>

              <Sheet
                open={bottomSheetOpen()}
                onClose={() => setBottomSheetOpen(false)}
                label={ts('demo.text.overlays.sheets.bottomSheet')}
                side="bottom"
                size="md"
              >
                <Text as="p" variant="bodySm" tone="muted" class="mutedText">
                  {ts('demo.text.overlays.sheets.bottomContent')}
                </Text>
              </Sheet>

              <Sheet
                open={leftSheetOpen()}
                onClose={() => setLeftSheetOpen(false)}
                label={ts('demo.text.overlays.sheets.leftSheet')}
                side="left"
                size="sm"
              >
                <Text as="p" variant="bodySm" tone="muted" class="mutedText">
                  {ts('demo.text.overlays.sheets.leftContent')}
                </Text>
              </Sheet>

              <Sheet
                open={rightSheetOpen()}
                onClose={() => setRightSheetOpen(false)}
                label={ts('demo.text.overlays.sheets.rightSheet')}
                side="right"
                size="lg"
              >
                <Text as="p" variant="bodySm" tone="muted" class="mutedText">
                  {ts('demo.text.overlays.sheets.rightContent')}
                </Text>
              </Sheet>

              <Sheet
                open={sheetActionsOpen()}
                onClose={() => setSheetActionsOpen(false)}
                label={ts('demo.text.overlays.sheets.settings')}
                subtitle={ts('demo.text.overlays.sheets.adjustPreferences')}
                side="right"
                size="lg"
                actions={
                  <>
                    <Button variant="ghost" onClick={() => setSheetActionsOpen(false)}>
                      {ts('demo.text.overlays.sheets.cancel')}
                    </Button>
                    <Button variant="primary" onClick={() => setSheetActionsOpen(false)}>
                      {ts('demo.text.overlays.sheets.saveChanges')}
                    </Button>
                  </>
                }
              >
                <Text as="p" variant="bodySm" tone="muted" class="mutedText">
                  {ts('demo.text.overlays.sheets.settingsContent')}
                </Text>
              </Sheet>
            </PreviewGroup>
          </PreviewPanel>
        </ShowcaseSection>
      </Show>

      <Show when={props.sectionId === 'overlays-context'}>
        <ShowcaseSection
          title={ts('demo.showcase.overlays.contextMenu.title')}
          subtitle={ts('demo.showcase.overlays.contextMenu.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.common.examples')}>
              <ContextMenu
                items={[
                  { label: ts('demo.text.overlays.contextMenu.edit'), icon: <IoPencil />, onClick: () => {} },
                  { label: ts('demo.text.overlays.contextMenu.duplicate'), icon: <IoCopy />, onClick: () => {} },
                  'separator',
                  {
                    label: ts('demo.text.overlays.contextMenu.delete'),
                    icon: <IoTrash />,
                    onClick: () => {},
                    danger: true,
                  },
                ]}
              >
                <div class="contextMenuTarget">{ts('demo.text.overlays.contextMenu.rightClickHere')}</div>
              </ContextMenu>
            </PreviewGroup>
          </PreviewPanel>
          <ShowcaseMeta>{ts('demo.text.overlays.contextMenu.meta')}</ShowcaseMeta>
        </ShowcaseSection>
      </Show>

      <Show when={props.sectionId === 'overlays-lightbox'}>
        <ShowcaseSection
          title={ts('demo.showcase.overlays.tour.title')}
          subtitle={ts('demo.showcase.overlays.tour.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.common.examples')}>
              <Button variant="primary" onClick={() => setTourOpen(true)}>
                {ts('demo.text.overlays.tour.startTour')}
              </Button>
              <Tour steps={tourSteps()} open={tourOpen()} onClose={() => setTourOpen(false)} />
            </PreviewGroup>
          </PreviewPanel>
          <ShowcaseMeta>{ts('demo.text.overlays.tour.meta')}</ShowcaseMeta>
        </ShowcaseSection>
      </Show>
    </div>
  );
};

export default OverlaysSection;
