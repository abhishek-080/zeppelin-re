import React from "react";

const About = () => {
  return (
    <div
    name="About"
    className=" bg-[#141414] h-full lg:h-screen  ">

      <div className=" flex flex-row sm:flex-col md:flex-row text-white h-full  justify-center lg:p-20 p-3 gap-10 pb-10 sm:pt-28">
        <div className="flex flex-col mt-10 text-1xl border rounded p-5 des">
          <div className="text-center mt-5 text-4xl font-heading bold">
          About
          </div>
          
          <div className=" p-5 mt-2">
          Led Zeppelin were an English rock band formed in London in 1968. The group comprised vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal, although their style drew from a variety of influences, including blues and folk music. Led Zeppelin have been credited as significantly impacting the nature of the music industry, particularly in the development of album-oriented rock (AOR) and stadium rock.
          </div>
          <div className=" px-5 ">
          Originally named the New Yardbirds, Led Zeppelin signed a deal with Atlantic Records that gave them considerable artistic freedom. Initially unpopular with critics, they achieved significant commercial success with eight studio albums over ten years. Their 1969 debut, Led Zeppelin, was a top-ten album in several countries and featured such tracks as "Good Times Bad Times", "Dazed and Confused" and "Communication Breakdown". Led Zeppelin II (1969) was their first number-one album, and yielded "Ramble On" and "Whole Lotta Love". In 1970, they released Led Zeppelin III which featured "Immigrant Song". Their untitled fourth album, commonly known as Led Zeppelin IV (1971), is one of the best-selling albums in history with 37 million copies sold. The album includes "Black Dog", "Rock and Roll" and "Stairway to Heaven", with the latter being among the most popular and influential works in rock history. Houses of the Holy (1973) yielded "The Ocean", "Over the Hills and Far Away" and "The Rain Song". Physical Graffiti (1975), a double album, featured "Trampled Under Foot" and "Kashmir".
          </div>
        </div>

        {/* <div className=" mt-15">
          <img
            src={led}
            alt="led zeppelin"
            className="rounded-2xl mx-auto md:w-full "
          />
        </div> */}
      </div>
    </div>
  );
};

export default About;
