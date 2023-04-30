/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  ButtonSelect,
  Container,
  DivList,
  ErroAlert,
  Icon,
  Label,
  ListContent,
} from './styles';

interface IProps {
  label: string;
  lista: { id: number; name: string }[];
  onClickList: (item: any) => void;
  currentValue: string;
  erro: string;
}

const Select: React.FC<IProps> = ({
  label,
  lista,
  onClickList,
  currentValue,
  erro,
}: IProps) => {
  const [isVisibleData, setIsVisibleData] = useState(false);

  const widthButton = document.getElementById('button')?.offsetWidth;

  return (
    <Container>
      <Label>{label}</Label>
      <ButtonSelect
        id="button"
        currentValue={!currentValue}
        onClick={() => setIsVisibleData(!isVisibleData)}
        erro={!!erro}
      >
        {currentValue}
        <Icon>
          <MdKeyboardArrowDown />
        </Icon>
      </ButtonSelect>
      <ErroAlert erro={!!erro}>{erro}</ErroAlert>
      {isVisibleData && (
        <DivList width={widthButton}>
          {lista.map((item: any) => (
            <ListContent
              key={item.id}
              onClick={() => {
                onClickList(item);
                setIsVisibleData(false);
              }}
            >
              {item.name}
            </ListContent>
          ))}
        </DivList>
      )}
    </Container>
  );
};

export default Select;
