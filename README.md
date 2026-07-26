# 🎓 GSSK Trainer

Ein interaktiver Trainer für **Grundlagen Sicherheit Schulung und Kompetenzen** (GSSK), entwickelt mit Next.js und TypeScript.

## Features

- 🎯 **Interaktive Quiz-Module** - Multiple Choice Fragen mit sofortiger Rückmeldung
- 📊 **Fortschrittstrack** - Lokale Speicherung deiner Ergebnisse
- 🎨 **Moderne UI** - Responsives Design mit Gradient-Styling
- 💾 **LocalStorage-Integration** - Deine Antworten werden automatisch gespeichert
- 📱 **Mobile-freundlich** - Funktioniert auf allen Geräten

## Kategorien

- **Datenschutz** 🔒 - Grundlagen des Datenschutzes und DSGVO
- **Cybersecurity** 🛡️ - Schutz vor digitalen Angriffen
- **IT-Sicherheit** 🔐 - Allgemeine IT-Sicherheitsmaßnahmen

## Installation

```bash
# Klone das Repository
git clone https://github.com/andreas07011986-creator/gssk-trainer.git
cd gssk-trainer

# Installiere Dependencies
npm install

# Starten der Entwicklungs-Umgebung
npm run dev
```

Die Anwendung läuft dann unter `http://localhost:3000`

## Struktur

```
src/
├── app/
│   ├── page.tsx           # Startseite
│   ├── page.module.css    # Startseite Styles
│   ├── layout.tsx         # Root Layout
│   ├── globals.css        # Globale Styles
│   └── quiz/
│       └── [category]/
│           ├── page.tsx   # Quiz Seite
│           └── quiz.module.css
├── types/
│   └── index.ts           # TypeScript Typen
├── data/
│   └── questions.ts       # Quiz Fragen
```

## Verwendete Technologien

- **Next.js 14** - React Framework
- **TypeScript** - Typsicherheit
- **CSS Modules** - Scoped Styling
- **localStorage API** - Persistierung

## Wie man Fragen hinzufügt

Bearbeite `src/data/questions.ts` und füge neue Fragen hinzu:

```typescript
{
  id: 'q6',
  category: 'Datenschutz',
  question: 'Deine Frage?',
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correctAnswer: 0, // Index der korrekten Antwort
  explanation: 'Erklärung der Antwort',
  difficulty: 'easy' // 'easy', 'medium', oder 'hard'
}
```

## Performance

- ⚡ Schnelle Seitenladungen
- 💾 Effiziente LocalStorage-Nutzung
- 🎯 Optimierte Rendering-Strategie

## Zukunftsfeatures

- [ ] Backend-Integration für Datenspeicherung
- [ ] Benutzer-Authentifizierung
- [ ] Admin-Panel zum Verwalten von Fragen
- [ ] Leaderboard & Statistiken
- [ ] PDF-Zertifikate
- [ ] Mehrsprachige Unterstützung

## Lizenz

MIT License - Siehe LICENSE Datei

## Autor

Entwickelt mit ❤️ von [Andreas]

## Support

Bei Fragen oder Problemen, erstelle bitte ein Issue im Repository.

---

**Happy Learning! 🚀**
