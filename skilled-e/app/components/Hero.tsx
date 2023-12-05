import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-auto px-20 py-5">
      <section>
        <div className=" flex items-start justify-center min-h-screen">
          <aside className="w-1/2">
            <div className="">
              <h1 className="text-[#13183F] text-6xl font-bold mb-6 mt-20 ">
                Maximize skill, <br /> minimize budget
              </h1>
              <p className="text-[#13183F] mb-12 justify-evenly min-w-[100px]">
                Our modern courses across arange of in-demand skills will give
                you the knowledge you need to live the life you want.
              </p>
              <button className="bg-gradient-to-b from-orange-500 via-pink-500 to-pink-500  text-white px-10 py-4 rounded-3xl font-bold">
                Get Started
              </button>
            </div>
          </aside>
          <div className="w-1/2">
            <Image
              src={"/assets/image/image-hero-desktop.png"}
              alt={"Cover"}
              width={600}
              height={600}
              
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;
