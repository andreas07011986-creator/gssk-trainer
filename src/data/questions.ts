import { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 'q1',
    category: 'Datenschutz',
    question: 'Was ist DSGVO?',
    options: [
      'Datenschutz-Grundverordnung der EU',
      'Deutsches Sicherheits Gesetzbuch Verordnung',
      'Digitale Sicherheits- und Schutz Verfahren',
      'Daten Service Garantie Verfahren'
    ],
    correctAnswer: 0,
    explanation: 'Die DSGVO (Datenschutz-Grundverordnung) ist eine EU-Verordnung zum Schutz persönlicher Daten.',
    difficulty: 'easy'
  },
  {
    id: 'q2',
    category: 'Cybersecurity',
    question: 'Welches ist das sicherste Passwort?',
    options: [
      '123456',
      'qwerty',
      'K7$mP9&xL2@vQ4#zN8',
      'passwort123'
    ],
    correctAnswer: 2,
    explanation: 'Ein starkes Passwort enthält Großbuchstaben, Kleinbuchstaben, Zahlen und Sonderzeichen.',
    difficulty: 'easy'
  },
  {
    id: 'q3',
    category: 'Datenschutz',
    question: 'Wie lange darf man personenbezogene Daten speichern?',
    options: [
      'Unbegrenzt',
      'Nur solange es notwendig ist',
      'Maximal 5 Jahre',
      'Maximal 10 Jahre'
    ],
    correctAnswer: 1,
    explanation: 'Personenbezogene Daten dürfen nur so lange gespeichert werden, wie dies notwendig ist (Prinzip der Datensparsamkeit).',
    difficulty: 'medium'
  },
  {
    id: 'q4',
    category: 'Cybersecurity',
    question: 'Was ist Phishing?',
    options: [
      'Ein Fischerei-Programm',
      'Betrügerischer Versuch, vertrauliche Daten zu stehlen',
      'Ein Netzwerk-Protokoll',
      'Eine Verschlüsselungsmethode'
    ],
    correctAnswer: 1,
    explanation: 'Phishing ist ein Betrugsversuch, bei dem Angreifer versuchen, vertrauliche Informationen durch gefälschte Kommunikation zu stehlen.',
    difficulty: 'easy'
  },
  {
    id: 'q5',
    category: 'IT-Sicherheit',
    question: 'Was ist eine Firewall?',
    options: [
      'Ein Programm zum Löschen von Dateien',
      'Ein Schutzwall gegen Angriffe auf Netzwerke',
      'Ein Antivirenprogramm',
      'Ein Backup-System'
    ],
    correctAnswer: 1,
    explanation: 'Eine Firewall ist ein Sicherheitssystem, das Netzwerkverkehr überwacht und kontrolliert.',
    difficulty: 'medium'
  }
];
