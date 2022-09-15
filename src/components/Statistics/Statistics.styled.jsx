import styled from '@emotion/styled';

export const StatisticsTotal = styled.h3`
  margin-bottom: 10px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 40px;
  font-weight: 900;
  text-transform: uppercase;
  border-radius: 6px;
  border: 1px solid black;
  padding-bottom: 5px;
  padding-top: 5px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
