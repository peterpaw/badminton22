import { NextPage } from "next"
import Head from "next/head"

const TrainingPage: NextPage = () => {
  return (
    <main className="">
      <Head>
        <title>Training | Rot-Weiss Walldorf Badminton</title>
      </Head>
      <h2 className="text-center py-8 mb-8 ">Training</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl mb-2 text-left">Montags:</h3>
          <p>
            <span className="font-semibold text-red-600 italic">
              Bertha-von-Suttner-Schule
            </span>
            , Halle A, An den Nußbäumen 1
          </p>
          <p>Jugend: 17:30 - 19:30 Uhr</p>
          <p>Erwachsene: 19:30 - 22:30 Uhr</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.15906016178!2d8.563788415426462!3d49.98962727941435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd75a8392d8f27%3A0x9ff8516d96158dd0!2sBertha-von-Suttner-Schule!5e0!3m2!1sen!2sde!4v1623850425359!5m2!1sen!2sde"
            width="100%"
            height="300"
            loading="lazy"
            style={{ border: 0, margin: "2rem auto", display: "block" }}
          ></iframe>
        </div>
        <div>
          <h3 className="text-xl mb-2 text-left">Mittwochs:</h3>
          <p>
            <span className="font-semibold text-red-600 italic">
              Sporthalle Walldorf
            </span>
            , Okrifteler Str. 29
          </p>
          <p>Jugend: 17:30 - 19:30 Uhr</p>
          <p>Erwachsene: 19:30 - 22:30 Uhr</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.2398250408205!2d8.56615131542726!3d50.00685997941667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd751745cacf91%3A0xb2e11e1f6e6b3abd!2sSporthalle!5e0!3m2!1sen!2sde!4v1623850566906!5m2!1sen!2sde"
            width="100%"
            height="300"
            style={{ border: 0, margin: "2rem auto", display: "block" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  )
}

export default TrainingPage
