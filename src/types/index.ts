export interface Puzzle {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  timeLimit: number;
  createdAt: string;
}

export interface PuzzleSubmission {
  puzzleId: string;
  solution: string;
  timeSpent: number;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  score: number;
  rank: number;
  solved: number;
  streak: number;
}

export interface UserStats {
  totalSolved: number;
  currentStreak: number;
  longestStreak: number;
  totalPoints: number;
  rank: number;
  level: number;
  xpToNextLevel: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}
