import Icons from "../../../components/Shared/Icons";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../styles/jobs/single.scss";
import React from "react";

function singleJob() {
  const param = useParams();
  const singleJob = useSelector((state) => state.Jobs.value)[param.id];
  const awsomeDate = () => {
    const date = new Date(singleJob.created_date);
    const months = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    };
    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <div className="jobs__single">
      <div className="jobs__single-header">
        <div className="container">
          <div className="">
            <h2 className="jobs__item-title">
              {singleJob.name}{" "}
              {singleJob.to_sum > 5000000 ? <span>Featured</span> : ""}
            </h2>
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
                {String(singleJob.to_sum).slice(0, 3) > 0 ? (
                  <span>
                    ${String(singleJob.from_sum).slice(0, 3)} - $
                    {String(singleJob.to_sum).slice(0, 3)} / week
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
          </div>
          <div className="jobs__single-date">
            <p>
              Application ends: <span>{awsomeDate()}</span>
            </p>
            <div className="jobs__single-buttons">
              <button className="apply">Apply now</button>
              <button className="btn label">
                <Icons name="label" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="jobs__single-body">
        <div className="container">
          <div className="jobs__single-body-left">
            <h2 className="jobs__single-title">Job Description</h2>
            <p className="jobs__single-info">{singleJob.about}</p>
          </div>
          <div className="jobs__single-body-right">
            <h2>Job Overview</h2>
            <div className="jobs__single-option">
              <Icons name="calendar" />
              <div className="">
                <h4>Date Posted</h4>
                <span>{awsomeDate()}</span>
              </div>
            </div>
            <div className="jobs__single-option">
              <Icons name="location" />
              <div className="">
                <h4>Location</h4>
                <span>New York</span>
              </div>
            </div>
            <div className="jobs__single-option">
              <Icons name="wallet" />
              <div className="">
                <h4>Offered Salary:</h4>
                <span>
                  {String(singleJob.to_sum).slice(0, 3) > 0 ? (
                    <span>
                      ${String(singleJob.from_sum).slice(0, 3)} - $
                      {String(singleJob.to_sum).slice(0, 3)} / week
                    </span>
                  ) : (
                    "Free"
                  )}
                </span>
              </div>
            </div>
            <div className="jobs__single-option">
              <Icons name="user" />
              <div className="">
                <h4>Gender</h4>
                <span>
                  {singleJob.sex == "man"
                    ? "Erkak"
                    : singleJob.sex == "woman"
                    ? "Ayol"
                    : "All"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default singleJob;
