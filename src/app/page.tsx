'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const categories = [
  {
    id: 'datenschutz',
    name: 'Datenschutz',
    description: 'Grundlagen des Datenschutzes und DSGVO',
    icon: '🔒',
    questions: 2
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Schutz vor digitalen Angriffen',
    icon: '🛡️',
    questions: 2
  },
  {
    id: 'it-sicherheit',
    name: 'IT-Sicherheit',
    description: 'Allgemeine IT-Sicherheitsmaßnahmen',
    icon: '🔐',
    questions: 1
  }
];

export default function Home() {
  const [userId] = useState(() => `user_${Date.now()}`);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>🎓 GSSK Trainer</h1>
        <p>Interaktives Trainingsprogramm für Grundlagen Sicherheit Schulung und Kompetenzen</p>
      </header>

      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h2>Willkommen zum GSSK Trainer!</h2>
            <p>
              Verbessern Sie Ihr Wissen rund um Datenschutz, Cybersecurity und IT-Sicherheit
              durch interaktive Fragen und Erklärungen.
            </p>
          </div>
        </section>

        <section className={styles.categoriesSection}>
          <h2>Verfügbare Kategorien</h2>
          <div className={styles.categoriesGrid}>
            {categories.map((category) => (
              <Link href={`/quiz/${category.id}?userId=${userId}`} key={category.id}>
                <div className={styles.categoryCard}>
                  <div className={styles.categoryIcon}>{category.icon}</div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <div className={styles.categoryFooter}>
                    <span className={styles.questionCount}>
                      {category.questions} Fragen
                    </span>
                    <span className={styles.startButton}>Start →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h3>💡 Tipps für dein Lernen</h3>
            <ul>
              <li>Beantworte alle Fragen sorgfältig</li>
              <li>Lese die Erklärungen nach jeder Frage</li>
              <li>Versuche, deine Korrektheit zu verbessern</li>
              <li>Wiederhole schwierige Kategorien regelmäßig</li>
            </ul>
          </div>
          <div className={styles.infoCard}>
            <h3>🎯 Dein Fortschritt</h3>
            <p>Deine Antworten werden lokal gespeichert. Starten Sie jetzt eine Kategorie!</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 GSSK Trainer. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
