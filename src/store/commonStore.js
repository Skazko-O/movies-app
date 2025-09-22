import { create } from 'zustand';

export const useCommonStore = create((set) => ({
  colorTheme: 'light',
  setColorTheme: (theme) => set({ colorTheme: theme }),
}));
