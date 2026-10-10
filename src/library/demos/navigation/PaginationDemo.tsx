import { Pagination } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

const PAGE_SIZE_OPTIONS = [10, 20, 50];

export const PaginationDemo = () => {
  const [size, setSize] = createSignal(20);

  return (
    <Pagination
      defaultPage={6}
      pageCount={20}
      total={243}
      pageSize={size()}
      pageSizeOptions={PAGE_SIZE_OPTIONS}
      onPageSizeChange={setSize}
    />
  );
};
