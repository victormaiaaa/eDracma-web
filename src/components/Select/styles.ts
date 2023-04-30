import styled from 'styled-components';

export const Label = styled.b`
  color: #000000;
  margin: 6px 0;
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const ButtonSelect = styled('button')<{
  currentValue: boolean;
  erro: boolean;
}>`
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 5px;
  height: 45px;
  width: 100%;

  display: flex;
  ${props => props.currentValue && `justify-content: end;`}
  ${props =>
    !props.currentValue && `justify-content: space-between !important;`}
  ${props => props.erro && 'border: 1px solid #DF0A24;'}
  align-items: center;
  padding-left: 10px;

  font-size: 12px;
  color: #323232;
`;

export const DivList = styled('div')<{ width: number | undefined }>`
  /* margin-top: 45px !important; */
  overflow: auto;
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: scroll;
  max-height: 200px;
  ${props => `width: ${props.width}px;`}
  background: #ffffff;
  z-index: 900;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.17);
  border-radius: 3px;

  a + a {
    border-top: 1px solid #30b4e5;
  }
`;

export const ListContent = styled.a`
  display: flex;
  padding: 10px;
  color: #323232;
  font-size: 12px;
  font-weight: 300;
  text-transform: capitalize;
  cursor: pointer;
`;

export const Icon = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  max-width: 10%;
  svg {
    transform: rotate(-90deg);
  }
`;

export const ButtonContainer = styled('div')<{ button: boolean }>`
  ${props =>
    props.button &&
    `
  display: flex;


  div {
    width: 90%;
  }
  `}
`;

export const ButtonAdd = styled('button')<{ button: boolean }>`
  ${props => !props.button && `display: none;`}

  margin: 10px 0 0 5px;
`;

export const ErroAlert = styled('p')<{ erro: boolean }>`
  margin-top: 4px;
  color: #df0a24;
  font-size: 10px;
  min-height: 16px;

  ${props => !props.erro && `display: none`}
`;
