import styled from 'styled-components';

export const Container = styled('button')<{
  responsiveness: boolean | undefined;
  styles?: 1 | null;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: fit-content;

  max-height: 45px;
  padding: 3vh;

  background: linear-gradient(
    144deg,
    rgba(72, 140, 250, 1) 0%,
    rgba(105, 100, 244, 1) 100%
  );
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  color: #fff;
  font-weight: 700;
  white-space: nowrap;
  svg {
    width: auto;
    height: 30px;
    margin-right: 5%;
  }

  :disabled {
    background: #dcf2fb;
    color: rgba(0, 0, 0, 0.5);
    cursor: not-allowed;
  }

  /* ${props =>
    props.responsiveness &&
    `@media (max-width: 570px) {
      position: fixed;
      justify-content: center;
      left: 0px;
      bottom: 50px;
      width: 90% !important;
      text-align: center;
      margin: 3% 5%;
      z-index: 997;} `} */

  ${props =>
    props.styles === 1 &&
    `border: 2px solid #488cfa;
     background: #fff;
     color: #488cfa;`}
`;
