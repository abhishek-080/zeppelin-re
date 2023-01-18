import React from 'react'
import jimmy from "../images/jimmy.jpg"
import robert from "../images/robert.jpg"
import paul from "../images/johnpaul.jpg"
import bonham from "../images/johnbonham.jpg"


const Legends = () => {
    const albumlists = [
        {
          id: 1,
          name: "Robert Plant",
          src: robert,
        },
        {
          id: 2,
          name: "Jimmy Page",
          src: jimmy,
        },
        {
          id: 3,
          name: "John Paul Jones",
          src: paul,
        },
        {
            id: 3,
            name: "John Bonham",
            src: bonham,
          },
      ];
    
      return (
        <div name="Legends" className="bg-black lg:h-screen  lg:mt-[12em] sm:pb-10 md:pt-[-5em] ">
          <div className="flex ab flex-row sm:flex-col md:flex-row text-white h-full justify-center gap-5 p-3">
            <div className="flex flex-col mt-20 text-1xl rounded p-5">
              <div className="text-center mt-5 text-4xl font-heading bold">
                Legends
              </div>
              <div className="lg:p-5 flex flex-wrap justify-center mt-10 gap-2">
    
                {albumlists.map(({ id, name, src }) => (
                    <div className="fullwrap p-1 hover:scale-105 duration-100  mt-3 " key={id}>
                      <img
                        src={src}
                        alt="led zeppelin"
                        className="rounded mx-auto h-64 cursor-pointer w-full"
                      />
                      <div className="fullcap rounded">
                        <span className="eventname gmt-4 text-3xl">
                          {name}
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
}

export default Legends