import {useCallback, useEffect, useState} from 'react';

export function useList<T>(fetchApi: () => Promise<T[]>) {
  const [list, setList] = useState<T[]>([]);

  const fetchList = useCallback(async () => {
    try {
      const response: T[] = await fetchApi();
      setList(response);
    } catch (error: Error | any) {
      throw new Error(error);
    }
  }, [fetchApi]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return {list, fetchList};
}
