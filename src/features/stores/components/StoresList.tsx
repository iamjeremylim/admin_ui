import { GridColDef } from '@mui/x-data-grid';
import { useStores } from '../api/getStores';
import { DataTable } from '@/components/dataTable';

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

export const StoresList = () => {
  const storesQuery = useStores({ username: 'jeremy' });

  if (storesQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (!storesQuery?.data?.length) {
    return <div>No Stores Found</div>;
  }

  return <DataTable slug="stores" columns={columns} rows={storesQuery.data} />;
};
