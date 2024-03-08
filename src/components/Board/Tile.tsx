import type { Tile } from "../../@types/Tiles";

// const colorsLight = {
//   null: "#CDC1B4",
//   "2": "#EEE4DA",
//   "4": "#EDE0C8",
//   "8": "#F2B179",
//   "16": "#F59563",
//   "32": "#F67C5F",
//   "64": "#F65E3B",
//   "128": "#EDCF72",
//   "256": "#EDCC61",
//   "512": "#EDC850",
//   "1024": "#EDC53F",
//   "2048": "#EDC22E",
// };

const colorsDark = {
  null: "#483C32",
  "2": "#9E948A",
  "4": "#8F856F",
  "8": "#7F755A",
  "16": "#6E6646",
  "32": "#5D5833",
  "64": "#4C4B21",
  "128": "#6D6631",
  "256": "#837D37",
  "512": "#999236",
  "1024": "#AFAC36",
  "2048": "#C5C22F",
};

const colors = colorsDark;
const Tile = ({ x, y, value }: Tile) => {
  return (
    <div
      title={`Position: ${x}, ${y} | Value: ${value}`}
      className={`h-36 w-36 m-1 border-gray-300 border flex flex-col items-center justify-center
      text-white text-5xl font-bold bg-[${value ? colors[String(value) as keyof typeof colors] : colors.null}]
      `}
      style={{ backgroundColor: value ? colors[String(value) as keyof typeof colors] : colors.null }}
    >
      {value}
    </div>
  );
};

export default Tile;
