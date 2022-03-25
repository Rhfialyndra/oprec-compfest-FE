import { useMeme } from "app/core/hooks/useMeme"
import { BlitzPage, Image } from "blitz"
import toast, { Toaster } from "react-hot-toast"
import Navbar from "app/core/components/Navbar"
import Searchbar from "app/core/components/Searchbar"
import Footer from "app/core/components/Footer"

const Home: BlitzPage = () => {
  const { memes, saveMeme, deleteMeme } = useMeme()

  const save = (id) => {
    saveMeme(id)
    toast("added to collection", {
      icon: "U0001f4be",
      style: {
        borderRadius: "999px",
        color: "#fff",
        background: "#28293D",
      },
    })
  }

  return (
    <div className="max-w-screen h-auto min-h-screen flex flex-col items-center">
      <Toaster position="bottom-center" />
      <Navbar />
      <Searchbar />
      <div className="grid grid-cols-3 auto-rows-fr grid-flow-row gap-4 gap-y-12 mb-20 ">
        {memes?.map((meme) => (
          <div className="relative" key={meme.id}>
            <img
              src={meme.imageSrc}
              alt={meme.title}
              className="rounded-xl w-80 h-96 object-cover"
            />

            <div className="absolute -bottom-6 h-32 px-4 card-bg w-full rounded-2xl flex flex-col justify-around">
              <h1 className=" text-white font-bold">{meme.title}</h1>

              {!meme.saved && (
                <button
                  className="button-indicator flex items-center justify-center
                 text-white py-2 w-2/5 rounded-xl "
                  onClick={() => save(meme.id)}
                >
                  <img className="w-4 h-auto mr-2" src="/icon/add.svg" />
                  <p>save</p>
                </button>
              )}

              {meme.saved && (
                <button
                  className="saved-btn flex items-center justify-center 
                 text-white py-2 w-2/5 rounded-xl"
                >
                  <img className="w-4 h-auto mr-2" src="/icon/item-saved.svg" />
                  <p>saved</p>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home
