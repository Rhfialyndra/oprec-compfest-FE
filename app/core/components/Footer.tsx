import { BlitzPage, Image } from "blitz"

const Footer: BlitzPage = () => {
  return (
    <section
      className="w-screen h-32 bottom-0 footer flex flex-row justify-between items-center px-20
        rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="compfest text-white">
        <img src="/icon/compfest.svg" className="noSelect" />
        <p className="text-xs">&copy; 2022 COMPFEST. All rights reserved.</p>
      </div>

      <div className="noSelect social-media max-w-xl w-1/4 flex justify-between">
        <Image src={"/icon/facebook.svg"} width={20} height={20} alt="facebook" />

        <Image src={"/icon/twitter.svg"} width={20} height={20} alt="twitter" />

        <Image src={"/icon/youtube.svg"} width={20} height={20} alt="youtube" />

        <Image src={"/icon/instagram.svg"} width={20} height={20} alt="instagram" />

        <Image src={"/icon/linkedin.svg"} width={20} height={20} alt="linkedin" />

        <Image src={"/icon/line.svg"} width={20} height={20} alt="line" />

        <Image src={"/icon/medium.svg"} width={20} height={20} alt="medium" />
      </div>
    </section>
  )
}

export default Footer
