import React from "react";
import { CountdownTimer } from "./components/CountdownTimer";

const Home = () => {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="https://serving.photos.photobox.com/00843259959f5f5cbba271a9dcac83b1eba447b73d96db2d03f7a0fc9a1d12b5e911e038.jpg"
        className="absolute h-full w-full object-cover"
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            Cabaré do Julio - Edição Moitas
          </h1>
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default Home;
