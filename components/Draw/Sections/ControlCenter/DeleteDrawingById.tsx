import { useState, useEffect } from "react";

import useSWR from "swr";
import { fetcher } from "lib/swr/fetcher";

export const DeleteDrawingById = ({ id, handleRefresh }) => {
  const [deleteIt, setDeleteIt] = useState(false);
  const { data, error, mutate } = useSWR(
    deleteIt && `/api/deleteDrawing?drawingId=${id}`,
    fetcher
  );

  useEffect(() => {
    mutate();
    setDeleteIt(false);
  }, [data]);

  const handleDelete = async () => {
    try {
      await setDeleteIt(true);
      await handleRefresh();
      await console.log("delete something");
    } catch (error) {
      console.error(error);
    } finally {
      await setDeleteIt(false);
    }
  };

  return (
    <>
      <div>
        <button onClick={() => handleDelete()}>DELETE</button>
      </div>
    </>
  );
};
