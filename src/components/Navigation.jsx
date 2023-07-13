import weather from "../images/weather.svg";
import project from "../images/project.svg";
import cloud from "../images/cloud.svg";

function Navigation() {
  return (
    <nav className="lg:order-1 order-2  backdrop-blur bg-white/20 p-4 rounded-3xl flex lg:flex-col gap-12 items-center">
      <object data={cloud}>Cloud</object>
      <ul className="flex lg:flex-col gap-6 ">
        <li className="flex flex-col items-center justify-center cursor-pointer my-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
            height="28"
            width="28"
          >
            <g id="sun-cloud--cloud-meteorology-cloudy-partly-sunny-weather">
              <path
                id="Vector"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 8.5a2.51 2.51 0 0 0-1.5.5A4.5 4.5 0 1 0 5 13.5h6a2.5 2.5 0 0 0 0-5Z"
              ></path>
              <path
                id="Vector_2"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
              ></path>
            </g>
          </svg>
          <span>Weather</span>
        </li>
        <li className="flex flex-col items-center justify-center cursor-pointer my-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
            height="28"
            width="28"
          >
            <g id="bracket--code-angle-programming-file-bracket">
              <path
                id="Vector"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 10.5.5 7 4 3.5"
              ></path>
              <path
                id="Vector_2"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 10.5 13.5 7 10 3.5"
              ></path>
            </g>
          </svg>
          <span>About project</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
