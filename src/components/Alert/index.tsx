import SweetAlert2 from 'react-sweetalert2';

interface props {
  show: boolean;
  title: string;
  text: string;
  onConfirm: () => void;
}
export default function Alert({ show, title, text, onConfirm }: props) {
  return (
    <SweetAlert2 show={show} title={title} text={text} onConfirm={onConfirm} />
  );
}
