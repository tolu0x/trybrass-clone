import React, {useState, useEffect} from 'react';
// import { motion } from "framer-motion";
import { SpinnerCircular } from 'spinners-react';
import tcLogo from "../assets/tc-img.png";
import yhLogo from "../assets/yh-img.png";
import biLogo from "../assets/bi-img.png";
import woman from "../assets/woman-img.png";
import play from "../assets/play-btn.png";


const HeroSection = () => {

  const [items, setItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchPeople = async () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setItems(data)
        setIsLoaded(true)
      });
  };


  useEffect(() => {
    fetchPeople()
  }, [])


   if (isLoaded) {
   return (
     <div className="flex justify-center items-center h-screen">
       <SpinnerCircular
         size={50}
         thickness={100}
         speed={100}
         color="#36ad47"
         secondaryColor="rgba(0, 0, 0, 0.44)"
       />
     </div>
   );
  }

  return (
    <main className="h-full text-white bg-black mt-12 py-14 px-10 sm:px-3 sm:py-8">
      <div className="flex items-center justify-center sm:flex-col sm:items-start">
        <div className="w-3/5 sm:w-full sm:mb-14">
          <div>
            <h1 className="text-5xl w-11/12 ">
              Banking that works for your business
            </h1>
            <p className="w-11/12 py-6">
              Do more with a business account that comes with top-end financial
              tools and integration to help grow your business.
            </p>
            <button className="bg-green-500 w-7/12 sm:w-full p-3 rounded-xl mdm">
              Open an account in 10 minutes
            </button>
          </div>

          <div className="flex justify-start items-center pt-14 sm:pt-7">
            <div>
              <img src={tcLogo} className="w-4/5" alt="TechCrunch" />
            </div>
            <div>
              <img src={yhLogo} className="w-4/5 pr-3" alt="Yahoo!" />
            </div>
            <div>
              <img src={biLogo} className="w-4/5" alt="Business Insider" />
            </div>
          </div>
        </div>

        <div className="w-2/5 sm:w-full">
          <div className="relative">
            <img className="brightness-50" src={woman} alt="Woman smiling" />

            <div className="absolute bottom-5 left-5 cursor-pointer flex items-center justify-between w-56">

              <div>
                <img src={play} alt="Play"/>
              </div>

              <div>
                <h6 className="text-lg">Play this video</h6>
                <p>To see why we built brass</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection

