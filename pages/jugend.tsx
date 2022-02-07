import { jugend } from "data/jugend"
import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

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
      <div className="grid grid-cols-2 gap-4 mt-8">
        {jugend
          .sort((a, b) => a.id - b.id)
          .map((person) => (
            <div key={person.id}>
              <div className="relative w-full h-96">
                <Image
                  src={`/${person.foto}`}
                  alt={`Spielerfoto von ${person.name}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h2>{person.name}</h2>
            </div>
          ))}
      </div>
    </main>
  )
}

export default JugendPage
