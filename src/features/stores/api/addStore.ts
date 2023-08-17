import { queryClient } from '@/lib/react-query';
import { useMutation } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { Store } from '../types';
import { useSnackbar } from 'notistack';

export type AddStoreDTO = {
  data: {
    name: string;
    owner: string;
  };
};

export const addStore = ({ data }: AddStoreDTO): Promise<Store> => {
  return axios.post(`/stores`, data);
};

export const useAddStore = (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation({
    mutationFn: addStore,
    onMutate: async () => {
      await queryClient.cancelQueries(['allstores']);
      const previousStores = queryClient.getQueryData<Store[]>(['allstores']);
      return { previousStores };
    },
    onError: (_, __, context: any) => {
      if (context?.previousStores) {
        queryClient.setQueryData(['allstores'], context.previousStores);
        setOpen(false);
      }
      enqueueSnackbar(
        'Oops, we experienced a little problem while creating your store. Please try again later or contact us.',
        { variant: 'error' }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['allstores']);
      setOpen(false);
      enqueueSnackbar('Congrats! Your store has been successfully created.', {
        variant: 'success',
      });
    },
  });
};
