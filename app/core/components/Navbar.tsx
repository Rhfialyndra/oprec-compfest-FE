import { BlitzPage, Link, useRouter } from "blitz"

interface NavProps {
  isShown: boolean
  callback: (arg: boolean) => void
}

const Navbar: React.FC<NavProps> = (props) => {
  const route = useRouter()

  const heading = props.isShown ? "Meme ReVue" : "Your Saved Memes"
  const subheading = props.isShown
    ? "(get it, cuz IT dev, vuejs)"
    : "view and delete your saved memes here"

  // to anyone who review my codes, notice that i used <a> below instead of <Link>.
  // i tried to make SPA, but next/ isn't intended for it, so i had to tri the workaround and decided to use "state"
  // in the end, it's not even a link. hence, <a> usage isn't appropriate. i just cut the chase off, as the dl is near. sorry.

  return (
    <div className="w-screen mt-4 h-72 flex flex-col justify-center items-center justify-between">
      <img className="noSelect" src="/icon/compfest.svg" alt="compfest"></img>

      <div
        className="relative flex flex-row items-center 
                link-bg max-w-content auto p-1 rounded-lg mb-6 text-white text-md font-bold cursor-pointer"
      >
        <a
          className={`flex items-center px-20 py-2 rounded-lg hover:bg-gray-700 transition-all duration-200
                                        `}
          onClick={() => props.callback(true)}
        >
          <div className="z-10 flex items-center">
            <img className="mr-2" src="/icon/search.svg" alt="search" />
            Explore
          </div>
        </a>

        <a
          className={`flex items-center px-20 py-2 rounded-lg hover:bg-gray-700 transition-all duration-200
                                       `}
          onClick={() => props.callback(false)}
        >
          <div className="z-10 flex items-center">
            <img className="mr-2" src="/icon/saved.svg" alt="saved" />
            <p>Saved</p>
          </div>
        </a>

        <div
          id="slider"
          className={`z-8 button-indicator absolute w-1/2 h-10 rounded-lg bg-blue-700 
          ${!props.isShown ? "translate-x-full" : ""} ease-in-out duration-300`}
        ></div>
      </div>

      <div className="text-center text-white">
        <h1 id="heading" className="font-bold text-5xl">
          {heading}
        </h1>
        <p id="subheading" className="mt-4">
          {subheading}
        </p>
      </div>
    </div>
  )
}
export default Navbar
