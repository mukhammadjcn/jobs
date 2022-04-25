import React from "react";
import Lottie from "lottie-react";
import data from "../../assets/lotties/done.json";

function NoData() {
  return (
    <Lottie animationData={data} className="lottie container" loop={false} />
  );
}

export default NoData;
