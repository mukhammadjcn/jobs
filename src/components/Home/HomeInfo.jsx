import React, { useEffect } from "react";
import Icons from "../Shared/Icons";
import AOS from "aos";

function HomeInfo(props) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="home__info-item">
      <div data-aos="fade-right" data-aos-duration="800">
        <h2 className="home__info-item_title">{props.data.title}</h2>
        <p className="home__info-item_info">{props.data.info}</p>
        <div className="">
          {props.data.ul && props.data.ul.length !== 0
            ? props.data.ul.map((el) => (
                <div key={el} className="home__info-item_info_ul">
                  <Icons name="check" />
                  <span>{el}</span>
                </div>
              ))
            : props.data.options && props.data.options.length !== 0
            ? props.data.options.map((el) => (
                <div key={el.title} className="home__info-item_info_options">
                  <Icons name={el.img} />
                  <div className="">
                    <h4>{el.title}</h4>
                    <span>{el.info}</span>
                  </div>
                </div>
              ))
            : ""}
        </div>
        <button className="btn">Discover More</button>
      </div>
      <img
        src={props.data.img}
        alt=""
        data-aos="fade-left"
        data-aos-duration="800"
      />
    </div>
  );
}

export default HomeInfo;
