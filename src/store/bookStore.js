import { create } from 'zustand';

export const useBookStore = create((set) => ({
	value: 'anime',
	updateValue: (newValue) => set({ value: newValue }),
}));
