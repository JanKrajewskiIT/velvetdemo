import createDemoContext from '../createDemoContext';
import type { DataDisplayDemoModel } from './dataDisplayTypes';

const { Provider: DataDisplayDemoProvider, useDemoContext: useDataDisplayDemo } =
  createDemoContext<DataDisplayDemoModel>('useDataDisplayDemo');

export { DataDisplayDemoProvider, useDataDisplayDemo };
