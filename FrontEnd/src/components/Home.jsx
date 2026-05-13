import { NavLink } from "react-router"

function Home() {
  return (
    <div>

      {/* hero section */}
      <div className="relative w-screen h-screen overflow-hidden -mx-32">

        <img
          src="/src/image.png"
          alt="img not available"
          className="w-full h-full object-cover"
        />

      
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 mt-70">

          <NavLink
            to="/login"
            className="bg-white text-stone-800 text-sm font-semibold  px-10 py-4 rounded-full hover:bg-stone-100 transition"
          >
            Start Reading 
          </NavLink>

        </div>
      </div>

    </div>
  )
}

export default Home