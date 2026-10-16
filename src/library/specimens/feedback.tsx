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
    render: () => (
      <div class={styles.stack}>
        <CaptionedRow caption="Alert">
          <div class={styles.alertGrid}>
            <Alert tone="info" title="Import scheduled">
              The CSV import starts tonight at 02:00.
            </Alert>
            <Alert tone="success" title="Invoice sent">
              INV-1042 was delivered to the billing contact.
            </Alert>
            <Alert tone="warning" title="Storage almost full">
              You have used 92% of your quota.
            </Alert>
            <Alert tone="danger" title="Payment failed">
              The card ending in 4242 was declined.
            </Alert>
            <Alert tone="info" variant="outline" title="Outline">
              Border and raised surface, no tint.
            </Alert>
            <Alert tone="brand" variant="solid" title="Solid">
              Strong fill for the one message that must be seen.
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
                  What’s new
                </Button>
              }
            >
              Version 3.1 adds dark-mode charts and a faster table.
            </Banner>
            <Banner
              tone="info"
              action={
                <Button size="sm" variant="ghost">
                  Details
                </Button>
              }
            >
              Scheduled maintenance on Sunday, 02:00–04:00 UTC.
            </Banner>
            <Banner
              tone="warning"
              action={
                <Button size="sm" variant="ghost">
                  Add card
                </Button>
              }
            >
              Your trial ends in 3 days.
            </Banner>
            <Banner
              tone="danger"
              action={
                <Button size="sm" variant="ghost">
                  Status page
                </Button>
              }
            >
              Exports are delayed. We are investigating.
            </Banner>
          </div>
        </CaptionedRow>
      </div>
    ),
  },
  {
    id: 'feedback-toasts',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <CaptionedRow caption="Tones">
          <div class={styles.list}>
            <Toast tone="neutral" title="Link copied" description="Share it with your team." />
            <Toast tone="success" title="Changes saved" description="Your draft is up to date." />
            <Toast tone="warning" title="Connection unstable" description="Retrying in a few seconds." />
            <Toast tone="danger" title="Upload failed" description="The file is larger than 25 MB." />
          </div>
        </CaptionedRow>
        <CaptionedRow caption="Live — bottom-right of the viewport">
          <ToastLiveDemo />
        </CaptionedRow>
      </div>
    ),
  },
  {
    id: 'feedback-toast-region',
    span: 6,
    render: () => <ToastRegionDemo />,
  },
  {
    id: 'feedback-progress',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <CaptionedRow caption="Tones">
          <div class={styles.list}>
            <Progress value={64} label="Uploading report-q3.pdf" showValue />
            <Progress value={100} tone="success" label="Import complete" showValue />
            <Progress value={86} tone="warning" label="Storage" showValue />
            <Progress
              value={970}
              max={1000}
              tone="danger"
              label="API quota"
              showValue
              format={(value, max) => `${value} of ${max}`}
            />
          </div>
        </CaptionedRow>
        <CaptionedRow caption="Sizes and indeterminate">
          <div class={styles.list}>
            <Progress value={30} size="sm" label="Small" />
            <Progress value={50} size="md" label="Medium" />
            <Progress value={70} size="lg" label="Large" />
            <Progress indeterminate label="Syncing" />
          </div>
        </CaptionedRow>
        <CaptionedRow caption="Ring">
          <ProgressRing value={72} label="Upload 72%" />
          <ProgressRing value={100} tone="success" label="Import 100%" />
          <ProgressRing value={86} tone="warning" label="Storage 86%" />
          <ProgressRing value={97} tone="danger" label="Quota 97%" />
          <ProgressRing value={82} size={72} role="meter" label="Score 82 of 100">
            82/100
          </ProgressRing>
        </CaptionedRow>
      </div>
    ),
  },
  {
    id: 'feedback-loading',
    span: 12,
    render: () => (
      <div class={styles.columns}>
        <div class={styles.stack}>
          <CaptionedRow caption="Spinner variants">
            <For each={SPINNER_VARIANTS}>{(variant) => <Spinner variant={variant} label={variant} />}</For>
          </CaptionedRow>
          <CaptionedRow caption="Sizes">
            <For each={SPINNER_SIZES}>{(size) => <Spinner size={size} label={size} />}</For>
          </CaptionedRow>
          <CaptionedRow caption="Robot processing indicator">
            <div class={styles.list}>
              <RobotProcessingIndicator label="Reading the job listing from its link" />
              <RobotProcessingIndicator label="Drafting a cover letter" />
            </div>
          </CaptionedRow>
          <CaptionedRow caption="Loading overlay">
            <LoadingOverlay class={styles.overlay}>
              <p class={styles.overlayBody}>Quarterly figures are being refreshed from the ledger.</p>
            </LoadingOverlay>
          </CaptionedRow>
        </div>
        <div class={styles.stack}>
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
      </div>
    ),
  },
  {
    id: 'feedback-loaders',
    span: 12,
    render: () => (
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
        <PreviewTile caption="PageLoader · contained" class={styles.wide}>
          <div class={styles.pageLoaderBox}>
            <PageLoader fullScreen={false} />
          </div>
        </PreviewTile>
      </div>
    ),
  },
  {
    id: 'feedback-empty-error',
    span: 8,
    render: () => (
      <div class={styles.tileGrid}>
        <PreviewTile caption="EmptyState · md">
          <EmptyState
            title="No projects yet"
            description="Create your first project to get started."
            actions={
              <Button size="sm" iconLeft="plus">
                New project
              </Button>
            }
          />
        </PreviewTile>
        <PreviewTile caption="EmptyState · sm">
          <EmptyState size="sm" icon="search" tone="info" title="No results" description="Try a different filter." />
        </PreviewTile>
        <PreviewTile caption="ErrorState · md">
          <ErrorState details="TypeError: Failed to fetch" />
        </PreviewTile>
        <PreviewTile caption="ErrorState · sm">
          <ErrorState size="sm" title="Couldn’t load activity" />
        </PreviewTile>
      </div>
    ),
  },
  {
    id: 'feedback-countdown',
    span: 4,
    render: () => (
      <div class={styles.stack}>
        <CaptionedRow caption="Boxes">
          <Countdown to={inFuture(3 * DAY_MS + 4 * HOUR_MS)} size="sm" />
        </CaptionedRow>
        <CaptionedRow caption="Inline">
          <Countdown
            to={inFuture(2 * HOUR_MS + 14 * 60_000)}
            variant="inline"
            size="lg"
            units={['hours', 'minutes', 'seconds']}
          />
        </CaptionedRow>
      </div>
    ),
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
];
