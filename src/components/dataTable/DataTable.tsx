import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { DeleteStore } from '@/features/stores/components/DeleteStore';
import './dataTable.scss';

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

export const DataTable = (props: Props) => {
  const actionColumn: GridColDef = {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    renderCell: (params) => <DeleteStore storeId={params.row.id} slug={props.slug} />,
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};
