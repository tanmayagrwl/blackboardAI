import React from 'react';
import { Boxes } from './ui/background-boxes';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <section className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
        <div className="z-10 contents">
          <div className="left-10 top-10 h-full absolute hidden sm:hidden lg:block">
            <img
              src="/public/assets/illustrations/book.svg"
              alt=""
              className="h-48 left-0 opacity-95 w-5/6 transition-transform transform duration-100 hover:scale-105 motion-safe:animate-[moveBackAndForth_15s_ease-in-out_infinite] "
            />
          </div>
          <div className="absolute right-10 top-64 h-full hidden sm:hidden lg:block">
            <img
              src="/public/assets/illustrations/laptop.svg"
              alt=""
              className="h-48 left-0 opacity-95 w-5/6 transition-transform transform duration-100 hover:scale-105 motion-safe:animate-[moveBackAndForth_15s_ease-in-out_infinite] "
            />
          </div>
          <div className="absolute -bottom-96 left-48  h-full hidden sm:hidden lg:block">
            <img
              src="/public/assets/illustrations/tickets.svg"
              alt=""
              className="h-48 left-0 opacity-95 w-5/6 transition-transform transform duration-100 hover:scale-105 motion-safe:animate-[moveBackAndForth_15s_ease-in-out_infinite] "
            />
          </div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-8xl text-sky-900">
            blackBoard.Ai
          </h1>
          <h3 className="mt-8 scroll-m-20 text-3xl font-semibold tracking-tight text-sky-950">
            Your one stop edu Assistant
          </h3>
          <Link to="/upload" className="z-10">
            <button
              type="button"
              className="px-8 py-0.5  border-2 border-black dark:border-white  uppercase bg-white text-neutarl-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] w-[20vw] h-[5vh] mt-8"
            >
              Let's get started
            </button>
          </Link>
        </div>
        <Boxes className="opacity-20" />
      </section>
      <section className="min-h-screen">Bakki here</section>
    </>
  );
}

export default Landing;
