import styled from 'styled-components';

export const DeletDiv = styled('div')<{ success: boolean }>`
  display: flex;
  flex-direction: column;

  color: #df0a24;
  ${props => props.success && `color: #75B843 !important`}
`;

export const Content = styled.div`
  margin-top: 3%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1vh;

  svg {
    margin-bottom: 10px;
  }

  b {
    font-size: 20px;
    line-height: 22px;
    text-align: center;
  }

  p {
    font-size: 14px;
    width: 100%;
    word-wrap: break-word;
    text-align: center;
  }
`;

export const TitleModal = styled.div`
  b {
    font-size: 20px;
  }
  svg {
    color: #488cfa;
  }
  display: flex;
  justify-content: right;
  margin-bottom: -20px;
`;
