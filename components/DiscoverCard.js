import Image from "next/image";

const DiscoverCard = ({ image, title, desc }) => {
  return (
    <div>
      <div className="relative h-[15rem] w-[15rem] md:h-[22rem] md:w-[22rem] mb-5">
        <Image src={image} layout="fill" className="rounded-lg" />
      </div>
      <h3 className="text-sm md:text-lg font-semibold">{title}</h3>
      <h4 className="text-xs md:text-md">{desc}</h4>
    </div>
  );
};

export default DiscoverCard;
