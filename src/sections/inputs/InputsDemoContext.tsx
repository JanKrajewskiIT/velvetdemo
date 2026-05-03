import createDemoContext from '../createDemoContext';
import type { InputsDemoModel } from './inputsTypes';

const { Provider: InputsDemoProvider, useDemoContext: useInputsDemo } =
  createDemoContext<InputsDemoModel>('useInputsDemo');

export { InputsDemoProvider, useInputsDemo };
