import Image from "next/image"

const Footer = () => {
  return (
    <div>
      <footer className="h-48 bg-[#13183f] mt-32">
      <div className="container w-full mx-auto h-48 flex items-center justify-between px-28">
      <Image src="./assets/icons/logo-light.svg" alt="dark light" 
        height={45} width={125} />
        <button className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-2xl font-semibold">Get Started</button>

      </div>
    </footer>
    </div>
  )
}

export default Footer