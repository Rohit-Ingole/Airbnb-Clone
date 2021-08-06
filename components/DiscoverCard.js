import Image from "next/image";

const DiscoverCard = ({ image, title, desc }) => {
  return (
    <div className="hover:scale-105 transition transform duration-300 ease-out cursor-pointer">
      <div className="relative h-[16rem] w-[16rem] md:h-[26.35rem] md:w-[26.35rem] mb-5">
        <Image src={image} layout="fill" className="rounded-lg" />
      </div>
      <h3 className="text-md md:text-lg font-semibold">{title}</h3>
      <h4 className="text-sm md:text-md">{desc}</h4>
    </div>
  );
};

export default DiscoverCard;
