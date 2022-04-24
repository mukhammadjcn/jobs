import React, { useEffect } from "react";
import Icons from "../Shared/Icons";
import AOS from "aos";

function JobCategory(props) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      className="home__categories-item"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={props.index * 150}
    >
      <Icons name={props.data.icon} />
      <h4>{props.data.title}</h4>
    </div>
  );
}

export default JobCategory;
