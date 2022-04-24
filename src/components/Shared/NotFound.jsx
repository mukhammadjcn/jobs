import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/lotties/not-found.json";

function NotFound() {
  return <Lottie animationData={animationData} className="lottie container" />;
}

export default NotFound;
