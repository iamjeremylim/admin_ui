import { Link } from "react-router-dom";
import { useDeleteStore } from "../api/deleteStore";

type DeleteStoreProps = {
  storeId: number;
  slug: string;
};

export const DeleteStore = ({ storeId, slug }: DeleteStoreProps) => {
  const deleteStoreMutation = useDeleteStore();

  return (
    <div className="action">
      <Link to={`/${slug}/${storeId}`}>
        <img src="/view.svg" alt="" />
      </Link>
      <div
        className="delete"
        onClick={() => deleteStoreMutation.mutate({ storeId })}
      >
        <img src="/delete.svg" alt="" />
      </div>
    </div>
  );
};