/* eslint-disable react/jsx-props-no-spreading */
import { Input } from '../index';
import { DivList, ListContent } from './styles';
import { IPropsInput } from '../Input';

interface IProps extends IPropsInput {
  lista: { id: number; descricao: string }[];
  onClickList: (item: any) => void;
  valueInput: string;
  currentValue: string;
}

const InputSearch: React.FC<IProps> = ({
  lista,
  onClickList,
  valueInput,
  currentValue,
  ...rest
}: IProps) => {
  const widthInput = document.getElementById('input')?.offsetWidth;

  return (
    <>
      <Input
        id="input"
        value={valueInput}
        // icon={
        //   <Icon>
        //     <IconReturn />
        //   </Icon>
        // }
        {...rest}
      >
        {valueInput.length > 2 && valueInput !== currentValue && (
          <DivList width={widthInput}>
            {lista
              .filter(
                (list: any) =>
                  list.name.toLowerCase().indexOf(valueInput.toLowerCase()) >
                  -1,
              )
              .map((item: any) => (
                <ListContent
                  key={item.id}
                  onClick={() => {
                    onClickList(item);
                  }}
                >
                  {item.name}
                </ListContent>
              ))}
          </DivList>
        )}
      </Input>
    </>
  );
};

export default InputSearch;
