import ModalComponent from 'react-modal';
import theme from '../../config/theme';
import Textbox from '../Textbox';
import ChildrenProps from '../../@core/domain/ui/ChildrenProp';
import { Dispatch, SetStateAction } from 'react';
import { ModalCloseButton, ModalHeader, ModalTitle } from './style';
import GridRow from '../GridRow';

ModalComponent.setAppElement('#root');

interface ModalProps extends ChildrenProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  title: string;
}
export default function Modal({
  visible,
  setVisible,
  children,
  title,
}: ModalProps) {
  return (
    <ModalComponent
      isOpen={visible}
      style={{
        content: {
          width: '35%',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: theme.color.modalBody,
          borderRadius: 15,
        },
        overlay: {
          backgroundColor: 'rgb(14 14 14 / 75%)',
        },
      }}
    >
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <ModalCloseButton onClick={() => setVisible(false)}>X</ModalCloseButton>
      </ModalHeader>
    </ModalComponent>
  );
}
