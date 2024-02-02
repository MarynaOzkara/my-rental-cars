import styled from 'styled-components';

export const ExercisesListWrap = styled.ul`
  width: 850px;
  height: 487px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ef8964;
    border-radius: 12px;
  }
`;
export const ExerciseItemWrap = styled.li`
  width: 405px;
`;
export const ExerciseItem = styled.div`
  width: 405px;
  height: 141px;
  padding: 16px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
`;
export const ItemTopBloc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Workout = styled.p`
  padding: 5px 7.5px;
  font-size: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
`;

export const StartBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const StartBtn = styled.p`
  font-size: 14px;
  color: #e6533c;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #e6533c;
`;

export const ExerciseTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-top: 33px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-top: 23px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 27px;
  }
`;

export const FigureIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #efede8;
  fill: #efede8;
  background-color: #efa082;
  border-radius: 50%;
  padding: 4px 5px;
`;

export const ExerciseTitle = styled.p`
  font-size: #efede8;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const TargetsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TargetsListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`;

export const TargetsListTitle = styled.p`
  color: rgba(239, 237, 232, 0.4);
  white-space: nowrap;
`;

export const TargetsListText = styled.p`
  color: #efede8;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
