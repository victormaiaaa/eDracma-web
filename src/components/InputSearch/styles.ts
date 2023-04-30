import styled from 'styled-components';

export const DivList = styled('div')<{ width: number | undefined }>`
  overflow: auto;
  display: flex;
  flex-direction: column;
  max-height: 350px;
  position: absolute;
  ${props => `max-width: ${props.width}px !important;`}
  background: #ffffff;
  z-index: 900;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.17);
  border-radius: 3px;
  width: 100%;
  /* margin: 0 10px; */

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

export const Icon = styled.span`
  margin-top: 10px;
  svg {
    transform: rotate(-90deg);
  }
`;
