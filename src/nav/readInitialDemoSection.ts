import { safeSessionStorageGet } from '../demoUtils';
import { DEMO_LAST_SECTION_STORAGE_KEY, isValidSectionId, type SectionId } from './demoNavConfig';

export const readInitialDemoSection = (): SectionId => {
  if (typeof window === 'undefined') return 'overview';
  const fromUrl = new URLSearchParams(window.location.search).get('section');
  if (fromUrl && isValidSectionId(fromUrl)) return fromUrl;
  const stored = safeSessionStorageGet(DEMO_LAST_SECTION_STORAGE_KEY);
  if (stored && isValidSectionId(stored)) return stored;
  return 'overview';
};
