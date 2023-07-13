import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircualProgressBar({ v }) {
  return (
    <div className="w-1/2 h-1/2 lg:w-3/4 lg:h-3/4 lg:absolute bottom-0">
      <CircularProgressbar
        className="p-4"
        value={v * 10}
        text={`${v}`}
        circleRatio={0.5}
        styles={{
          trail: {
            strokeLinecap: "round",
            transform: "rotate(270deg)",
            transformOrigin: "center center",
          },
          path: {
            strokeLinecap: "round",
            transform: "rotate(270deg)",
            transformOrigin: "center center",
            stroke: "#b197fc",
          },
          text: {
            fill: "#b197fc",
          },
        }}
        strokeWidth={8}
      />
    </div>
  );
}

export default CircualProgressBar;
