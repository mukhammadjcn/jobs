import React from "react";
import Lottie from "lottie-react";
import data from "../../assets/lotties/nodata.json";

function NoData() {
  return <Lottie animationData={data} className="lottie container" />;
}

export default NoData;
