import { useCallback, useEffect } from 'react';
import { Backdrop, ModalContainer, BtnClose } from './Modal.styled';
import IconCross from 'images/icons/IconCross';

const Modal = ({ children, onClick, $padding }) => {
  const handleKeyDown = useCallback(
    evt => {
      document.body.style.overflow = 'auto';
      if (evt.code === 'Escape') {
        onClick && onClick();
      }
    },
    [onClick]
  );

  document.body.style.overflow = 'hidden';

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClick && onClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer $padding={$padding}>
        {onClick && (
          <BtnClose
            onClick={() => {
              document.body.style.overflow = 'auto';
              onClick();
            }}
          >
            <IconCross />
          </BtnClose>
        )}
        {children}
      </ModalContainer>
    </Backdrop>
  );
};
export default Modal;
