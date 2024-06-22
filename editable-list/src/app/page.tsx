"use client"

import Image from "next/image";
import useListStore from "../../hooks/useListStore";
import useModalStore from "../../hooks/useModalStore";
import AddCourseModal from "@/components/modals/AddCourseModal";
import { useEffect } from "react";

export default function Home() {

  const { items, addItem } = useListStore();
  const { isModalOpen, openModal, closeModal, modalType } = useModalStore();

  useEffect(() => {
    if (isModalOpen) {
      console.log('Modal is now open');
    }
  }, [isModalOpen]);

  useEffect(() => {
    console.log(items)
  }, [items]);

  return (
    <main className="w-screen items-center flex flex-col gap-24 justify-center pt-48">
      {useListStore.getState().items.length === 0 ? (
        <p>Empty list</p>
      ) : (
          <div className="flex flex-1 flex-col items-center justify-center">
            {items.map((item: string, index: number) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
            <div className="flex gap-5">
              <button onClick={() => openModal('add')}>Add item</button>
              <button>Edit item</button>
            </div>
          </div>
      )}
      {isModalOpen && modalType === 'add' && (
        <AddCourseModal
          isModalOpen={isModalOpen}
          onClose={closeModal}
          onAddItem={addItem}
        />
      )}
    </main>
  );
}
