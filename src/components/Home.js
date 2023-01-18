import React from "react";
import led from "../images/led.jpg";
import vid from "../images/ab.mp4";

const Home = () => {
  return (
    <div name="Home" className="lg:h-screen md:h-screen w-full bg-black  ">
      <div className="flex flex-col lg:flex-row md:flex-row gap-20 justify-center items-center h-full  p-5 background-wrap ">
        <div className="mt-20 vid">
          <video
            id="video-bg-elem"
            preload="auto"
            autoplay="true"
            loop="loop"
            muted="true"
          >
            <source src={vid} type="video/mp4" />
            video Not supported
          </video>
        </div>

        <div className=" p-6 flex flex-col  lg:ml-[-0.6em] content w-full items-center z-20 lg:mt-[10em]">
          <span className="title uppercase text-white  text-6xl font-metal bold">
            Led zeppelin
          </span>

          <span className="texts py-4 text-white max-w-2xl ">
            Led Zeppelin were an English rock band formed in London in 1968. The
            group comprised vocalist Robert Plant, guitarist Jimmy Page,
            bassist/keyboardist John Paul Jones, and drummer John Bonham.
          </span>

          <span>
            <a href="https://www.youtube.com/@ledzeppelin/videos" target="_blank">

            <button class="bg-transparent hover:bg-black text-white py-2 px-4 border border-white hover:border-transparent rounded">
            View More videos
            </button>
            </a>
          </span>
        </div>

        <div className="hidden ">
          <img
            src={led}
            alt="led zeppelin"
            className="rounded-2xl  md:w-full mt-[-3em]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
