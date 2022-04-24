import React from "react";
import { Link } from "react-router-dom";
import Icons from "../Shared/Icons";

function Job(props) {
  return (
    <div
      className="jobs__item"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={props.index * 100}
    >
      <Link to={`/jobs/${props.data.id}`} className="jobs__item-title">
        {props.data.name}{" "}
        {props.data.to_sum > 5000000 ? <span>Featured</span> : ""}
      </Link>
      <div className="jobs__item-info">
        <div className="">
          <Icons name="work" />
          <span>Design</span>
        </div>
        <div className="">
          <Icons name="location" />
          <span>New York</span>
        </div>

        <div className="">
          <Icons name="wallet" />
          {String(props.data.to_sum).slice(0, 3) > 0 ? (
            <span>
              ${String(props.data.from_sum).slice(0, 3)} - $
              {String(props.data.to_sum).slice(0, 3)} / week
            </span>
          ) : (
            "Free"
          )}
        </div>
      </div>
      <div className="jobs__item-labels">
        <span className="label-blue">Full Time</span>
        <span className="label-yellow">Urgent</span>
      </div>
      <button className="jobs__item-label">
        <Icons name="label" />
      </button>
    </div>
  );
}

export default Job;
