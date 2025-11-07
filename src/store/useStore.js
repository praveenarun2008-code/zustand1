import { create } from 'zustand'

export const useStore = create((set) => ({
  username: '',
  setUsername: (name) => set({ username: name }),
}))