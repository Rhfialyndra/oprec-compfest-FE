import { BlitzPage, Link, useRouter } from "blitz"

const Navbar: BlitzPage = () => {
  const route = useRouter()

  const heading = route.pathname == "/" ? "Meme ReVue" : "Your Saved Memes"
  const subheading =
    route.pathname == "/" ? "(get it, cuz IT dev, vuejs)" : "view and delete your saved memes here"

  return (
    <div className="w-screen mt-4 h-72 flex flex-col justify-center items-center justify-between">
      <img src="/icon/compfest.svg"></img>

      <div
        className="flex flex-row items-center 
                link-bg max-w-content auto p-1 rounded-lg mb-6 text-white text-md font-bold"
      >
        <Link href="/">
          <a
            className={`flex items-center px-20 py-2 rounded-lg hover:bg-gray-700 transition-all duration-200
                                        ${route.pathname == "/" ? "button-indicator" : ""}`}
          >
            <img className="mr-2" src="/icon/search.svg" />
            Explore
          </a>
        </Link>

        <Link href="/SavedMemes">
          <a
            className={`flex items-center px-20 py-2 rounded-lg hover:bg-gray-700 transition-all duration-200
                                        ${
                                          route.pathname == "/SavedMemes" ? "button-indicator" : ""
                                        }`}
          >
            <img className="mr-2" src="/icon/saved.svg" />
            Saved
          </a>
        </Link>
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
