import React from 'react';

function Login() {
  return (
    //main div
    <div className="w-full h-screen bg-gradient-to-r from-[#00B4DB] to-[#0083B0] flex items-center justify-end ">
      {/* bg blur div */}
      <img
        src="/assets/loginFaded.svg"
        alt=""
        className="absolute left-0  h-[200vh] sm:h-full lg:h-[100vh] opacity-20"
      />
      {/* center div */}
      <div className="w-[75%] sm:w-[75%] lg:w-[60%] h-[75%] sm:h-[75%] lg:h-[60%] bg-white mr-10 sm:mr-10 lg:mr-40 rounded-3xl flex flex-col sm:flex-col lg:flex-row z-10">
        {/* image in the center div */}
        <img
          src="/assets/login.svg"
          alt=""
          className="absolute h-[25vh] sm:h-[25vh] lg:h-[35vh] bottom-28 sm:bottom-28 lg:bottom-64 lg:right-48"
        />
        {/* left div */}
        <div className="w-[65%] font-montserrat h-full rounded-l-3xl flex flex-col items-start justify-center ml-12 gap-y-5 pb-10">
          <div className="text-3xl text-[#465685] pb-10">blackBoard.ai</div>
          {/* sign in div */}

          <button
            type="button"
            className=" border-[#BCBEC0] border hover:bg-[#e9f4fd] active:bg-[rgb(196,220,243)] flex gap-7 px-5 py-2 rounded-3xl w-[55vw] sm:w-[55vw] lg:w-auto items-center justify-center"
          >
            <img src="/assets/google.svg" alt="" />
            <span className="text-sm sm:text-sm lg:text-md ">
              Sign In with Google
            </span>
          </button>
        </div>
        {/* right div */}
        <div className="w-full sm:w-full lg:w-[35%] bg-[#E2EEF5] h-[40%] sm:h-[20%] lg:h-full rounded-3xl flex items-center justify-center">
          {' '}
        </div>
      </div>
    </div>
  );
}

export default Login;
