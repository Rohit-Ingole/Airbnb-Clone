import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-[250px] sm:h-[350px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
      <Image
        src="https://lh4.googleusercontent.com/2x8vIjPqSN4ykbgOtcuHc6CBCdaqUE8JozvxZiqizsojoVsdL0glQ1CqSDPD-QMSErHAX8zbx91K_YG6NjOn=w1920-h923"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/3 md:1/4 w-full text-center">
        <p className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-gray-700">
          Go Near
        </p>
        <p className="hidden sm:inline text-md sm:text-lg font font-semibold text-gray-600">
          Settle in somewhere new. <br /> Discover stays to live, work or just
          relax.
        </p>
        <button className="hidden sm:block mx-auto px-4 py-2 rounded-xl text-gray-800 sm:px-5 sm:py-3 mt-5 border-2 bg-green-500 shadow-lg hover:shadow-md hover:scale-90 transition duration-200 font-semibold">
          Explore nearby
        </button>
      </div>
    </div>
  );
};

export default Hero;
