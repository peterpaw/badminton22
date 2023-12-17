import { Container, Table as MTable, Text } from '@mantine/core';
import { Table } from 'types';

const regex = /walldorf/i; // i flag for case insensitive matching

export default function LeagueTable({ table }: { table: Table }) {
  let lastUpdated = "";
  if (table[0].created_at) {
    const date = new Date(table[0].created_at);
    lastUpdated = date.toLocaleString('de-DE', { timeZone: 'Europe/Berlin', dateStyle: 'medium' });
  }

  const rows = table.map((element) => (
    <tr key={element.id}>
      <td>{element.rang}</td>
      <td>{element.mannschaft}</td>
      <td>{element.s}</td>
      <td>{element.u}</td>
      <td>{element.n}</td>
      <td>{element.begegnungen}</td>
      <td>{element.punkte}</td>
    </tr>
  ));

  return (
    <Container>
      <MTable withColumnBorders>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Rang</th>
            <th style={{ textAlign: "center" }}>Mannschaft</th>
            <th style={{ textAlign: "center" }}>S</th>
            <th style={{ textAlign: "center" }}>U</th>
            <th style={{ textAlign: "center" }}>N</th>
            <th style={{ textAlign: "center" }}>Spiele</th>
            <th style={{ textAlign: "center" }}>Punkte</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </MTable>
      <Text
        component="p"
        className="text-xs font-semibold leading-none text-center mt-8"
      >Zuletzt aktualisiert am {lastUpdated}</Text>
    </Container>

  );
}