import {useCallback, useEffect} from 'react';

export const useMount = (func: () => void) => useEffect(func, []);

export const useSpecificKeyExtractor = <TItem>(
  prefix: string,
  field: keyof TItem,
) =>
  useCallback(
    (item: TItem, index: number) => `${prefix}-${item[field]}-${index}`,
    [prefix, field],
  );
