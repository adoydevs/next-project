import Image from "next/image";

const Results = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-400 justify-center items-center">
      <div className="flex rounded-3xl  w-[500px] h-[350px] bg-white">
        <aside className="bg-indigo-600 w-1/2 rounded-3xl">
          <h1 className="flex justify-center mt-6 text-white">Your Results</h1>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-gradient-to-b from-indigo-700 rounded-full w-36 h-36 flex flex-col justify-center items-center mt-4">
              <h3 className="font-bold text-6xl text-center text-white">76</h3>
              <p className="text-white opacity-60">of 100</p>
            </div>
            <div className="flex flex-col text-center mt-4 text-white px-4">
              <h3 className="text-2xl font-semibold">Great</h3>
              <p className="text-sm mt-2 opacity-70">
                You scored higher that 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
        </aside>
        <div className="p-8 text-[#13283F]">
          <h2 className="text-[#13283F] font-bold text-xl">Summary</h2>
          <div className="bg-red-50 flex justify-between w-48 h-10 rounded-lg items-center px-2 mt-4 mb-2">
            <div className="flex text-sm">
              <Image
                src="./assets/images/icon-reaction.svg"
                alt="reaction"
                height={15}
                width={15}
              />
              <h3 className="pl-2 text-red-400 font-semibold  text-sm">
                Reaction
              </h3>
            </div>
            <p>
              <span className="font-semibold  text-sm">80 </span>{" "}
              <span className="opacity-70 text-sm"> /100</span>
            </p>
          </div>
          <div className="bg-red-50 flex justify-between w-48 h-10 rounded-lg items-center px-2 mb-2">
            <div className="flex">
              <Image
                src="./assets/images/icon-memory.svg"
                alt="reaction"
                height={15}
                width={15}
              />
              <h3 className="pl-2 text-amber-400 font-semibold  text-sm">
                Memory
              </h3>
            </div>
            <p>
              <span className="font-semibold  text-sm">92 </span>{" "}
              <span className="opacity-70 text-sm"> /100</span>
            </p>
          </div>
          <div className="bg-emerald-50 flex justify-between w-48 h-10 rounded-lg items-center px-2 mb-2">
            <div className="flex">
              <Image
                src="./assets/images/icon-verbal.svg"
                alt="reaction"
                height={15}
                width={15}
              />
              <h3 className="pl-2 text-emerald-400 font-semibold  text-sm">
                Verbal
              </h3>
            </div>
            <p>
              <span className="font-semibold  text-sm">61 </span>{" "}
              <span className="opacity-70 text-sm"> /100</span>
            </p>
          </div>
          <div className="bg-sky-50 flex justify-between w-48 h-10 rounded-lg items-center px-2 mb-4">
            <div className="flex">
              <Image
                src="./assets/images/icon-visual.svg"
                alt="reaction"
                height={15}
                width={15}
              />
              <h3 className="pl-2 text-[#13283f] font-semibold  text-sm">
                Visual
              </h3>
            </div>
            <p>
              <span className="font-semibold  text-sm">72 </span>{" "}
              <span className="opacity-70 text-sm"> /100</span>
            </p>
          </div>
          <button className="w-48 h-10  items-center bg-[#203c5a] rounded-3xl text-white font-semibold">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
