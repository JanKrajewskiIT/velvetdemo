import { type Accessor, createEffect, createSignal } from 'solid-js';

import { readToken } from './readToken';

export const createTokenValue = (token: Accessor<string>): Accessor<string> => {
  const [value, setValue] = createSignal('');
  createEffect(() => setValue(readToken(token())));
  return value;
};
