import { useState } from 'react';
import { Add } from '@/components/add';
import { useStores } from '../api/getStores';
import { GridColDef } from '@mui/x-data-grid';
import { DataTable } from '@/components/dataTable';
import '../style/stores.scss';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  // {
  //   field: "img",
  //   headerName: "Avatar",
  //   width: 100,
  //   renderCell: (params) => {
  //     return <img src={params.row.img || "/noavatar.png"} alt="" />;
  //   },
  // },
  {
    field: 'name',
    type: 'string',
    headerName: 'Store name',
    width: 150,
  },
  // {
  //   field: "email",
  //   type: "string",
  //   headerName: "Email",
  //   width: 200,
  // },
  // {
  //   field: "phone",
  //   type: "string",
  //   headerName: "Phone",
  //   width: 200,
  // },
  // {
  //   field: "createdAt",
  //   headerName: "Created At",
  //   width: 200,
  //   type: "string",
  // },
];

export const Stores = () => {
  const [open, setOpen] = useState(false);
  const storesQuery = useStores({ username: 'jeremy' });

  return (
    <div className="stores">
      <div className="info">
        <h1>Stores</h1>
        <button onClick={() => setOpen(true)}>Add New Store</button>
      </div>
      {storesQuery.isLoading && <div>Loading...</div>}
      {storesQuery?.data?.length ? (
        <DataTable slug="stores" columns={columns} rows={storesQuery.data} />
      ) : (
        <div>No stores found</div>
      )}
      {open && <Add setOpen={setOpen} slug="stores" columns={columns} />}
    </div>
  );
};
