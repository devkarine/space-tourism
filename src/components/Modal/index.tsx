import { useState } from 'react';
import Modal from 'react-modal';
import { IoCloseSharp, IoMenuSharp } from 'react-icons/io5';
import * as S from './styled';
import { modalStyles } from '../const/customStylesModal';

Modal.setAppElement('#root');

interface ModalContentProps {
  children: React.ReactNode;
}

export const ModalContent = ({ children }: ModalContentProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <S.OpenModal onClick={openModal}>
        <IoMenuSharp />
      </S.OpenModal>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal"
      >
        <S.CloseModal>
          <button onClick={closeModal}>
            <IoCloseSharp />
          </button>
        </S.CloseModal>

        <S.WrapperModal>{children}</S.WrapperModal>
      </Modal>
    </div>
  );
};
