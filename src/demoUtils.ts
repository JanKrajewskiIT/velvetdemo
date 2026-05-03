export const safeSessionStorageGet = (key: string): string | null => {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
};

export const safeSessionStorageSet = (key: string, value: string) => {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    void 0;
  }
};

export const safeSessionStorageRemove = (key: string) => {
  try {
    sessionStorage.removeItem(key);
  } catch {
    void 0;
  }
};

export const resolveSearchParam = (raw: string | string[] | undefined): string | undefined =>
  typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] : undefined;
