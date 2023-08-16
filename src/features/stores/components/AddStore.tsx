import * as z from 'zod';
import { Form } from '@/components/form/Form';
import { AddStoreDTO, useAddStore } from '../api/addStore';
import { GridColDef } from '@mui/x-data-grid';
import { InputField } from '@/components/form/InputField';
import '../style/add.scss';

const AddStoreSchema = z.object({
  name: z.string().min(1, 'Store name is required.'),
});

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddStore = (props: Props) => {
  const addStoreMutation = useAddStore(props.setOpen);
  return (
    <div className="add">
      <div className="modal">
        <img className="close" onClick={() => props.setOpen(false)} src="close.svg" alt="" />
        <h1>Add new store</h1>
        <Form<AddStoreDTO['data'], typeof AddStoreSchema>
          id="create-comment"
          onSubmit={async (values) => {
            await addStoreMutation.mutateAsync({
              data: {
                name: values.name,
                owner: 'jeremys',
              },
            });
          }}
          schema={AddStoreSchema}
        >
          {({ register, formState }) => (
            <>
              {props.columns
                .filter((item) => item.field !== 'id' && item.field !== 'img')
                .map((column) => (
                  <div className="item" key={column.field}>
                    <label>{column.headerName}</label>
                    <InputField
                      type={column.type}
                      error={formState.errors[column.field as keyof AddStoreDTO['data']]}
                      registration={register(column.field as keyof AddStoreDTO['data'])}
                    />
                  </div>
                ))}
              <button>Send</button>
            </>
          )}
        </Form>
      </div>
    </div>
  );
};
