export interface Question {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizResult {
  questionId: string;
  userAnswer: number;
  isCorrect: boolean;
  timestamp: number;
}

export interface UserProgress {
  userId: string;
  totalQuestions: number;
  correctAnswers: number;
  completedQuestions: string[];
  results: QuizResult[];
  createdAt: number;
  updatedAt: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  questionCount: number;
}
