import Image from "next/image";

const MediumCard = ({ image, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-64 w-64 display mb-2">
        <Image src={image} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-md">{title}</h3>
    </div>
  );
};

export default MediumCard;
