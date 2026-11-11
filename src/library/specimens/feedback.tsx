import { useI18n } from '@jankrajewskiit/i18n';
import type { LoaderShape, SpinnerVariant, StatusPageCode } from '@jankrajewskiit/ui';
import {
  Alert,
  Banner,
  Button,
  Countdown,
  EmptyState,
  ErrorState,
  Loader,
  LOADER_VARIANTS,
  LoadingOverlay,
  PageLoader,
  Progress,
  ProgressRing,
  RobotProcessingIndicator,
  Skeleton,
  SkeletonText,
  Spinner,
  StatusPage,
  Toast,
} from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import type { feedbackEn } from '../../i18n/library/feedback';
import { CaptionedRow } from '../demos/display/CaptionedRow';
import { DismissibleAlertDemo } from '../demos/feedback/DismissibleAlertDemo';
import { GateListDemo } from '../demos/feedback/GateListDemo';
import { NotificationsDemo } from '../demos/feedback/NotificationsDemo';
import { PreviewTile } from '../demos/feedback/PreviewTile';
import { SetupChecklistDemo } from '../demos/feedback/SetupChecklistDemo';
import { ToastLiveDemo } from '../demos/feedback/ToastLiveDemo';
import { ToastRegionDemo } from '../demos/feedback/ToastRegionDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './feedback.module.css';

const HOUR_MS = 3_600_000;
const DAY_MS = 24 * HOUR_MS;
const inFuture = (ms: number) => new Date(Date.now() + ms);

const SPINNER_VARIANTS: readonly SpinnerVariant[] = ['ring', 'dots', 'bars', 'pulse'];
const SPINNER_SIZES = ['sm', 'md', 'lg'] as const;
const LOADER_SHAPES: readonly LoaderShape[] = ['circle', 'triangle', 'square'];
const STATUS_CODES: readonly StatusPageCode[] = [404, 403, 500, 'offline', 'success'];

