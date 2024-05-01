import About from "./_components/_landing/About";
import Hero from "./_components/_landing/Hero";
import Offerings from "./_components/_landing/Oferrings";
import Testimonies from "./_components/_landing/Testimony";

export default function HomePage() {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat">
        <Hero />
        <Offerings />
        <About />
        <Testimonies />
      </div>
    </>
  );
}
