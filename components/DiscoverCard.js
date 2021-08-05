import Image from "next/image";

const DiscoverCard = ({ image, title, desc }) => {
  return (
    <div className="hover:scale-105 transition transform duration-300 ease-out cursor-pointer">
      <div className="relative h-[18rem] w-[18rem] md:h-[22rem] md:w-[22rem] mb-5">
        <Image src={image} layout="fill" className="rounded-lg" />
      </div>
      <h3 className="text-md md:text-lg font-semibold">{title}</h3>
      <h4 className="text-sm md:text-md">{desc}</h4>
    </div>
  );
};

export default DiscoverCard;
