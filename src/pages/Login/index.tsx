/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { BsEyeSlashFill } from 'react-icons/bs';
import { IoEyeSharp } from 'react-icons/io5';
import { Link, useHistory } from 'react-router-dom';
import { Container, Content, Menu } from './styles';
import { Button, Input } from '../../components';
import { usePageContext } from '../../hooks';
import authService from '../../services/authService';
import api from '../../services/api';

const Login: React.FC = () => {
  const history = useHistory();
  const [, setFail] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);
  const { isLogged, setIsLogged } = usePageContext();
  useEffect(() => {
    if (isLogged) {
      history.push('/home');
    }
  }, [isLogged]);

  const auth = async () => {
    try {
      const response = await authService.login({ user, password });
      api.defaults.headers.common.Authorization = `Bearer ${response.token}`;
      setIsLogged(true);
    } catch {
      setFail(true);
    }
  };

  return (
    <Container
      onKeyUp={(e: any) => {
        if (e.key === 'Enter') auth();
      }}
    >
      <Content>
        <Input
          placeholder="Usuário"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type={!visiblePassword ? 'password' : 'text'}
          value={password}
          icon={
            !visiblePassword ? (
              <BsEyeSlashFill color="#619CFA" />
            ) : (
              <IoEyeSharp color="#619CFA" />
            )
          }
          onClick={() => setVisiblePassword(!visiblePassword)}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <Button type="submit" onClick={auth}>
          Entrar
        </Button>
      </Content>
    </Container>
  );
};

export default Login;
