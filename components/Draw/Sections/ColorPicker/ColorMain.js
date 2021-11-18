import ColorPickerComponent from "./ColorPickerComponent";
import ColorGrid from "./ColorGrid";
import CanvasDataZone from "./CanvasDataZone";

const ColorMain = () => {
  return (
    <div className="flex flex-row items-center m-auto md:w-3/12 md:flex-col">
      <ColorPickerComponent />
      <ColorGrid />
      <CanvasDataZone />
    </div>
  );
};

export default ColorMain;
