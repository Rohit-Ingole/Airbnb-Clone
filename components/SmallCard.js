import Image from "next/image";

const SmallCard = ({ location, distance, image }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-2 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={image} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2 className="text-gray-700 font-semibold">{location}</h2>
        <h3 className="text-gray-600">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
