// import { IconAlert, IconClose, IconSuccess } from '~/assets/Icons';
import { Modal, Button } from '../index';
import { DeletDiv, Content, TitleModal } from './styles';

interface IProps {
  children: any;
  onClick: () => void;
  success: boolean;
}

const ModalDefalut: React.FC<IProps> = ({
  children,
  onClick,
  success,
}: IProps) => {
  return (
    <Modal>
      <DeletDiv success={success}>
        <TitleModal>
          <button type="button" onClick={onClick}>
            {/* <IconClose /> */}
          </button>
        </TitleModal>
        <Content>
          {/* {success ? <IconSuccess /> : <IconAlert />} */}
          <b>{success ? 'Sucesso!' : 'Erro'}</b>
          <p>{children}</p>
          <Button onClick={onClick}>Entendi!</Button>
        </Content>
      </DeletDiv>
    </Modal>
  );
};

export default ModalDefalut;
