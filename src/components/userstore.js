import {create} from 'zustand';

const useNameInputStore = create((set) => ({
  name: '',
  setName: (newName) => set({ name: newName }),
}));
export default useNameInputStore;
