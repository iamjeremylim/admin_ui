import { useMutation } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { queryClient } from '@/lib/react-query';

export const deleteStore = ({ storeId }: { storeId: number }) => {
  return axios.delete(`/stores/${storeId}`);
};

export const useDeleteStore = () => {
  return useMutation({
    mutationFn: deleteStore,
    onSuccess: () => {
      queryClient.invalidateQueries(["allstores"]);
    },
  })
};

