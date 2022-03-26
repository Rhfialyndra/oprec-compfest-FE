import { BlitzPage, Image } from "blitz"
import { useMeme } from "app/core/hooks/useMeme"

const SavedMemes: BlitzPage = () => {
  const { memes, saveMeme, deleteMeme } = useMeme()

  const savedMemes = memes.filter((meme) => meme.saved == true)

  return (
    <main className=" flex flex-col items-center">
      {savedMemes.length == 0 && (
        <section className="h-screen">
          <Image src={"/icon/empty-state.svg"} width={700} height={400} className="noSelect" />
        </section>
      )}

      {savedMemes.length != 0 && (
        <section className="min-h-screen">
          <div className="grid grid-cols-3 auto-rows-fr grid-flow-row gap-4 gap-y-20 mb-28 mt-10">
            {savedMemes?.map((meme) => (
              <div className="relative" key={meme.id}>
                <img
                  src={meme.imageSrc}
                  alt={meme.title}
                  className="noSelect rounded-xl w-80 h-80"
                />

                <div className="absolute -bottom-14 h-32 px-4 card-bg w-full rounded-2xl flex flex-col justify-around">
                  <h1 className=" text-white font-bold">{meme.title}</h1>

                  {meme.saved && (
                    <button
                      className="noSelect saved-indicator flex items-center justify-center 
                            text-white py-2 w-2/5 rounded-xl hover:shadow-2xl"
                      onClick={() => deleteMeme(meme.id)}
                    >
                      <img className="w-4 h-auto mr-2" src="/icon/item-saved.svg" />
                      <p>
                        <span>saved</span>
                      </p>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
export default SavedMemes
