import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Bounce from "react-reveal/Bounce";
import * as Icons from "react-icons/fa";

import Avatar from "../public/assets/me.jpg";
import Art from "../public/assets/art/art1.svg";

// import { Roboto } from "@next/font/google";

// const roboto = Roboto({
//   weight: ["900"],
// });

//todo: react reveal animations and next font , bg-pattern, social links, fix!

const Home: NextPage = () => {
  return (
    <section className="bg-svg-pattern flex w-full flex-auto flex-col">
      <div className="content flex w-full flex-col-reverse items-center justify-center gap-4 py-16 px-24 md:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center gap-4 md:items-start">
          <h4 className="hidden text-base font-semibold md:flex md:text-xl">
            {`Hey, I'm`}
          </h4>
          <h1 className="text-3xl font-black md:text-6xl">Hussein Kizz</h1>
          <p className="text-center md:text-left">
            Senior Frontend Engineer helping startups turn ideas to real world
            solutions using soft skills and technical expertise. Ready for
            frontend roles, consultation, and freelancing. ➟ With focus on
            details, result and time of execution.
          </p>
          <button className="border-fuchsia mt-4 rounded-3xl border py-2 px-4 shadow-md shadow-fuchsia-500 transition ease-linear hover:text-indigo-500 hover:shadow-lg hover:shadow-indigo-500">
            Get In Touch
          </button>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <Bounce right>
            <span className="tinRightIn rounded-full border-transparent bg-gradient-to-r from-rose-400  via-fuchsia-500 to-indigo-500 bg-clip-border p-1 shadow-md shadow-fuchsia-500">
              <Image
                src={Avatar}
                width={300}
                height={300}
                alt="Hussein Kizz Photo"
                className="rounded-full bg-gradient-to-r from-rose-400  via-fuchsia-500 to-indigo-500 opacity-95 transition ease-linear hover:opacity-100"
              />
            </span>
          </Bounce>
          {/* My Socials */}
          <div className="relative mt-4 flex items-center justify-center gap-4">
            <Link
              href="https://twitter/HusseinKizz"
              passHref
              className="flex items-center justify-center gap-2"
            >
              <Icons.FaTwitter className="h-6 w-6 text-rose-400 hover:text-rose-200" />
            </Link>
            <Link
              href="https://twitter/HusseinKizz"
              passHref
              className="flex items-center justify-center gap-2"
            >
              <Icons.FaGithub className="h-6 w-6 text-indigo-400 hover:text-indigo-200" />
            </Link>
            <Link
              href="https://twitter/HusseinKizz"
              passHref
              className="flex items-center justify-center gap-2"
            >
              <Icons.FaWhatsappSquare className="h-6 w-6 text-fuchsia-400 hover:text-fuchsia-200" />
            </Link>
          </div>
        </div>
      </div>
      {/* The Banner */}
      <div className="clippy-path flex flex-col items-center justify-between gap-4 bg-black px-24 py-8 text-white md:flex-row">
        <div className="flex">
          <Image
            src={Art}
            width={300}
            height={300}
            alt="Art Illustration"
            className="rounded-full bg-gradient-to-r from-rose-400  to-indigo-500 text-fuchsia-500 opacity-95 transition ease-linear hover:opacity-100"
          />
        </div>
        <div className="flex">
          <p className="text-2xl font-bold capitalize leading-10 md:text-4xl">
            Over my
            <span className="mx-2 bg-gradient-to-r  from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              Years of experience
            </span>
            <br />
            I have built a bunch of projects <br /> below are some
            <span className="mx-2 rounded-md bg-gradient-to-r  from-rose-400 via-fuchsia-500 to-indigo-500">
              highlights
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
