/* eslint-disable dot-notation */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import { Button, Input, Select } from '../../components';
import userService from '../../services/userService';
import InputSearch from '../../components/InputSearch';
import { Menu } from '../Login/styles';

const Pontos: React.FC = () => {
  const [dataUsers, setDataUsers] = useState<any>([]);
  const [userInput, setUserInput] = useState('');
  const [userId, setUserId] = useState('');
  const [currenUserInput, setCurrenUserInput] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const getProducts = async () => {
    try {
      const response = await userService.getAllUsers();
      setDataUsers(response);
    } catch {
      alert('recarregue a pagina');
    }
  };

  const balance = async () => {
    try {
      await userService.addBalanceInUser({
        userId,
        description,
        value: parseInt(value, 10),
      });
      setDescription('');
      setValue('0');
      alert('Deu Bom!!');
    } catch {
      alert('deu ruim, chama Junior');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Menu>
        <Link to="/home">Vendas</Link>
      </Menu>
      <Container>
        <Content>
          <InputSearch
            label="Aluno"
            lista={dataUsers}
            valueInput={userInput}
            value={userInput}
            currentValue={currenUserInput}
            onChange={e => setUserInput(e.target.value)}
            onClickList={e => {
              setCurrenUserInput(e.name);
              setUserInput(e.name);
              setUserId(e['_id']);
            }}
          />
          <Select
            lista={[
              { name: 'Presença', id: 1 },
              { name: 'Participação', id: 2 },
              { name: 'Resumo da lição', id: 3 },
            ]}
            currentValue={description}
            erro=""
            label=""
            onClickList={e => {
              setDescription(e.name);
            }}
          />
          <Input
            placeholder="quantidade de eDracmas"
            label="eDracmas"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Button type="submit" onClick={balance}>
            Aplicar
          </Button>
        </Content>
      </Container>
    </>
  );
};

export default Pontos;
