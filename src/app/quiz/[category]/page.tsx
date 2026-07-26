'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { questions } from '@/data/questions';
import { Question, QuizResult } from '@/types';
import styles from './quiz.module.css';

export default function QuizPage({ params }: { params: { category: string } }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const userId = searchParams.get('userId') || 'anonymous';
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const categoryQuestions = questions.filter(q => q.category.toLowerCase().replace(' ', '-') === params.category);

  useEffect(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem(`quiz_${userId}_${params.category}`);
    if (saved) {
      const data = JSON.parse(saved);
      setResults(data.results || []);
      setCurrentQuestionIndex(data.currentIndex || 0);
    }
  }, [userId, params.category]);

  if (categoryQuestions.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Kategorie nicht gefunden</h1>
          <p>Die angeforderte Kategorie existiert nicht.</p>
          <button onClick={() => router.push('/')} className={styles.primaryBtn}>
            Zurück zur Startseite
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = categoryQuestions[currentQuestionIndex];

  const handleAnswerSelect = (optionIndex: number) => {
    if (!showExplanation) {
      setSelectedAnswer(optionIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const newResult: QuizResult = {
      questionId: currentQuestion.id,
      userAnswer: selectedAnswer,
      isCorrect,
      timestamp: Date.now(),
    };

    const newResults = [...results, newResult];
    setResults(newResults);
    setShowExplanation(true);

    // Save progress to localStorage
    localStorage.setItem(
      `quiz_${userId}_${params.category}`,
      JSON.stringify({
        results: newResults,
        currentIndex: currentQuestionIndex + 1,
      })
    );
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < categoryQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRetry = () => {
    localStorage.removeItem(`quiz_${userId}_${params.category}`);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setResults([]);
    setQuizComplete(false);
  };

  const correctCount = results.filter(r => r.isCorrect).length;
  const percentage = Math.round((correctCount / categoryQuestions.length) * 100);

  if (quizComplete) {
    return (
      <div className={styles.container}>
        <div className={styles.results}>
          <div className={styles.resultsCard}>
            <h1>Quiz abgeschlossen! 🎉</h1>
            <div className={styles.scoreBox}>
              <div className={styles.score}>{percentage}%</div>
              <p className={styles.scoreLabel}>
                {correctCount} von {categoryQuestions.length} richtig
              </p>
            </div>

            <div className={styles.resultDetails}>
              <h3>Ergebnisse nach Schwierigkeit</h3>
              <ul>
                {['easy', 'medium', 'hard'].map((difficulty) => {
                  const categoryQs = categoryQuestions.filter(q => q.difficulty === difficulty as any);
                  const categoryCorrect = results
                    .filter(r => {
                      const q = categoryQuestions.find(cq => cq.id === r.questionId);
                      return q?.difficulty === difficulty && r.isCorrect;
                    })
                    .length;
                  
                  if (categoryQs.length === 0) return null;
                  
                  return (
                    <li key={difficulty}>
                      <span className={styles.difficultyLabel}>
                        {difficulty === 'easy' ? '🟢 Einfach' : difficulty === 'medium' ? '🟡 Mittel' : '🔴 Schwer'}
                      </span>
                      <span>{categoryCorrect}/{categoryQs.length}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.feedback}>
              {percentage >= 80 ? (
                <p className={styles.excellent}>Ausgezeichnet! 🌟</p>
              ) : percentage >= 60 ? (
                <p className={styles.good}>Gute Leistung! 👍</p>
              ) : (
                <p className={styles.needsWork}>Weitere Übung ist empfohlen 💪</p>
              )}
            </div>

            <div className={styles.actionButtons}>
              <button onClick={handleRetry} className={styles.primaryBtn}>
                Quiz wiederholen
              </button>
              <button onClick={() => router.push('/')} className={styles.secondaryBtn}>
                Zurück zur Startseite
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => router.push('/')} className={styles.backBtn}>
          ← Zurück
        </button>
        <h1>Quiz: {params.category.toUpperCase()}</h1>
        <div className={styles.progress}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${((currentQuestionIndex) / categoryQuestions.length) * 100}%` }}
            ></div>
          </div>
          <span>{currentQuestionIndex + 1} / {categoryQuestions.length}</span>
        </div>
      </div>

      <div className={styles.quizContent}>
        <div className={styles.questionCard}>
          <div className={styles.questionHeader}>
            <span className={styles.difficulty}>
              {currentQuestion.difficulty === 'easy' ? '🟢' : currentQuestion.difficulty === 'medium' ? '🟡' : '🔴'}
            </span>
            <h2>{currentQuestion.question}</h2>
          </div>

          <div className={styles.options}>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`${styles.option} ${selectedAnswer === index ? styles.selected : ''} ${
                  showExplanation
                    ? index === currentQuestion.correctAnswer
                      ? styles.correct
                      : index === selectedAnswer
                      ? styles.incorrect
                      : ''
                    : ''
                }`}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
              >
                <span className={styles.optionLetter}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className={styles.optionText}>{option}</span>
                {showExplanation && index === currentQuestion.correctAnswer && (
                  <span className={styles.checkmark}>✓</span>
                )}
                {showExplanation && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                  <span className={styles.cross}>✗</span>
                )}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className={`${styles.explanation} ${selectedAnswer === currentQuestion.correctAnswer ? styles.correct : styles.incorrect}`}>
              <h3>{selectedAnswer === currentQuestion.correctAnswer ? '✓ Richtig!' : '✗ Leider falsch'}</h3>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}

          <div className={styles.actions}>
            {!showExplanation ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className={styles.primaryBtn}
              >
                Antwort überprüfen
              </button>
            ) : (
              <button onClick={handleNext} className={styles.primaryBtn}>
                {currentQuestionIndex + 1 === categoryQuestions.length ? 'Zum Ergebnis' : 'Nächste Frage'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