export const feedbackSpecimens: readonly Specimen<SpecimenIdOf<typeof feedbackEn>>[] = [
  {
    id: 'feedback-messages',
    span: 12,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.stack}>
          <CaptionedRow caption="Alert">
            <div class={styles.alertGrid}>
              <Alert tone="info" title={t('library.feedback.specimens.feedback-messages.importTitle')}>
                {t('library.feedback.specimens.feedback-messages.importBody')}
              </Alert>
              <Alert tone="success" title={t('library.feedback.specimens.feedback-messages.invoiceTitle')}>
                {t('library.feedback.specimens.feedback-messages.invoiceBody')}
              </Alert>
              <Alert tone="warning" title={t('library.feedback.specimens.feedback-messages.storageTitle')}>
                {t('library.feedback.specimens.feedback-messages.storageBody')}
              </Alert>
              <Alert tone="danger" title={t('library.feedback.specimens.feedback-messages.paymentTitle')}>
                {t('library.feedback.specimens.feedback-messages.paymentBody')}
              </Alert>
              <Alert
                tone="info"
                variant="outline"
                title={t('library.feedback.specimens.feedback-messages.outlineTitle')}
              >
                {t('library.feedback.specimens.feedback-messages.outlineBody')}
              </Alert>
              <Alert tone="brand" variant="solid" title={t('library.feedback.specimens.feedback-messages.solidTitle')}>
                {t('library.feedback.specimens.feedback-messages.solidBody')}
              </Alert>
              <DismissibleAlertDemo />
            </div>
          </CaptionedRow>
          <CaptionedRow caption="Banner">
            <div class={styles.banners}>
              <Banner
                tone="brand"
                action={
                  <Button size="sm" variant="ghost">
                    {t('library.feedback.specimens.feedback-messages.whatsNew')}
                  </Button>
                }
              >
                {t('library.feedback.specimens.feedback-messages.versionBanner')}
              </Banner>
              <Banner
                tone="info"
                action={
                  <Button size="sm" variant="ghost">
                    {t('library.feedback.specimens.feedback-messages.details')}
                  </Button>
                }
              >
                {t('library.feedback.specimens.feedback-messages.maintenanceBanner')}
              </Banner>
              <Banner
                tone="warning"
                action={
                  <Button size="sm" variant="ghost">
                    {t('library.feedback.specimens.feedback-messages.addCard')}
                  </Button>
                }
              >
                {t('library.feedback.specimens.feedback-messages.trialBanner')}
              </Banner>
              <Banner
                tone="danger"
                action={
                  <Button size="sm" variant="ghost">
                    {t('library.feedback.specimens.feedback-messages.statusPage')}
                  </Button>
                }
              >
                {t('library.feedback.specimens.feedback-messages.exportsBanner')}
              </Banner>
            </div>
          </CaptionedRow>
        </div>
      );
    },
  },
  {
    id: 'feedback-toasts',
    span: 6,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.stack}>
          <CaptionedRow caption={t('library.feedback.specimens.feedback-toasts.tonesCaption')}>
            <div class={styles.list}>
              <Toast
                tone="neutral"
                title={t('library.feedback.specimens.feedback-toasts.linkCopied')}
                description={t('library.feedback.specimens.feedback-toasts.linkCopiedBody')}
              />
              <Toast
                tone="success"
                title={t('library.feedback.specimens.feedback-toasts.changesSaved')}
                description={t('library.feedback.specimens.feedback-toasts.changesSavedBody')}
              />
              <Toast
                tone="warning"
                title={t('library.feedback.specimens.feedback-toasts.connectionUnstable')}
                description={t('library.feedback.specimens.feedback-toasts.connectionUnstableBody')}
              />
              <Toast
                tone="danger"
                title={t('library.feedback.specimens.feedback-toasts.uploadFailed')}
                description={t('library.feedback.specimens.feedback-toasts.uploadFailedBody')}
              />
            </div>
          </CaptionedRow>
          <CaptionedRow caption={t('library.feedback.specimens.feedback-toasts.liveCaption')}>
            <ToastLiveDemo />
          </CaptionedRow>
        </div>
      );
    },
  },
  {
    id: 'feedback-toast-region',
    span: 6,
    render: () => <ToastRegionDemo />,
  },
  {
    id: 'feedback-progress',
    span: 6,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.stack}>
          <CaptionedRow caption={t('library.feedback.specimens.feedback-progress.tonesCaption')}>
            <div class={styles.list}>
              <Progress value={64} label={t('library.feedback.specimens.feedback-progress.uploading')} showValue />
              <Progress
                value={100}
                tone="success"
                label={t('library.feedback.specimens.feedback-progress.importComplete')}
                showValue
              />
              <Progress
                value={86}
                tone="warning"
                label={t('library.feedback.specimens.feedback-progress.storage')}
                showValue
              />
              <Progress
                value={970}
                max={1000}
                tone="danger"
                label={t('library.feedback.specimens.feedback-progress.apiQuota')}
                showValue
                format={(value, max) => t('library.feedback.specimens.feedback-progress.formatValue', { value, max })}
              />
            </div>
          </CaptionedRow>
          <CaptionedRow caption={t('library.feedback.specimens.feedback-progress.sizesCaption')}>
            <div class={styles.list}>
              <Progress value={30} size="sm" label={t('library.feedback.specimens.feedback-progress.small')} />
              <Progress value={50} size="md" label={t('library.feedback.specimens.feedback-progress.medium')} />
              <Progress value={70} size="lg" label={t('library.feedback.specimens.feedback-progress.large')} />
              <Progress indeterminate label={t('library.feedback.specimens.feedback-progress.syncing')} />
            </div>
          </CaptionedRow>
          <CaptionedRow caption={t('library.feedback.specimens.feedback-progress.ringCaption')}>
            <ProgressRing value={72} label={t('library.feedback.specimens.feedback-progress.uploadRing')} />
            <ProgressRing
              value={100}
              tone="success"
              label={t('library.feedback.specimens.feedback-progress.importRing')}
            />
            <ProgressRing
              value={86}
              tone="warning"
              label={t('library.feedback.specimens.feedback-progress.storageRing')}
            />
            <ProgressRing
              value={97}
              tone="danger"
              label={t('library.feedback.specimens.feedback-progress.quotaRing')}
            />
            <ProgressRing
              value={82}
              size={72}
              role="meter"
              label={t('library.feedback.specimens.feedback-progress.scoreRing')}
            >
              82/100
            </ProgressRing>
          </CaptionedRow>
        </div>
      );
    },
  },
  {
    id: 'feedback-loading',
    span: 6,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.stack}>
          <CaptionedRow caption="RobotProcessingIndicator">
            <div class={styles.list}>
              <RobotProcessingIndicator label={t('library.feedback.specimens.feedback-loading.processingLink')} />
              <RobotProcessingIndicator label={t('library.feedback.specimens.feedback-loading.coverLetter')} />
            </div>
          </CaptionedRow>
          <CaptionedRow caption="LoadingOverlay">
            <LoadingOverlay class={styles.overlay}>
              <p class={styles.overlayBody}>{t('library.feedback.specimens.feedback-loading.overlayBody')}</p>
            </LoadingOverlay>
          </CaptionedRow>
        </div>
      );
    },
  },
  {
    id: 'feedback-skeleton',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <CaptionedRow caption="Spinner">
          <For each={SPINNER_VARIANTS}>{(variant) => <Spinner variant={variant} label={variant} />}</For>
          <For each={SPINNER_SIZES}>{(size) => <Spinner size={size} label={size} />}</For>
        </CaptionedRow>
        <CaptionedRow caption="Skeleton">
          <div class={styles.skeletonCard} aria-busy="true">
            <div class={styles.identity}>
              <Skeleton circle height={40} />
              <div class={styles.identityText}>
                <Skeleton width={160} height={14} />
                <Skeleton width={104} height={12} />
              </div>
            </div>
            <SkeletonText lines={3} />
            <Skeleton width={96} height={32} radius={8} />
          </div>
        </CaptionedRow>
      </div>
    ),
  },
  {
    id: 'feedback-loaders',
    span: 12,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.tileGrid}>
          <For each={LOADER_VARIANTS}>
            {(variant) => (
              <PreviewTile caption={variant}>
                <Loader variant={variant} scale={0.6} decorative />
              </PreviewTile>
            )}
          </For>
          <For each={LOADER_SHAPES}>
            {(shape) => (
              <PreviewTile caption={`shape-trail · ${shape}`}>
                <Loader variant="shape-trail" shape={shape} scale={0.6} decorative />
              </PreviewTile>
            )}
          </For>
          <PreviewTile caption={t('library.feedback.specimens.feedback-loaders.pageLoaderCaption')} class={styles.wide}>
            <div class={styles.pageLoaderBox}>
              <PageLoader fullScreen={false} />
            </div>
          </PreviewTile>
        </div>
      );
    },
  },
  {
    id: 'feedback-empty-error',
    span: 8,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.tileGrid}>
          <PreviewTile caption="EmptyState · md">
            <EmptyState
              title={t('library.feedback.specimens.feedback-empty-error.noProjects')}
              description={t('library.feedback.specimens.feedback-empty-error.noProjectsBody')}
              actions={
                <Button size="sm" iconLeft="plus">
                  {t('library.feedback.specimens.feedback-empty-error.newProject')}
                </Button>
              }
            />
          </PreviewTile>
          <PreviewTile caption="EmptyState · sm">
            <EmptyState
              size="sm"
              icon="search"
              tone="info"
              title={t('library.feedback.specimens.feedback-empty-error.noResults')}
              description={t('library.feedback.specimens.feedback-empty-error.noResultsBody')}
            />
          </PreviewTile>
          <PreviewTile caption="ErrorState · md">
            <ErrorState details="TypeError: Failed to fetch" />
          </PreviewTile>
          <PreviewTile caption="ErrorState · sm">
            <ErrorState size="sm" title={t('library.feedback.specimens.feedback-empty-error.couldNotLoad')} />
          </PreviewTile>
        </div>
      );
    },
  },
  {
    id: 'feedback-countdown',
    span: 4,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.stack}>
          <CaptionedRow caption={t('library.feedback.specimens.feedback-countdown.boxesCaption')}>
            <Countdown to={inFuture(3 * DAY_MS + 4 * HOUR_MS)} size="sm" />
          </CaptionedRow>
          <CaptionedRow caption={t('library.feedback.specimens.feedback-countdown.inlineCaption')}>
            <Countdown
              to={inFuture(2 * HOUR_MS + 14 * 60_000)}
              variant="inline"
              size="lg"
              units={['hours', 'minutes', 'seconds']}
            />
          </CaptionedRow>
        </div>
      );
    },
  },
  {
    id: 'feedback-status-pages',
    span: 12,
    render: () => (
      <div class={styles.statusGrid}>
        <For each={STATUS_CODES}>
          {(code) => (
            <PreviewTile caption={`status · ${code}`}>
              <StatusPage status={code} size="md" />
            </PreviewTile>
          )}
        </For>
      </div>
    ),
  },
  {
    id: 'feedback-notifications',
    span: 6,
    render: () => <NotificationsDemo />,
  },
  {
    id: 'feedback-setup-checklist',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <SetupChecklistDemo />
      </div>
    ),
  },
  {
    id: 'feedback-gate-list',
    span: 6,
    render: () => <GateListDemo />,
  },
];
