import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { puzzleService } from '../../services/puzzleService';
import type { Puzzle, PuzzleSubmission } from '../../types';

interface PuzzleState {
  currentPuzzle: Puzzle | null;
  loading: boolean;
  error: string | null;
  submissionStatus: 'idle' | 'loading' | 'success' | 'error';
  lastSubmissionResult: { success: boolean; score: number } | null;
}

const initialState: PuzzleState = {
  currentPuzzle: null,
  loading: false,
  error: null,
  submissionStatus: 'idle',
  lastSubmissionResult: null,
};

export const fetchDailyPuzzle = createAsyncThunk(
  'puzzle/fetchDaily',
  async () => {
    return await puzzleService.getDailyPuzzle();
  }
);

export const submitPuzzleSolution = createAsyncThunk(
  'puzzle/submitSolution',
  async (submission: PuzzleSubmission) => {
    return await puzzleService.submitSolution(submission);
  }
);

const puzzleSlice = createSlice({
  name: 'puzzle',
  initialState,
  reducers: {
    resetSubmissionStatus: (state) => {
      state.submissionStatus = 'idle';
      state.lastSubmissionResult = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDailyPuzzle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDailyPuzzle.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPuzzle = action.payload;
      })
      .addCase(fetchDailyPuzzle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch puzzle';
      })
      .addCase(submitPuzzleSolution.pending, (state) => {
        state.submissionStatus = 'loading';
      })
      .addCase(submitPuzzleSolution.fulfilled, (state, action) => {
        state.submissionStatus = 'success';
        state.lastSubmissionResult = action.payload;
      })
      .addCase(submitPuzzleSolution.rejected, (state) => {
        state.submissionStatus = 'error';
      });
  },
});

export const { resetSubmissionStatus } = puzzleSlice.actions;
export default puzzleSlice.reducer;
