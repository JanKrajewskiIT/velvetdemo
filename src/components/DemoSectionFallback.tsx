import { Skeleton, Text } from '@jankrajewskiit/ui';
import { useI18n } from '@jankrajewskiit/ui';
const DemoSectionFallback = () => {
  const { ts } = useI18n();

  return (
    <div class="demoSectionFallback">
      <Text as="p" variant="bodySm" tone="muted">
        {ts('demo.text.common.loadingSection')}
      </Text>
      <Skeleton variant="text" width="90%" height={18} />
      <Skeleton variant="text" width="72%" height={14} />
      <Skeleton variant="rectangular" height={200} animation="pulse" />
    </div>
  );
};

export default DemoSectionFallback;
