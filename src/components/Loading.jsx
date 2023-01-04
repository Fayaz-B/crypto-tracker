import React from "react";
import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="">
      <Triangle
        height="80"
        width="80"
        color="#4DA1FF"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
