import styled from '@emotion/styled';

export const FeedbackOptionsBox = styled.ul`
  display: flex;
  justify-content: center;
`;

export const FeedbackOptionsItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const FeedbackOptionsBtn = styled.button`
  display: block;
  width: 100px;
  height: 40px;
  font-weight: 900;
  text-transform: uppercase;
  border-radius: 6px;
  background-color: #d7ba98;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.03),
    1px 4px 6px rgba(0, 0, 0, 0.08);
  transition: scale 250ms linear, background-color 250ms linear;

  :hover,
  :focus {
    background-color: #c3743f;
    scale: 1.2;
  }
`;
