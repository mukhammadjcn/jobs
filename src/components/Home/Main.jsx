import React, { useState, useEffect } from "react";
import Icons from "../Shared/Icons";
import JobCategory from "./JobCategory";
import HomeInfo from "./HomeInfo";
import { companies, categories, infos } from "../../assets/data/HomePage";
import { Link } from "react-router-dom";
import "../../styles/home/main.scss";
import Search from "../Search";
import AOS from "aos";

function Main() {
  const [input, setInput] = useState("");
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Home main top section */}
      <div className="home__main">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="home__main-title">
              Join us & Explore <br /> Thousands of Jobs
            </h1>
            <p className="home__main-label">
              Find Jobs, Employment & Career Opportunities
            </p>
            <Search />
          </div>
        </div>
      </div>

      {/* Home compaines mini section */}
      <div className="home__companies">
        <div className="container">
          {companies.map((el, index) => (
            <div
              className="home__companies-item"
              key={el}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <img src={el} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* Home jobs categories */}
      <div className="home__categories">
        <div className="container">
          <div className="home__categories-header">
            <div className="home__categories-header-left">
              <h2>Popular Job Categories</h2>
              <p>2020 jobs live – 293 added today.</p>
            </div>
            <Link to="#" className="overlay">
              <span>Browse All</span>
              <Icons name="right-arrow" />
            </Link>
          </div>
          <div className="home__categories-list">
            {categories.map((el, index) => (
              <JobCategory data={el} index={index} key={el.title} />
            ))}
          </div>
        </div>
      </div>

      {/* Home info section */}
      <div className="home__info">
        <div className="container">
          {infos.map((el) => (
            <HomeInfo data={el} key={el.title} className="home__info-item" />
          ))}
        </div>
      </div>

      {/* Email subscription section */}
      <div className="home__email">
        <div className="container">
          <h2 data-aos="fade-up" data-aos-duration="1500">
            Subscribe Our Newsletter
          </h2>
          <p data-aos="fade-up" data-aos-duration="1500">
            Advertise your jobs to millions of monthly users and search 15.8
            million CVs in our database.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="home__email-box"
          >
            <input
              value={input}
              onInput={(e) => setInput(e.target.value)}
              type="email"
              placeholder="Your e-mail ?"
              id=""
            />
            <button
              className="btn"
              onClick={() => {
                input ? alert(input) : "";
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
