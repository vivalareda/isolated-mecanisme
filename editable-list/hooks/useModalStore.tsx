import { create } from "zustand";

export type ModalType = 'add' | 'edit';

interface ModalState {
    modalType: ModalType;
    isModalOpen: boolean;
    openModal: (modalType: ModalType) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    modalType: 'add',
    isModalOpen: false,
    openModal: (type) => set({ modalType: type, isModalOpen: true }),
    closeModal: () => set({ isModalOpen: false }),
}));

export default useModalStore;
