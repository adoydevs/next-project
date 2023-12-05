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

      <section>
        <div className="grid grid-cols-3 items-center">
          
          <div className="shadow-2xl bg-gradient-to-b from-orange-500 via-pink-500 to-pink-500 w-[300px] h-[300px] rounded-xl m-5 px-10">
            <h3 className="py-16 text-3xl font-bold text-white">
              Check out our most popular courses!
            </h3>
          </div>

          {/* Animation  */}
          <div className="shadow-2xl  px-10 border w-[300px] h-[300px] rounded-xl m-5 justify-evenly">
            <Image
              src="/assets/icons/icon-animation.svg"
              alt="Animation"
              width={35}
              height={35}
              className="-mt-4"
            />
            <h3 className="text-2xl font-bold mt-5 text-[#13183F]">Animation</h3>
              <p className=" mt-5">
                Learn the latest animation techniques to create studding motion
                design and captivate your audience.
              </p>
            <button className="text-lg font-bold mt-5 text-[#F2339A]">Get Started</button>
          </div>

          {/* Design  */}
          <div className="shadow-2xl  px-10 border w-[300px] h-[300px] rounded-xl m-5 justify-evenly">
            <Image
              src="/assets/icons/icon-design.svg"
              alt="Design"
              width={35}
              height={35}
              className="-mt-4"
            />
            <h3 className="text-2xl font-bold mt-5 text-[#13183F]">Design</h3>
              <p className=" mt-5">
                Create beautiful, usable interfaces to help shape the future of how the web looks.
              </p>
            <button className="text-lg font-bold mt-5 text-[#F2339A]">Get Started</button>
          </div>


          {/* Photography */}
          <div className="shadow-2xl  px-10 border w-[300px] h-[300px] rounded-xl m-5 justify-evenly">
            <Image
              src="/assets/icons/icon-photography.svg"
              alt="photography"
              width={35}
              height={35}
              className="-mt-4"
            />
            <h3 className="text-2xl font-bold mt-5 text-[#13183F]">Photography</h3>
              <p className=" mt-5">
                Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.
              </p>
            <button className="text-lg font-bold mt-5 text-[#F2339A]">Get Started</button>
          </div>


          {/* Crypto */}
          <div className="shadow-2xl  px-10 border w-[300px] h-[300px] rounded-xl m-5 justify-evenly">
            <Image
              src="/assets/icons/icon-crypto.svg"
              alt="crypto"
              width={35}
              height={35}
              className="-mt-4"
            />
            <h3 className="text-2xl font-bold mt-5 text-[#13183F]">Crypto</h3>
              <p className=" mt-5">
                All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.
              </p>
            <button className="text-lg font-bold mt-5 text-[#F2339A]">Get Started</button>
          </div>

          {/* Business  */}
          <div className="shadow-2xl  px-10 border w-[300px] h-[300px] rounded-xl m-5 justify-evenly">
            <Image
              src="/assets/icons/icon-business.svg"
              alt="business"
              width={35}
              height={35}
              className="-mt-4"
            />
            <h3 className="text-2xl font-bold mt-5 text-[#13183F]">Business</h3>
              <p className=" mt-5">
                A step-by-step playbook to help you start, scale, and sustain your business without outside investment.
              </p>
            <button className="text-lg font-bold mt-5 text-[#F2339A]">Get Started</button>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Hero;
