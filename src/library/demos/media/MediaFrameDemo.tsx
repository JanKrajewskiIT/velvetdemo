import { useI18n } from '@jankrajewskiit/i18n';
import { Grid, MediaFrame, Stack, Text } from '@jankrajewskiit/ui';

import { sampleImage } from './sampleImages';

const FRAME_IMAGE = sampleImage();
const MISSING_IMAGE_SRC = 'https://example.invalid/missing.jpg';

export const MediaFrameDemo = () => {
  const { ts } = useI18n();

  return (
    <Stack gap={4}>
      <Grid min={150} gap={3}>
        <MediaFrame
          src={FRAME_IMAGE.src}
          alt={FRAME_IMAGE.alt}
          ratio="square"
          showRatio
          bordered
          placeholder={ts('library.media.demo.placeholderSquare')}
          credit="--aspect-square"
        />
        <MediaFrame
          src={FRAME_IMAGE.src}
          alt={FRAME_IMAGE.alt}
          ratio="video"
          size="sm"
          title={ts('library.media.demo.introTitle')}
          credit="--aspect-video"
        />
        <MediaFrame
          src={FRAME_IMAGE.src}
          alt={FRAME_IMAGE.alt}
          ratio="photo"
          placeholder={ts('library.media.demo.placeholderPhoto')}
        />
        <MediaFrame
          src={FRAME_IMAGE.src}
          alt={FRAME_IMAGE.alt}
          ratio="portrait"
          placeholder={ts('library.media.demo.placeholderPortrait')}
        />
      </Grid>
      <MediaFrame
        src={FRAME_IMAGE.src}
        alt={FRAME_IMAGE.alt}
        ratio="wide"
        title="Studio tour"
        badge="2:14"
        overlay="Studio tour"
      />
      <Grid min={240} gap={3}>
        <Stack gap={2}>
          <MediaFrame loading ratio="video" />
          <Text variant="caption" tone="tertiary">
            {ts('library.media.demo.placeholderRatio')}
          </Text>
        </Stack>
        <Stack gap={2}>
          <MediaFrame src={MISSING_IMAGE_SRC} alt={ts('library.media.demo.missingAlt')} ratio="video" credit="404" />
          <Text variant="caption" tone="tertiary">
            {ts('library.media.demo.retrySource')}
          </Text>
        </Stack>
      </Grid>
    </Stack>
  );
};
