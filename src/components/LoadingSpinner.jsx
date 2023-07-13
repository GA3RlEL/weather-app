import { TailSpin } from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <TailSpin
      height="120"
      width="120"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass="lg:row-start-2 lg:col-start-2 lg:col-span-2 lg:row-span-2 m-auto  row-span-2"
      visible={true}
    />
  );
}

export default LoadingSpinner;
