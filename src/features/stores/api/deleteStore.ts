import { useMutation } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { queryClient } from '@/lib/react-query';
import { Store } from '../types';

export const deleteStore = ({ storeId }: { storeId: number }) => {
  return axios.delete(`/stores/${storeId}`);
};

export const useDeleteStore = () => {
  return useMutation({
    mutationFn: deleteStore,
    onMutate: async () => {
      await queryClient.cancelQueries(['allstores']);
      const previousStores = queryClient.getQueryData<Store[]>(['allstores']);
      return { previousStores };
    },
    onError: (_, __, context: any) => {
      if (context?.previousStores) {
        queryClient.setQueryData(['allstores'], context.previousStores);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['allstores']);
    },
  });
};
