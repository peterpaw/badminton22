import { Disclosure, Transition } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/solid"

const data = [
  {
    title: `Welche Sachen muss ich zum Training mitbringen?`,
    content: `Du benötigst lediglich Sportkleidung (kurze oder lange Hose sowie
        vorzugsweise ein kurzes Shirt) und Hallenschuhe mit heller Sohle.</p>
        <p>Wenn
        Du einen Schläger hast, kannst Du diesen natürlich gerne mitbringen.
        Falls Du keinen Schläger hast, können wir Dir für die Trainingszeit
        einen ausleihen. Wer nach dem Training duschen möchte, bringt sich
        Duschzeug mit.`,
  },
  {
    title: `Muss ich Mitglied im Verein sein, um mitmachen zu können?`,
    content: `Du kannst ruhig einige Male ins Training kommen und schauen, ob Dir
        Badminton Spaß macht und Du dabei bleiben möchtest. Wenn Du dich nach
        ein paar Wochen dafür entscheidest, dabeizubleiben, kostet eine
        Mitgliedschaft für Erwachsene knapp 10€ im Monat und Du kannst dafür pro
        Woche Montags und Mittwochs ins Training kommen sowie auch viele andere
        Abteilungen der Rot-Weiss Walldorf besuchen.`,
  },
  {
    title: `Muss ich gleich in einer Mannschaft spielen oder kann ich einfach so zum
        Spaß kommen?`,
    content: `Niemand braucht in einer Mannschaft zu spielen, weder am Anfang, noch
        wenn Du länger dabei bist. Das kann jeder selbst für sich entscheiden.
        Wenn Du jedoch Interesse hast, kannst Du Deinen Wunsch, in einer der
        Mannschaften zu spielen gerne äußern um zu schauen, wie und wo wir dich
        unterbringen können.`,
  },
  {
    title: `Ich habe noch nie oder noch nicht oft Badminton gespielt. Wie finde ich
        einen Spielpartner?`,
    content: `Wenn Du das 1. Mal kommst, gehst Du einfach auf ein Mitglied im Verein
        zu und sagst, dass Du gerne mitspielen möchtest. Wir freuen uns immer
        über neugierige Leute und wir haben viele Spieler mit unterschiedlichen
        Niveaus. So findest Du bestimmt jemanden, mit dem Du spielen kannst.
        Nachdem Du ein paar Mal im Training warst, wirst Du außerdem merken,
        dass Du Deine Fähigkeiten im Badminton schnell verbesserst und das Spiel
        immer mehr Spaß macht!`,
  },
  {
    title: `Muss ich an den Übungen im Training teilnehmen oder kann ich auch
        einfach nur so spielen?`,
    content: `Das kannst Du selbst entscheiden. Es gibt Leute, die nur spielen und
        andere, die am Training teilnehmen (siehe oben).`,
  },
]

const Faq = () => {
  return (
    <div className="w-full px-4 py-16">
      <div className="w-full max-w-2xl p-2 mx-auto bg-white rounded-2xl">
        {data.map((item) => (
          <Disclosure key={item.title} as="div" className="mb-4 last:mb-0">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-red-600 bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                  <span>{item.title}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-red-500`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {item.content}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}

export default Faq
