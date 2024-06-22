import { create } from "zustand";

interface ListState {
    items: string[];
    addItem: (item: string) => void;
    removeItem: (index: number) => void;
}

export const useListStore = create<ListState>((set) => ({
  items: ['Hello', 'World'],
  addItem: (newItem) => set(({ items }) => ({ items: [...items, newItem] })),
  removeItem: (index) =>
    set(({ items }) => ({ items: items.filter((_, i) => i !== index) })),
}));

export default useListStore;
