import { useI18n } from '@jankrajewskiit/i18n';
import { Badge, InstrumentHeader } from '@jankrajewskiit/ui';

export const InstrumentHeaderDemo = () => {
  const { ts } = useI18n();

  return (
    <InstrumentHeader
      symbol="GLBX"
      name={ts('library.finance.controls.fund')}
      venue="XETRA"
      price={142.5}
      reference={140}
      currency="EUR"
      change={1.79}
      changeAbs={2.5}
      badges={<Badge tone="info">{ts('library.trading.workspace.paper')}</Badge>}
      meta={[
        { label: ts('library.trading.workspace.source'), value: ts('library.finance.controls.source') },
        { label: ts('library.trading.workspace.account'), value: 'DEMO-042', mono: true },
      ]}
    />
  );
};
