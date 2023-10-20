import React from "react";
import { Triangle } from "react-loader-spinner";

type SpinnerProps = {};

const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <Triangle
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
export default Spinner;
