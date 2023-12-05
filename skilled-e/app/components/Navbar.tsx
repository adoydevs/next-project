import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="container mx-auto px-20 py-5">
      <div className=" flex justify-between items-center">
        <Image src="./assets/icons/logo-dark.svg" alt="dark logo" 
        height={25} width={95} />
        <button className="bg-[#13183f] text-white px-6 py-2 rounded-2xl font-semibold">Get Started</button>
      </div>
    </nav>
  )
}

export default Navbar