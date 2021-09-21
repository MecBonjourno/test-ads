export const CARDS: card[] = [
  { id: 1, value: 1, suit: 'ouro', name: '1 de ouro', rule: 'Distribua um (1) shot!' },
  { id: 2, value: 1, suit: 'espadas', name: '1 de espadas', rule: 'Distribua um (1) shot!' },
  { id: 3, value: 1, suit: 'paus', name: '1 de paus', rule: 'Distribua um (1) shot!' },
];

export class card {
  id: number;
  value: number;
  suit: string;
  name: string;
  rule: string;
}
