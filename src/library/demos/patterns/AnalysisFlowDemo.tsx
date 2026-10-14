import type { AtsResult } from '@jankrajewskiit/ui';
import { AnalysisRequest, AtsAnalysisPanel } from '@jankrajewskiit/ui';
import { createSignal, onCleanup } from 'solid-js';

import { reportAsyncError } from '../../../browserDiagnostics';
import styles from './AnalysisFlowDemo.module.css';
import { ANALYSIS_SOURCES, ANALYSIS_STEPS, ANALYSIS_TYPES, ATS_RESULT } from './analysisSamples';
import { createSimulatedDelay } from './createSimulatedDelay';

const STEP_DELAY_MS = 800;

export const AnalysisFlowDemo = () => {
  const delay = createSimulatedDelay(STEP_DELAY_MS);
  const [status, setStatus] = createSignal<'idle' | 'running'>('idle');
  const [step, setStep] = createSignal(0);
  const [result, setResult] = createSignal<AtsResult | null>(null);
  let runId = 0;
  onCleanup(() => {
    runId += 1;
  });

  const run = async () => {
    runId += 1;
    const current = runId;
    setStatus('running');
    setResult(null);
    for (let index = 0; index < ANALYSIS_STEPS.length; index += 1) {
      setStep(index);
      try {
        await delay();
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        throw error;
      }
      if (current !== runId) return;
    }
    setResult(ATS_RESULT);
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
        description="Combine the CV, job offer and notes."
        model="Claude, EU region"
        sources={ANALYSIS_SOURCES}
        analyses={ANALYSIS_TYPES}
        defaultSelected={['cv', 'job']}
        defaultAnalysis="match"
        status={status()}
        steps={ANALYSIS_STEPS}
        step={step()}
        onRun={run}
        onCancel={cancel}
      />
      <AtsAnalysisPanel
        status={panelStatus()}
        result={result()}
        subject="Anna Kowalska"
        target="Senior Frontend Engineer"
        model="Claude"
        generatedAt="just now"
        steps={ANALYSIS_STEPS}
        step={step()}
        onRerun={() => void run().catch(reportAsyncError)}
      />
    </div>
  );
};
