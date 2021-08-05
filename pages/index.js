import Hero from "../components/Hero";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";

import {
  smallCardData,
  mediumCardData,
  discoverData,
} from "../constants/cardData";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import DiscoverCard from "../components/DiscoverCard";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-3xl font-bold pb-5">Explore Nearby</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {smallCardData.map(({ location, distance, image }) => (
              <SmallCard
                location={location}
                distance={distance}
                image={image}
                key={image}
              />
            ))}
          </div>
        </section>
        <LargeCard
          image="https://pbs.twimg.com/media/D7WGjc-VUAENpSG.jpg"
          title="Try Hosting"
          desc="Earn extra income and unlock new opportunities by sharing your space."
          buttonText="Learn more"
          white
        />
        <section className="pb-5">
          <h2 className="text-3xl font-bold pb-5 py-8">Live anywhere</h2>
          <div className="flex space-x-8 overflow-scroll scrollbar-hide p-3 -ml-3">
            {mediumCardData.map(({ image, title }) => (
              <MediumCard image={image} title={title} key={image} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold pb-5 py-8">
            Discover things to do
          </h2>
          <div className="flex overflow-scroll scrollbar-hide p-3 space-x-9">
            {discoverData.map(({ image, title, desc }) => (
              <DiscoverCard
                image={image}
                title={title}
                desc={desc}
                key={image}
              />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            image="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
            title="The Greatest Outdoors"
            desc="Wishlist curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
