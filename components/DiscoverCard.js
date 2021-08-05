import Image from "next/image";

const DiscoverCard = ({ image, title, desc }) => {
  return (
    <div>
      <div className="relative h-[22rem] w-[22rem] mb-5">
        <Image src={image} layout="fill" className="rounded-lg" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <h4 className="text-md">{desc}</h4>
    </div>
  );
};

export default DiscoverCard;
