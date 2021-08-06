import Image from "next/image";
import HeroImage from "../images/Hero.jpg";

const Hero = () => {
  return (
    <div className="relative h-[250px] sm:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]">
      <Image src={HeroImage} layout="fill" objectFit="cover" />
      <div className="absolute top-1/4 md:top-1/3 left-5 lg:left-20 md:1/4 w-[150px] w-auto">
        <p className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] font-bold text-white max-w-md md:leading-[45px] lg:leading-[60px]">
          Olympian & Paralympian Online Experiences
        </p>
        <button className="hidden sm:block rounded-md text-gray-800 text-center px-4 py-1 mt-8 border-2 bg-white shadow-lg hover:shadow-md hover:scale-90 transition duration-200 font-semibold">
          Explore now
        </button>
      </div>
    </div>
  );
};

export default Hero;
