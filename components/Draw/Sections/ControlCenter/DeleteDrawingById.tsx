import { useState } from "react";
import { useStore } from "lib/zustand/store";
import { deleteData } from "utils/prismaHelpers";
import { saveData } from "utils/prismaHelpers";

export const DeleteDrawingById = () => {
  const [id, setId] = useState("");
  const { canvasRef, activeUser } = useStore();

  type DeleteData = { id: string };

  const handleDelete = async (id) => {
    const deleteId = await canvasRef?.current.getSaveData();
    console.log("DELETE ID", deleteId);
    setId(id);
    await deleteData(id);
  };

  return (
    <>
      <div>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </>
  );
};
