import { createContext, useContext } from 'solid-js';

const createDemoContext = <T,>(hookName: string) => {
  const Context = createContext<T>();

  return {
    Provider: Context.Provider,
    useDemoContext: (): T => {
      const ctx = useContext(Context);
      if (!ctx) throw new Error(hookName + ' must be used within its Provider');
      return ctx;
    },
  } as const;
};

export default createDemoContext;
