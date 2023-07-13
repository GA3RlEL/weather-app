import { BallTriangle } from "react-loader-spinner";

function LoadingSearchSpinner() {
  return (
    <BallTriangle
      height={50}
      width={50}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperClass="flex justify-center"
      wrapperStyle={{}}
      visible={true}
    />
  );
}

export default LoadingSearchSpinner;
