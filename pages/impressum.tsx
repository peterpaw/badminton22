import { Container, List, Text, Title } from "@mantine/core"

const Impressum = () => {
  return (
    <Container size="sm" className="py-16">
      <Title order={1} className="mb-16 text-xl md:text-3xl">
        Impressum
      </Title>

      <Title order={4} className="text-left mb-4">
        Angaben gemäß § 5 TMG
      </Title>
      <List>
        <List.Item>SV Rot-Weiss Walldorf e.V.</List.Item>
        <List.Item>Abteilung Badminton</List.Item>
        <List.Item>An den Sportplätzen 27</List.Item>
        <List.Item>Postfach 2333</List.Item>
        <List.Item>64546 Mörfelden-Walldorf</List.Item>
      </List>

      <Title order={4} className="text-left mb-4 mt-8">
        Kontakt
      </Title>
      <Text>Abteilungsleiter: Florian Bernhard-Kolbe</Text>
      <Text>E-Mail: florian.bernhard@posteo.de</Text>

      <Title order={4} className="text-left mb-4 mt-8">
        Umsatzsteuer-ID
      </Title>
      <Text>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
        DE02125000112
      </Text>

      <Title order={4} className="text-left mb-4 mt-8">
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
      </Title>
      <Text>Peter Pawelczyk</Text>
      <Text>Email: hi@peterpaw.de</Text>
      <Text>Website: https://peterpaw.de</Text>

      <Title order={4} className="text-left mb-4 mt-8">
        Haftung für Inhalte
      </Title>
      <Text>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </Text>

      <Title order={4} className="text-left mb-4 mt-8">
        Haftung für Links
      </Title>
      <Text>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar.
      </Text>
      <Text>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
        ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
        Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
        entfernen.
      </Text>

      <Title order={4} className="text-left mb-4 mt-8">
        Urheberrecht
      </Title>
      <Text>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
      </Text>
      <Text>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </Text>
    </Container>
  )
}

export default Impressum
