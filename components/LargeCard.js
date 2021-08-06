import Image from "next/image";

const LargeCard = ({ image, title, desc, buttonText, white }) => {
  return (
    <div className="relative py-16 cursor-pointer">
      <div className="relative h-[482px] min-w-[300px] ">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="absolute md:left-20 top-48 left-8">
        <h3 className="text-4xl md:text-5xl w-[16rem] md:w-[22rem] mb-3 font-semibold font-Nunito leading-[52px]">
          {title}
        </h3>
        <p className="text-lg font-medium">{desc}</p>
        <button
          className="text-white bg-gray-900
          text-sm px-4 py-2 rounded-lg mt-5"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
