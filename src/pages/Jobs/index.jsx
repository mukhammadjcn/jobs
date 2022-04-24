import JobPreloader from "../../components/Jobs/JobPreloader";
import NoData from "../../components/Shared/NoData";
import React, { useEffect, useState } from "react";
import { client } from "../../services/axios";
import Search from "../../components/Search";
import Job from "../../components/Jobs/Job";
import "../../styles/jobs/index.scss";
import { Pagination } from "antd";
import { storeJobs } from "../../store/fetch/Jobs";
import { useDispatch } from "react-redux";
import AOS from "aos";

function Jobs() {
  const [jobs, setJobs] = useState([1]);
  const [countes, setCountes] = useState(20);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // Fetch all jobs
  const fetchJobs = async (param) => {
    setLoading(true);
    const { data } = await client.get(
      `/adverts/advert/${param && param.length > 1 ? param : ""}`
    );
    setJobs(data.results);
    setCountes(data.count);
    setLoading(false);
    storeAllJobs(data.results);
  };

  // Store all jobs when rendered
  const storeAllJobs = (data) => {
    const jobs = {};
    data.map((el) => (jobs[el.id] = el));
    dispatch(storeJobs(jobs));
  };

  // Fetch data by search input
  const fetchBySearch = (el) => {
    fetchJobs(`?search=${el}`);
  };

  // When pagination chnges it will fetch data
  const changePage = (el) =>
    el > 1 ? fetchJobs(`?page=${el}`) : fetchJobs("");

  useEffect(() => {
    fetchJobs();
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="jobs">
      <div className="jobs__search">
        <div className="container">
          <Search fetchBySearch={fetchBySearch} />
        </div>
      </div>
      <div className="jobs__board container">
        {!loading
          ? jobs.map((el, index) => <Job data={el} key={index} index={index}/>)
          : new Array(10)
              .fill(0)
              .map((el, index) => <JobPreloader key={index} />)}
        {jobs && jobs.length == 0 ? <NoData /> : ""}
      </div>
      {jobs && jobs.length !== 0 ? (
        <Pagination
          defaultCurrent={1}
          total={countes}
          onChange={changePage}
          className="jobs__pagination"
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Jobs;
