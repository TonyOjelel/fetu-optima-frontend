import api from './api';
import { Puzzle, PuzzleSubmission, LeaderboardEntry } from '../types';

export const puzzleService = {
  // Get daily puzzle
  getDailyPuzzle: async (): Promise<Puzzle> => {
    const response = await api.get('/puzzles/daily');
    return response.data;
  },

  // Submit puzzle solution
  submitSolution: async (submission: PuzzleSubmission): Promise<{ success: boolean; score: number }> => {
    const response = await api.post('/puzzles/submit', submission);
    return response.data;
  },

  // Get global leaderboard
  getLeaderboard: async (params: { timeframe: 'daily' | 'weekly' | 'allTime'; page: number; limit: number }): Promise<{
    entries: LeaderboardEntry[];
    total: number;
  }> => {
    const response = await api.get('/leaderboard', { params });
    return response.data;
  },

  // Get user stats
  getUserStats: async (userId: string) => {
    const response = await api.get(`/users/${userId}/stats`);
    return response.data;
  },
};
