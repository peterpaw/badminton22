import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import gruppenFoto from "../public/badminton-jugend-gruppenfoto.jpg"
import redheadKid from "../public/jugendtraining-01.jpg"
import jugendFlyer from "../public/flyer-jugend.jpg"
import gasthausXXL from "../public/gasthaus-xxl.png"
import xxlWirt from "../public/wirt-joschi-mauri.jpg"

import { jugend } from "data/jugend"

const JugendPage: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Jugend | Rot-Weiss Walldorf Badminton</title>
      </Head>
      <section className="bg-zinc-100 py-8 md:py-16">
        <div className="container-narrow">
          <h2 className="mb-8 md:mb-16 font-black md:text-4xl">Jugend</h2>
          <div className="aspect-[16/7] relative mb-16">
            <Image
              src={gruppenFoto}
              alt="Jugend-Minimannschaft mit Coaches"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className=""
            />
          </div>
          <h2 className="mb-8 md:mb-16 font-black md:text-4xl">
            Jugend-Minimannschaft
          </h2>
          <div className="grid grid-cols-fluid-sm md:grid-cols-fluid gap-1">
            {jugend
              .sort((a, b) => a.id - b.id)
              .filter((p) => p.role === "player")
              .map((person) => (
                <div key={person.id} className="mb-4">
                  <div className="relative text-center">
                    <Image
                      src={person.foto}
                      alt={`Spielerfoto von ${person.name}`}
                      width={270}
                      height={360}
                    />
                  </div>
                  <h2 className="text-base font-medium leading-none mt-2">
                    {person.name}
                  </h2>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className="py-8 md:py-16">
        <h2 className="mb-8 md:mb-16 font-black md:text-4xl">
          Unsere Jugendtrainer
        </h2>
        <div className="grid grid-cols-fluid-16 mt-8 gap-1 justify-center">
          {jugend
            .sort((a, b) => a.id - b.id)
            .filter((p) => p.role === "coach")
            .map((person) => (
              <div key={person.id} className="mb-4">
                <div className="relative text-center">
                  <Image
                    src={person.foto}
                    alt={`Spielerfoto von ${person.name}`}
                    width={270}
                    height={360}
                  />
                </div>
                <h2 className="text-base font-medium leading-none mt-2">
                  {person.name}
                </h2>
              </div>
            ))}
        </div>
      </section>
      <section className="bg-zinc-100 text-center py-8 md:py-16">
        <h2 className="mb-8 md:mb-16 font-black md:text-4xl">Kontakt</h2>
        <p className="mb-4">
          Bei Fragen zum Kinder- und Jugendtraining steht euch gerne{" "}
          <strong>Maurizio Battaglia</strong> zur Verfügung:
        </p>
        <p>
          Telefon: 0160 / 753 58 33
          <br />
          Email:{" "}
          <a
            href="mailto:maurizio_battaglia1978@yahoo.com"
            className="underline"
          >
            maurizio_battaglia1978@yahoo.com
          </a>
        </p>
      </section>
      <section className="aspect-[16/7] relative">
        <Image
          src={redheadKid}
          alt="Jugendlicher trainigert"
          layout="fill"
          objectFit="cover"
          className="grayscale-50"
        />
      </section>
      <section className="bg-zinc-100 py-8 md:py-16">
        <h2 className="mb-8 md:mb-16 font-black md:text-4xl">Jugendtraining</h2>
        <div className="flex flex-wrap text-center justify-center gap-4 leading-tight">
          <div className="bg-white p-8 rounded shadow-sm flex-1 min-w-[20rem] max-w-[45vw]">
            <h3 className="text-xl md:text-2xl mb-4">Montag</h3>
            <p>Bertha-von-Suttner-Schule</p>
            <p>An den Nußbäumen 1, Halle A</p>
            <p>17:30 - 19:30 Uhr</p>
          </div>
          <div className="bg-white p-8 rounded shadow-sm flex-1 min-w-[20rem] max-w-[45vw]">
            <h3 className="text-xl md:text-2xl mb-4">Mittwoch</h3>
            <p>Sporthalle Walldorf</p>
            <p>Okrifteler Str. 29</p>
            <p>17:30 - 19:30 Uhr</p>
          </div>
        </div>
      </section>
      <section className="text-center py-8">
        <Image src={jugendFlyer} alt="Flyer Jugend" width={443} height={661} />
      </section>
      <section className="bg-zinc-100 py-8 md:py-16">
        <h2 className="mb-8 font-black md:text-4xl">Jugendsponsor</h2>
        <a
          href="http://www.rotweiss-xxl.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative mx-auto block text-center"
        >
          <Image
            src={gasthausXXL}
            alt="Logo Gasthaus XXL"
            width={150}
            height={150}
          />
        </a>
        <h3 className="font-normal text-lg mb-8">
          Übergabe der neuen Trikots an unsere Jugend-Minimannschaft
        </h3>
        <div className="relative text-center max-w-3xl mx-auto">
          <Image
            src={xxlWirt}
            alt="Rot-Weiss Wirt mit Vorstand Badminton"
            width={1024}
            height={768}
          />
          <small>
            {`Abteilungsleiter Janosch Kreuz, Gasthaus XXL Pächter Predrag "Pedja"
            Prodanovic, Jugendwart Maurizio Battaglia.`}
          </small>
          <p className="mt-8">
            Im Namen der Jugend-Minimannschaft ein{` `}
            <u>riesengroßes Dankeschön!</u>
          </p>
        </div>
      </section>
    </main>
  )
}

export default JugendPage
