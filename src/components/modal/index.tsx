import RModal from 'react-modal';
import { FC, PropsWithChildren, useEffect } from 'react';
import disableScroll from '../../scripts/disable.scroll';
import CloseBtnIcon from '../icons/close.btn';
import "./modal.scss";

RModal.setAppElement('body');

interface ModalProps extends PropsWithChildren {

  isOpen: boolean;
  onClose: () => void;

};

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {

  useEffect(() => {

    if ( isOpen ) {

      disableScroll.on();

    } else {

      disableScroll.off();
    
    }

    return () => {
      
      disableScroll.off();
      
    }

  }, [ isOpen ]);

  return (

    <RModal

      isOpen = { isOpen }
      onRequestClose = { onClose }

      style = {{
        overlay: {
          zIndex: '100',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '100',
          background: 'none',
          border: 'none',
          width: 'auto',
        },
      }}

    >

      <div className = "modal__container">

        <button className = "modal__close" onClick = { onClose }>

          <CloseBtnIcon />

        </button>

        { children }

      </div>

    </RModal>

  )

}

export const ModalTitle: FC<PropsWithChildren> = ({ children }) => {

  return (

    <div className = "modal-title">

      { children }

    </div>

  )

}

export default Modal;

