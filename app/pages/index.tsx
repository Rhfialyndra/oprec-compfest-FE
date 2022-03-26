import { useMeme } from "app/core/hooks/useMeme"
import { BlitzPage, Image, useQuery } from "blitz"
import { useState } from "react"
import getMemes from "app/memes/queries/getMemes"

import toast, { Toaster } from "react-hot-toast"
import Navbar from "app/core/components/Navbar"
import Searchbar from "app/core/components/Searchbar"
import Footer from "app/core/components/Footer"
import SavedMemes from "./SavedMemes"

const Home: BlitzPage = () => {
  const { memes, saveMeme, deleteMeme } = useMeme()
  const [isHome, setIsHome] = useState(false)

  // interface Meme {
  //   title: String
  //   saved: boolean
  // }

  //this should be callback for useQuery, but doesn't work. still don't know how to use this

  // const findMeme = (keyword: String) => {
  //   const [memeQuery] = useQuery(getMemes, {where : {
  //     title : keyword
  //   }})
  // }

  const save = (id) => {
    saveMeme(id)
    toast.success("added to collection", {
      style: {
        borderRadius: "999px",
        color: "#fff",
        background: "#28293D",
      },
    })
  }

  const changePage = (arg: boolean): void => {
    setIsHome(arg)
  }

  //page is unresponsive. got no idea on how it should look like on smalled device + p tight on schedule
  return (
    <div className="min-w-screen h-auto min-h-screen flex flex-col items-center">
      <Toaster position="bottom-center" />
      <Navbar isShown={isHome} callback={changePage} />
      <Searchbar />

      {isHome && (
        <div className="grid grid-cols-3 auto-rows-fr grid-flow-row gap-4 gap-y-20 mt-10 mb-28 ">
          {memes?.map((meme) => (
            <div className="relative" key={meme.id}>
              <img src={meme.imageSrc} alt={meme.title} className="noSelect rounded-xl w-80 h-80" />

              <div className="absolute -bottom-14 h-32 px-4 card-bg w-full rounded-2xl flex flex-col justify-around">
                <h1 className=" text-white font-bold">{meme.title}</h1>

                {!meme.saved && (
                  <button
                    className="noSelect button-indicator flex items-center justify-center
                 text-white py-2 w-2/5 rounded-xl hover:bg-opacity-80 hover:drop-shadow-2xl "
                    onClick={() => save(meme.id)}
                  >
                    <img className="w-4 h-auto mr-2" src="/icon/add.svg" />
                    <p>save</p>
                  </button>
                )}

                {meme.saved && (
                  <button
                    className="noSelect saved-btn flex items-center justify-center 
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
      )}

      {!isHome && <SavedMemes />}
      <Footer />
    </div>
  )
}

export default Home
