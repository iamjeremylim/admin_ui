import { useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import { StoresList } from './StoresList';
import '../style/stores.scss';
import { AddStore } from './AddStore';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    type: 'string',
    headerName: 'Store name',
    width: 150,
  },
];

export const Stores = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="stores">
      <div className="info">
        <h1>Stores</h1>
        <button onClick={() => setOpen(true)}>Add New Store</button>
      </div>
      <StoresList />
      {open && <AddStore setOpen={setOpen} slug="stores" columns={columns} />}
    </div>
  );
};
