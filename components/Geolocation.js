import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Clouds from "./Clouds";
import Rain from "./Rain";
import Thunderstorm from "./Thunderstorm";
import Drizzle from "./Drizzle";
import Clear from "./Clear";
import Snow from "./Snow";
import Location from "./Location";
import Loading from "./Loading";
import Distance from "./Distance";
import { useRouter } from "next/router";
import { motion } from "framer-motion";


const Geolocation = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/home");
  };

  // this customizes the component tsParticles installation
  const particlesInit = useCallback(async (engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  });
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  function getDistanceFromLatLonInKm(lat, long, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat); // deg2rad below
    var dLon = deg2rad(lon2 - long);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    let dist = Math.round(d);
    setDist(dist);
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");
  const [dist, setDist] = useState("");

  useEffect(() => {
    function getCoords() {
      console.log(navigator.geolocation);

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        function (error) {
          if (error.code == error.PERMISSION_DENIED) {
            setMessage(<Location />);
          }
        }
      );
    }
    const getData = async () => {
      data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a51cb8c150ab8b0211621f9afd418a0f`
      );
      setData(data);
      console.log(data);
      if (data.data.weather[0].main === "Clouds") {
        setMessage(<Clouds />);
      } else if (data.data.weather[0].main === "Rain") {
        setMessage(<Rain />);
      } else if (data.data.weather[0].main === "Thunderstorm") {
        setMessage(<Thunderstorm />);
      } else if (data.data.weather[0].main === "Drizzle") {
        setMessage(<Drizzle />);
      } else if (data.data.weather[0].main === "Clear") {
        setMessage(<Clear />);
      } else if (data.data.weather[0].main === "Snow") {
        setMessage(<Snow />);
      }
    };

    getCoords();
    getDistanceFromLatLonInKm(lat, long, 28.6556, 77.3718);
    getData();
  }, [lat]);

  return (
    <>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.1,
              },
            },
          },
          particles: {
            color: {
              value: "#808080",
            },
            links: {
              color: "#808080",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.95], delay: 1 }}
        className="hidden md:block absolute top-28 left-32  border-white border-2 rounded-xl p-2 bg-cyan-100 text-gray-900 w-2/12 "
      >
        {message ? message : <Loading />}
      </motion.div>
      {lat && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.95], delay: 1 }}
          className="hidden md:block absolute bottom-28 left-32  border-white border-2 rounded-xl p-2 bg-cyan-100 text-gray-900 w-2/12 "
        >
          {dist ? <Distance dist={dist} /> : <Loading />}
        </motion.div>
      )}

      <motion.div
        initial={{ y: 40, x: 50, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.95] }}
        className="absolute md:right-32 md:top-52 ml-5 md:ml-0 top-20 text-white font-extrabold md:text-8xl text-6xl md:w-7/12"
      >
        Hi, <br /> I&apos;m <span className="text-cyan-200"> Devansh Khullar</span>,{" "}
        <br /> A web developer <br />
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.95], delay: 2 }}
          className=" text-lg hover:text-cyan-200 cursor-[url('/pointer.png'),_pointer]"
          onClick={handleOnClick}
        >
          Click here to know more about me{" "}
          <Image src="/up-right-arrow.png" alt="arrow" width={20} height={20} />{" "}
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.95], delay: 1 }}
        className="md:hidden block  absolute bottom-14 left-5 h-1/3 border-white border-2 rounded-xl p-2 bg-cyan-100 text-gray-900 w-5/12 "
      >
        {message ? message : <Loading />}
      </motion.div>
      {lat && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.95], delay: 1 }}
          className="md:hidden block absolute bottom-14 right-5 h-1/3 border-white border-2 rounded-xl p-2 bg-cyan-100 text-gray-900 w-5/12 "
        >
          {dist ? <Distance dist={dist} /> : <Loading />}
        </motion.div>
      )}

      
    </>
  );
};

export default Geolocation;
