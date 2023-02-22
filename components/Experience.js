import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Experience = ({ darkMode }) => {
  return (
    <>
      <motion.div
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className={`w-9/12 mx-auto my-10 ${darkMode ? "bg-black" : "bg-white"}`}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className={`hidden md:block font-semibold text-6xl ${
            darkMode ? "text-white" : "text-gray-900"
          }  text-center md:mb-10 mb-6`}
        >
          Experience
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className={`md:hidden block font-semibold text-6xl ${
            darkMode ? "text-white" : "text-gray-900"
          }  text-center md:mb-10 mb-6`}
        >
          Experience
        </motion.h1>

        <div className="md:flex md:justify-between">
          <div>
            <motion.a
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              href="https://www.manbal.ai/"
              target="_blank"
              rel="noreferrer"
              className=" hidden cursor-[url('/pointer.png'),_pointer] md:flex justify-center"
            >
              {darkMode ? (
                <div className="flex">
                  <div>
                    <Image
                      src="/manbaldark.svg"
                      alt="Manbal"
                      width={60}
                      height={30}
                      placeholder="blur"
                      blurDataURL="/manbal.svg"
                    />
                  </div>
                  <div>
                    <Image
                      src="/edited.svg"
                      alt="Manbal"
                      width={140}
                      height={40}
                      placeholder="blur"
                      blurDataURL="/manbal.svg"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex">
                  <div>
                    <Image
                      src="/manbal.svg"
                      alt="Manbal"
                      width={60}
                      height={30}
                      placeholder="blur"
                      blurDataURL="/manbal.svg"
                    />
                  </div>
                  <div>
                    <Image
                      src="/manbalai.svg"
                      alt="Manbal"
                      width={140}
                      height={40}
                      placeholder="blur"
                      blurDataURL="/manbal.svg"
                    />
                  </div>
                </div>
              )}
            </motion.a>{" "}
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              href="https://www.manbal.ai/"
              target="_blank"
              rel="noreferrer"
              className="md:hidden cursor-[url('/pointer.png'),_pointer] flex justify-center mt-10"
            >
              {darkMode ? (
                <div className="flex">
                <div>
                  <Image
                    src="/manbaldark.svg"
                    alt="Manbal"
                    width={60}
                    height={30}
                    placeholder="blur"
                    blurDataURL="/manbal.svg"
                  />
                </div>
                <div>
                  <Image
                    src="/edited.svg"
                    alt="Manbal"
                    width={140}
                    height={40}
                    placeholder="blur"
                    blurDataURL="/manbal.svg"
                  />
                </div>
              </div>
              ) : (
                <div className="flex">
                <div>
                  <Image
                    src="/manbal.svg"
                    alt="Manbal"
                    width={60}
                    height={30}
                    placeholder="blur"
                    blurDataURL="/manbal.svg"
                  />
                </div>
                <div>
                  <Image
                    src="/manbalai.svg"
                    alt="Manbal"
                    width={140}
                    height={40}
                    placeholder="blur"
                    blurDataURL="/manbal.svg"
                  />
                </div>
              </div>
              )}
            </motion.a>{" "}
            <br />
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className={`hidden md:flex font-semibold md:flex-none md:justify-start justify-center text-xl ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {" "}
              SDE Intern{" "}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className={`md:hidden font-semibold md:flex-none md:justify-start flex justify-center text-xl ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {" "}
              SDE Intern{" "}
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className={`md:mt-5 mt-2 md:flex-none md:justify-start md:block hidden justify-center text-lg font-semibold  ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            January 2023 - February 2023
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className={`md:mt-5 mt-2 md:hidden md:justify-start flex justify-center text-lg font-semibold  ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            January 2023 - February 2023
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className={`mt-5 text-2xl font-semibold ${
            darkMode ? "text-gray-100" : "text-gray-900"
          } tracking-widest`}
        >
          Tasks/Roles :
        </motion.h1>
        <div className="hidden md:block mx-2">
          <ul
            className={`list-disc mx-10 mt-5 text-lg font-lg ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Added <b> dynamic graph capability </b> that shows data from the
              backend over{" "}
              <b> timescales of minutes, days, months, and years </b>.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="md:mt-0 mt-2"
            >
              Developed a <b> Scheduler Feature </b> that allows the user to{" "}
              <b> add, delete, or update schedules </b>.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="md:mt-0 mt-2"
            >
              Created <b> reusable IOT dashboard components </b> , including
              gauge charts, graphs, and other visuals.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="md:mt-0 mt-2"
            >
              Built <b> reusable components </b> for the client's marketing
              website using <b> NextJS </b> .
            </motion.li>
          </ul>
        </div>
        <div className="md:hidden block mx-2">
          <ul
            className={`list-disc mx-10 mt-5 text-lg font-lg ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Added <b> dynamic graph capability </b> that shows data from the
              backend over{" "}
              <b> timescales of minutes, days, months, and years </b>.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="md:mt-0 mt-2"
            >
              Developed a <b> Scheduler Feature </b> that allows the user to{" "}
              <b> add, delete, or update schedules </b>.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="md:mt-0 mt-2"
            >
              Created <b> reusable IOT dashboard components </b> , including
              gauge charts, graphs, and other visuals.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="md:mt-0 mt-2"
            >
              Built <b> reusable components </b> for the client's marketing
              website using <b> NextJS </b> .
            </motion.li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-5 "
        >
          <a
            href="https://drive.google.com/file/d/1Fi1Kxq5ISdU_tAKyOm7q2K_CzNhHdEE1/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 cursor-[url('/pointer.png'),_pointer]"
          >
            {" "}
            View Letter
          </a>
        </motion.div>

        

        <hr className="border-1 border-gray-400 mt-10" />

        <div className="md:flex md:justify-between md:mt-10 mt-6 ">
          <div>
            <motion.a
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              href="https://www.propreturns.com/"
              target="_blank"
              rel="noreferrer"
              className=" hidden cursor-[url('/pointer.png'),_pointer] md:flex justify-center"
            >
              {darkMode ? (
                <Image
                  src="/logo1.png"
                  alt="PropReturns"
                  width={184.5}
                  height={55}
                  placeholder="blur"
                  blurDataURL="/logo1.png"
                />
              ) : (
                <Image
                  src="/propreturns.png"
                  alt="PropReturns"
                  width={184.5}
                  height={55}
                  placeholder="blur"
                  blurDataURL="/propreturns.png"
                />
              )}
            </motion.a>{" "}
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              href="https://www.propreturns.com/"
              target="_blank"
              rel="noreferrer"
              className="md:hidden cursor-[url('/pointer.png'),_pointer] flex justify-center"
            >
              {darkMode ? (
                <Image
                  src="/logo1.png"
                  alt="PropReturns"
                  width={184.5}
                  height={55}
                  blurDataURL="/logo1.png"
                  placeholder="blur"
                />
              ) : (
                <Image
                  src="/propreturns.png"
                  alt="PropReturns"
                  width={184.5}
                  height={55}
                  blurDataURL="/propreturns.png"
                  placeholder="blur"
                />
              )}
            </motion.a>{" "}
            <br />
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className={`hidden md:flex font-semibold md:flex-none md:justify-start justify-center text-xl ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {" "}
              SDE Intern{" "}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className={`md:hidden font-semibold md:flex-none md:justify-start flex justify-center text-xl ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {" "}
              SDE Intern{" "}
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className={`md:mt-5 mt-2 md:flex-none md:justify-start md:block hidden justify-center text-lg font-semibold  ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            June 2022 - July 2022
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className={`md:mt-5 mt-2 md:hidden md:justify-start flex justify-center text-lg font-semibold  ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            June 2022 - July 2022
          </motion.div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className={`mt-5 text-2xl font-semibold ${
            darkMode ? "text-gray-100" : "text-gray-900"
          } tracking-widest`}
        >
          Tasks/Roles :
        </motion.h1>
        <div className="hidden md:block mx-2">
          <ul
            className={`list-disc mx-10 mt-5 text-lg font-lg ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Developed reusable components for the marketplace product using{" "}
              <b> NextJS </b> and <b>TailwindCSS</b> and saved the user&apos;s
              inquiries to <b>MongoDB</b>.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="md:mt-0 mt-2"
            >
              Automated watermarking of uploaded images on <b>AWS S3 bucket</b>{" "}
              through lambda function written in <b>NodeJS</b>.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="md:mt-0 mt-2"
            >
              <b>Analyzed</b> and <b>Optimized</b> pages for best performance,
              improving the overall performance by <b>36%</b>.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="md:mt-0 mt-2"
            >
              Collaborated in <b>Search Engine Optimization</b> tasks such as{" "}
              <b>implementing breadcrumbs</b>, <b>adding schema markup</b> and{" "}
              <b>sitemap</b> which increased the overall <b>SEO score</b> to{" "}
              <b>95</b>.
            </motion.li>
          </ul>
        </div>
        <div className="md:hidden block mx-2">
          <ul
            className={`list-disc mx-10 mt-5 text-lg font-lg ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Developed reusable components for the marketplace product using{" "}
              <b> NextJS </b> and <b>TailwindCSS</b> and saved the user&apos;s
              inquiries to <b>MongoDB</b>.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="md:mt-0 mt-2"
            >
              Automated watermarking of uploaded images on <b>AWS S3 bucket</b>{" "}
              through lambda function written in <b>NodeJS</b>.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="md:mt-0 mt-2"
            >
              <b>Analyzed</b> and <b>Optimized</b> pages for best performance,
              improving the overall performance by <b>36%</b>.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="md:mt-0 mt-2"
            >
              Collaborated in <b>Search Engine Optimization</b> tasks such as{" "}
              <b>implementing breadcrumbs</b>, <b>adding schema markup</b> and{" "}
              <b>sitemap</b> which increased the overall <b>SEO score</b> to{" "}
              <b>95</b>.
            </motion.li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-5 "
        >
          <a
            href="https://drive.google.com/file/d/1Uz7mrjHVdvaLUlVrLpd6rbBLrpLBx19v/view"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 cursor-[url('/pointer.png'),_pointer]"
          >
            {" "}
            View Certificate
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="w-8/12 mx-auto hidden md:block"
      >
        <Image
          src="/somil.png"
          width={1169}
          height={299}
          placeholder="blur"
          blurDataURL="/somil.png"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="w-8/12 mx-auto mt-10 hidden md:block"
      >
        <Image
          src="/syed.png"
          width={1169}
          height={299}
          placeholder="blur"
          blurDataURL="/syed.png"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative object-cover w-80 h-24 mx-auto md:hidden block"
      >
        <Image
          src="/somil.png"
          layout="fill"
          placeholder="blur"
          blurDataURL="/somil.png"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className=" relative object-cover w-80 h-24 mx-auto mt-10 md:hidden block"
      >
        <Image
          src="/syed.png"
          layout="fill"
          placeholder="blur"
          blurDataURL="/syed.png"
        />
      </motion.div>
    </>
  );
};

export default Experience;
