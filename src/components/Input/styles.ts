import styled from 'styled-components';

export const InputStyle = styled('input')<{
  state: boolean;
  error: string | null | undefined;
}>`
  border-radius: 5px;

  height: 45px;
  width: 100%;
  padding: 15px;

  color: rgba(0, 0, 0, 0.5);

  /* :disabled {
    background: #30b4e52b;
  } */

  ${props =>
    props.state &&
    ' border-radius: 5px 0 0 5px; border-right: 0 !important; margin-right:0 !important;'}
  ${props => props.error && 'border: 1px solid #DF0A24;'}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 6px 0;
  font-weight: 300;
`;

export const Icone = styled('button')<{
  error: string | null | undefined;
}>`
  display: flex;
  align-items: center;

  border-radius: 0 5px 5px 0;
  border-left: 0 !important;
  ${props => props.error && 'border: 1px solid #DF0A24;'}

  height: 45px;
  padding: 15px;

  font-size: 25px;
`;

export const ErroAlert = styled('p')<{ erro: boolean }>`
  margin-top: 4px;
  color: #df0a24;
  font-size: 10px;
  min-height: 16px;

  ${props => !props.erro && `display: none`}
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100% !important;
`;
