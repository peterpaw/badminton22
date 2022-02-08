import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import { jugend } from "data/jugend"

const JugendPage: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Jugend | Rot-Weiss Walldorf Badminton</title>
      </Head>
      <h1 className="mb-8">Jugend</h1>
      <div className="aspect-video relative">
        <Image
          src="/badminton-jugend-gruppenfoto.jpg"
          alt="Jugend mit beiden Trainern"
          layout="fill"
        />
      </div>
      <section>
        <h2 className="mt-8 md:mt-16">Jugend-Minimannschaft</h2>
        <div className="grid grid-cols-fluid-sm md:grid-cols-fluid mt-8 gap-1">
          {jugend
            .sort((a, b) => a.id - b.id)
            .filter((p) => p.role === "player")
            .map((person) => (
              <div key={person.id} className="mb-4">
                <div className="relative text-center">
                  <Image
                    src={`/${person.foto}`}
                    alt={`Spielerfoto von ${person.name}`}
                    width={270}
                    height={360}
                  />
                </div>
                <h2 className="text-base font-medium leading-none">
                  {person.name}
                </h2>
              </div>
            ))}
        </div>
      </section>
      <section>
        <h2 className="mt-8 md:mt-16">Unsere Jugendtrainer</h2>
        <div className="grid grid-cols-fluid-16 mt-8 gap-1 justify-center">
          {jugend
            .sort((a, b) => a.id - b.id)
            .filter((p) => p.role === "coach")
            .map((person) => (
              <div key={person.id} className="mb-4">
                <div className="relative text-center">
                  <Image
                    src={`/${person.foto}`}
                    alt={`Spielerfoto von ${person.name}`}
                    width={270}
                    height={360}
                  />
                </div>
                <h2 className="text-base font-medium leading-none">
                  {person.name}
                </h2>
              </div>
            ))}
        </div>
      </section>
      <section className="text-center py-8">
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
      <section className="text-center py-8">
        <Image
          src="/flyer-jugend.jpg"
          alt="Flyer Jugend"
          width={443}
          height={661}
        />
      </section>
      <section className="py-8 md:py-16">
        <h2 className="mb-8">
          Übergabe der neuen Trikots an unsere Jugend-Minimannschaft
        </h2>
        <div className="relative text-center max-w-3xl mx-auto">
          <Image
            src="/wirt-joschi-mauri.jpg"
            alt="Rot-Weiss Wirt mit Vorstand Badminton"
            width={1024}
            height={768}
          />
          <small>
            Abteilungsleiter Janosch Kreuz, Gasthaus XXL Pächter Predrag "Pedja"
            Prodanovic, Jugendwart Maurizio Battaglia.
          </small>
          <p className="mt-8">
            Im Namen der Jugend-Minimannschaft ein{` `}
            <u>riesengroßes Dankeschön!</u>
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-8">Partner der Jugendabteilung:</h2>
        <a
          href="http://www.rotweiss-xxl.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative mx-auto my-4 block text-center"
        >
          <Image
            src="/gasthaus-xxl.png"
            alt="Logo Gasthaus XXL"
            width={150}
            height={150}
          />
        </a>
      </section>
    </main>
  )
}

export default JugendPage
