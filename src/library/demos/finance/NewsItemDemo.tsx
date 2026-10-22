import { useI18n } from '@jankrajewskiit/i18n';
import { NewsItem, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

export const NewsItemDemo = () => {
  const { ts } = useI18n();
  const [selected, setSelected] = createSignal('GLBX');
  return (
    <Stack>
      <NewsItem
        title={ts('library.finance.controls.newsTitle')}
        source={ts('library.finance.controls.source')}
        time={ts('library.finance.controls.newsTime')}
        region={ts('library.finance.controls.newsRegion')}
        impact="medium"
        aiLabel={ts('library.finance.controls.newsSummary')}
        bullets={[ts('library.finance.controls.newsBulletOne'), ts('library.finance.controls.newsBulletTwo')]}
        tickers={['GLBX', 'TBND']}
        onTickerClick={setSelected}
      />
      <Text role="status" tone="secondary">
        {ts('library.finance.controls.selected', { symbol: selected() })}
      </Text>
    </Stack>
  );
};
