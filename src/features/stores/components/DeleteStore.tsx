import { useDeleteStore } from '../api/deleteStore';

type DeleteStoreProps = {
  storeId: number;
  slug: string;
};

export const DeleteStore = ({ storeId }: DeleteStoreProps) => {
  const deleteStoreMutation = useDeleteStore();

  return (
    <div className="action">
      {/* TODO: Implement view store page
      <Link to={`/${slug}/${storeId}`}>
        <img src="/view.svg" alt="" />
      </Link> */}
      <div
        className="delete"
        onClick={async () => await deleteStoreMutation.mutateAsync({ storeId })}
      >
        <img src="/delete.svg" alt="" />
      </div>
    </div>
  );
};
