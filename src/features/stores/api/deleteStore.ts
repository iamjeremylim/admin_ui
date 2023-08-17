import { useMutation } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { queryClient } from '@/lib/react-query';
import { Store } from '../types';
import { useSnackbar } from 'notistack';

export const deleteStore = ({ storeId }: { storeId: number }) => {
  return axios.delete(`/stores/${storeId}`);
};

export const useDeleteStore = () => {
  const { enqueueSnackbar } = useSnackbar();
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
      enqueueSnackbar(
        'Oops, we experienced a little problem while deleting your store. Please try again later or contact us.',
        { variant: 'error' }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['allstores']);
      enqueueSnackbar('Your store has been successfully deleted.', {
        variant: 'success',
      });
    },
  });
};
