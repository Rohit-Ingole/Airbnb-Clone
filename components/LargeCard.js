import Image from "next/image";

const LargeCard = ({ image, title, desc, buttonText, white }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px] ">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3
          className={`text-4xl w-64 mb-3 font-semibold ${
            white && "text-white"
          }`}
        >
          {title}
        </h3>
        <p className={`text-md ${white && "text-gray-200"}`}>{desc}</p>
        <button
          className={`${
            white ? "text-black bg-white" : "text-white bg-gray-900"
          } text-sm px-4 py-2 rounded-lg mt-5`}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
