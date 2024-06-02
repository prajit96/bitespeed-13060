import create from 'zustand';

const useStore = create((set) => ({
  elements: [],
  addElement: (newElement) => set((state) => ({ elements: [...state.elements, newElement] })),
}));


export default useStore;
