import { Container } from './styles';

interface IProps {
  name: string;
  price: number;
}

const ListProduct: React.FC<IProps> = ({ name, price }: IProps) => {
  return (
    <Container>
      <>
        <b>{name}</b>
        <b>{price}</b>
      </>
    </Container>
  );
};

export default ListProduct;
