import { ISlide } from "./pages";
import Image from "next/image"
import SponsorCard, { SponsorCardProps, Tier } from "@/SponsorCard";
import sponsors from "@/sponsors";

const experience: { company: string, position: string, year: string }[] = [
  {
    company: "SimWell",
    position: "Simulation Software Consultant",
    year: "2024"
  },
  {
    company: "Microsoft",
    position: "Software Developer",
    year: "2023"
  },
  {
    company: "Nuance",
    position: "Software Developer",
    year: "2023"
  },
  {
    company: "Genetec",
    position: "Software Developer",
    year: "2022"
  },
  {
    company: "Genetec",
    position: "IT Specialist",
    year: "2021"
  },
  {
    company: "Concordia University",
    position: "IT Analyst II",
    year: "2020 - 2023"
  },
  {
    company: "SAC Research Group",
    position: "SAC Research Group Research Assistant",
    year: "2020-2024"
  }
]

const slides: ISlide[] = [
  {
    children: <>
      <h1 className="text-6xl text-center">Welcome, entrepreneurs. ✈️</h1>
    </>
  },
  {
    children: <>
      <h1 className="text-8xl text-center">🍵</h1>
    </>
  },
  {
    children: <>
    <div className="flex flex-col justify-center items-center">

      <h1 className="text-6xl">Sponsors</h1>
      <div className="my-8 flex flex-col">
        <div
          id="silver-sponsors"
          className="scale-[125%] flex flex-wrap items-center justify-center space-y-2 sm:space-x-2 sm:space-y-0 mb-8"
        >
          {sponsors.map(
            (sponsor: SponsorCardProps, index: number) =>
              sponsor.tier === Tier.Silver &&
                <SponsorCard
                  displayName={sponsor.displayName}
                  link={sponsor.link}
                  tier={sponsor.tier}
                  key={index}
                ></SponsorCard>

          )}
        </div>

        <div
          id="bronze-sponsors"
          className="scale-[60%] flex flex-wrap items-center justify-center space-y-2 sm:space-x-2 sm:space-y-0"
        >
          {sponsors.map(
            (sponsor: SponsorCardProps, index: number) =>
              sponsor.tier === Tier.Bronze && (
                <SponsorCard
                  displayName={sponsor.displayName}
                  link={sponsor.link}
                  tier={sponsor.tier}
                  key={index}
                ></SponsorCard>
              )
          )}
        </div>

        <div
          id="inkind-sponsors"
          className="scale-[60%] flex flex-wrap items-center justify-center space-y-2 sm:space-x-8 sm:space-y-0"
        >
          {sponsors.map(
            (sponsor: SponsorCardProps, index: number) =>
              sponsor.tier === Tier.InKind && (
                <SponsorCard
                  displayName={sponsor.displayName}
                  link={sponsor.link}
                  tier={sponsor.tier}
                  key={index}
                ></SponsorCard>
              )
          )}
        </div>
      </div>
    </div>

    </>
  },
  {
    children: <>
      <h1 className="text-6xl font-bold text-center text-green-600">Practical Crash Course to UI/UX<br></br>for Business Products</h1>
    </>
  },
  {
    children: <>
      <div className="flex justify-center w-full items-center">
        <article className="prose prose-2xl">
          <h1>Why should I care?</h1>

          <p className="text-4xl">{`You think...`}</p>
          <blockquote>{`My products' usefulness speaks for themselves. Users will be swarming and paying big bucks for them.`}</blockquote>
          <Image src="/assets/stonk.jpg" width={500} height={500} alt="stonk"></Image>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center w-full items-center">
        <article className="prose prose-2xl">
          {/* <h1>I want to convince you</h1> */}
          <Image src="/assets/change-my-mind.jpg" width={600} height={600} alt="stonk"></Image>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex space-x-4 items-center">
        <div className="relative h-64 w-64">
          <Image alt="profile" fill={true} src="/assets/profile-photo.jpg" className="object-cover object-center rounded-full p-1 border-4 border-green-500"></Image>
        </div>
        <div className="flex flex-col space-y-4">

        <p>Presented by</p>
        <h1 className="font-bold text-6xl">Anh H. Nguyen</h1>
        <h2 className="text-4xl">Vice President, Technology</h2>
        <h2 className="text-4xl">Gina-Cody School Entrepreneurship Society (GCES)</h2>
        </div>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex space-x-8 items-center justify-center">
        <h1 className="text-6xl text-center">Experience👨‍💻</h1>
        <div className="h-96 w-1 border-r-4 border-black"></div>
        <div className="flex flex-wrap">
          {experience.map((exp, idx: number) => <div key={idx} className="relative items-center flex flex-col m-4 w-80 bg-neutral-800 rounded-lg px-4 py-2">
            <div className="relative h-24 w-[175px]">
              <Image src={`/logos/${exp.company}.png`} className="object-contain bg-transparent transition-all ease-in-out px-2 rounded" fill={true} alt={exp.company}></Image>
            </div>
            <p className="absolute top-1 right-2 text-base text-white/75">{exp.year}</p>
            <p className="text-[0.75em] text-center text-white/90">{exp.position}</p>
          </div>)}
        </div>
      </div>
    </>
  },
  {
    children: <div className="flex justify-center items-center">

      <iframe src="https://gcesconcordia.com" className="w-[85vw] h-[85vh] z-50"></iframe>
    </div>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-xl">
          <h1>So... what is UI and UX?</h1>
          <p className="font-mono text-3xl">&gt; UI: User Interface</p>
          <p className="font-mono text-3xl">&gt; UX: User Experience</p>
        </article>
      </div>
    </>
  },
  {
    children: <>
        <h1 className="text-6xl">Some examples of impressive User Interfaces</h1>
    </>
  },
  {
    children: <>
      <h1 className="text-6xl text-center mb-2"><a href="https://evervault.com">Evervault</a></h1>
      <iframe src="https://evervault.com" className="w-full h-[80vh]"></iframe>
    </>
  },
  {
    children: <>
      <h1 className="text-6xl text-center"><a href="https://www.palantir.com">Palantir</a></h1>
    </>
  },
  {
    children: <>
      <h1 className="text-center text-4xl">Modern smartphones</h1>
      <br></br>
      <div className="flex relative justify-center">
        <div className="h-72 w-72 relative">

        <Image src="/assets/iphone.png" fill={true} alt="iphone" className="object-contain"></Image>
        </div>
        <div className="h-72 w-72 relative">

        <Image src="/assets/pixel.png" fill={true} alt="pixel" className="object-contain"></Image>
        </div>
      </div>
    </>
  },
  {
    children: <>
      <h1 className="text-6xl text-center mb-2"><a href="https://bruno-simon.com/">{`Bruno Simon's Portfolio`}</a></h1>
      <iframe src="https://bruno-simon.com/" className="w-full h-[80vh]"></iframe>
    </>
  },
  {
    children: <>
      <div className="text-center">
        <h1 className="text-6xl">End / Fin.</h1>
      </div>
    </>
  }
]



export default slides;