import { BlitzPage } from "blitz"

const Searchbar: BlitzPage = () => {
  return (
    <div className="mt-14 w-1/2 max-w-2xl text-white flex flex-col mb-14">
      <form>
        <label>Search for a meme</label>
        <div className="relative">
          <input
            placeholder="or die you son of a bitch"
            type="text"
            name="meme"
            id="meme"
            className="mt-1 bg-transparent w-full border border-gray-300 
                        rounded-full text-white border-opacity-50 py-2 px-4 pl-14 focus:border-gray-300"
          ></input>
          <img className="absolute bottom-2 left-4 w-6 h-auto" src="/icon/input-search.svg" />
        </div>
      </form>
    </div>
  )
}

export default Searchbar
