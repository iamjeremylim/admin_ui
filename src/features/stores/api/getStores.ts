import { useQuery } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Store } from '../types';

export const getStores = ({ username }: { username: string }): Promise<Store[]> => {
  return axios.get(`/stores`, {
    params: {
      username,
    },
  });
};

type QueryFnType = typeof getStores;

type UseStoresOptions = {
  username: string;
  config?: QueryConfig<QueryFnType>;
};

export const useStores = ({ username, config }: UseStoresOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["allstores"],
    queryFn: () => getStores({ username }),
    ...config,
  })
};