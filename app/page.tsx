import { About, Portfolios, GetStarted, Hero, Services } from "./sections";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative">
        <About />
        <Services />
        <div className="gradient-03 z-0" />
      </div>
      <div className="relative">
        {/* <Portfolios /> */}
        <div className="gradient-04 z-0" />
        <GetStarted />
      </div>
    </>
  )
}
