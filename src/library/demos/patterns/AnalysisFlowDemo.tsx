import { useI18n } from '@jankrajewskiit/i18n';
import type { ReportResult } from '@jankrajewskiit/ui';
import { AnalysisReport, AnalysisRequest } from '@jankrajewskiit/ui';
import { createSignal, onCleanup } from 'solid-js';

import { reportAsyncError } from '../../../browserDiagnostics';
import styles from './AnalysisFlowDemo.module.css';
import { createAnalysisSources, createAnalysisSteps, createAnalysisTypes, createReportResult } from './analysisSamples';
import { createSimulatedDelay } from './createSimulatedDelay';

const STEP_DELAY_MS = 800;

export const AnalysisFlowDemo = () => {
  const { ts } = useI18n();
  const steps = createAnalysisSteps(ts);
  const sources = createAnalysisSources(ts);
  const analyses = createAnalysisTypes(ts);
  const reportResult = createReportResult(ts);
  const delay = createSimulatedDelay(STEP_DELAY_MS);
  const [status, setStatus] = createSignal<'idle' | 'running'>('idle');
  const [step, setStep] = createSignal(0);
  const [result, setResult] = createSignal<ReportResult | null>(null);
  let runId = 0;
  onCleanup(() => {
    runId += 1;
  });

  const run = async () => {
    runId += 1;
    const current = runId;
    setStatus('running');
    setResult(null);
    for (let index = 0; index < steps.length; index += 1) {
      setStep(index);
      try {
        await delay();
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        throw error;
      }
      if (current !== runId) return;
    }
    setResult(reportResult);
    setStatus('idle');
  };

  const cancel = () => {
    runId += 1;
    setStatus('idle');
  };

  const panelStatus = () => {
    if (status() === 'running') return 'loading';
    return result() ? 'done' : 'empty';
  };

  return (
    <div class={styles.root}>
      <AnalysisRequest
        description={ts('library.patterns.analysisFlow.description')}
        model={ts('library.patterns.analysisFlow.model')}
        sources={sources}
        analyses={analyses}
        defaultSelected={['cv', 'job']}
        defaultAnalysis="match"
        status={status()}
        steps={steps}
        step={step()}
        onRun={run}
        onCancel={cancel}
      />
      <AnalysisReport
        status={panelStatus()}
        result={result()}
        subject="Anna Kowalska"
        target="Senior Frontend Engineer"
        model="Claude"
        generatedAt={ts('library.patterns.analysisFlow.generatedAt')}
        steps={steps}
        step={step()}
        onRerun={() => void run().catch(reportAsyncError)}
      />
    </div>
  );
};
