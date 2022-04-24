import React from "react";
import { Skeleton } from "antd";

function JobPreloader() {
  return (
    <div className="jobs__item">
      <Skeleton.Input active size="small" />
      <div className="jobs__item-info">
        <div className="">
          <Skeleton.Avatar active shape="default" size="small" />
          <Skeleton.Input active size="small" />
        </div>
        <div className="">
          <Skeleton.Avatar active shape="default" size="small" />
          <Skeleton.Input active size="small" />
        </div>

        <div className="">
          <Skeleton.Avatar active shape="default" size="small" />
          <Skeleton.Input active size="small" />
        </div>
      </div>
      <div className="jobs__item-labels">
        <Skeleton.Input active shape="rounded" size="small" />
        <Skeleton.Input active shape="rounded" size="small" />
      </div>
      <button className="jobs__item-label">
        <Skeleton.Avatar active size="small" />
      </button>
    </div>
  );
}

export default JobPreloader;
