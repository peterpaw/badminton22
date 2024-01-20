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
      <td className="text-left">{element.mannschaft}</td>
      <td className="hidden md:table-cell">{element.s}</td>
      <td className="hidden md:table-cell">{element.u}</td>
      <td className="hidden md:table-cell">{element.n}</td>
      <td>{element.begegnungen}</td>
      <td>{element.punkte}</td>
    </tr>
  ));

  return (
    <Container pl={0} pr={0}>
      <MTable withColumnBorders>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}></th>
            <th>Mannschaft</th>
            <th className="hidden md:table-cell" style={{ textAlign: "center" }}>S</th>
            <th className="hidden md:table-cell" style={{ textAlign: "center" }}>U</th>
            <th className="hidden md:table-cell" style={{ textAlign: "center" }}>N</th>
            <th style={{ textAlign: "center" }}>Sp<span className="hidden md:inline-block">iele</span></th>
            <th style={{ textAlign: "center" }}>P<span className="hidden md:inline-block">un</span>kt<span className="hidden md:inline-block">e</span></th>
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