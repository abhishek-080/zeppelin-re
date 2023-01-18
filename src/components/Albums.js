import React from "react";
import led from "../images/led.jpg";
import zep1 from "../images/zep1.png";
import zep2 from "../images/zep2.jpg";
import zep3 from "../images/zep3.jpg";
import zep4 from "../images/zep4.jpg";
import zepmot from "../images/zep-mot.jpg";
import zeppre from "../images/zep-pre.jpg";
import zepsame from "../images/zep-same.jfif";
import graffi from "../images/grafi.jpg";
import live from "../images/live.jpg";

const Albums = () => {
  const albumlists = [
    {
      id: 1,
      albumname: "Led Zeppelin",
      src: zep1,
    },
    {
      id: 2,
      albumname: "Led Zeppelin IV",
      src: zep2,
    },
    {
      id: 3,
      albumname: "Led Zeppelin II",
      src: zep3,
    },
    {
        id: 3,
        albumname: "Led Zeppelin II",
        src: zep4,
      },
      {
        id: 3,
        albumname: "Led Zeppelin II",
        src: zepmot,
      },
      {
        id: 3,
        albumname: "Led Zeppelin II",
        src: zeppre,
      },
      {
        id: 3,
        albumname: "Led Zeppelin II",
        src: zepsame,
      },
      {
        id: 3,
        albumname: "Led Zeppelin II",
        src: graffi,
      },
      {
        id: 3,
        albumname: "Led Zeppelin II",
        src: live ,
      },
  ];

  return (
    <div name="Albums" className="bg-[#1B1B1B] h-full">
      <div className="flex flex-row sm:flex-col md:flex-row text-white h-full  justify-center lg:p-20 gap-10 p-3">
        <div className="flex flex-col mt-10 text-1xl rounded p-5">
          <div className="text-center mt-5 text-4xl font-heading bold">
            Albums
          </div>
          <div className="lg:p-5  gap-5 justify-center flex flex-wrap mt-10 ">


            {albumlists.map(({ id, albumname, src }) => (
                <div className="fullwrap p-1 hover:scale-105 duration-100 " key={id}>
                  <img
                    src={src}
                    alt="led zeppelin"
                    className="rounded mx-auto h-64 cursor-pointer w-full"
                  />
                  <div className="fullcap rounded">
                    <span className="eventname gmt-4 text-3xl">
                      {albumname}
                    </span>
                    <br></br>
                  </div>
                </div>

            ))}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Albums;
