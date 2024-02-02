import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getExercises } from '../../redux/exercises-api';
import {
  selectExercises,
  selectLimitExercises,
  selectPageExercises,
  selectTotalExercises,
} from '../../redux/selectors';
import ExercisesListItem from './ExercisesListItem';
import { ExercisesListWrap } from './ExercisesList.styled';

import { setPage } from '../../redux/exercises/exercisesSlice';

const ExercisesList = () => {
  const { category, subCategory } = useParams();
  const dispatch = useDispatch();
  const exercises = useSelector(selectExercises);
  const page = useSelector(selectPageExercises);
  const total = useSelector(selectTotalExercises);
  const limit = useSelector(selectLimitExercises);
  const totalPages = Math.ceil(total / limit);
  console.log(totalPages);
  console.log(page);

  useEffect(() => {
    dispatch(
      getExercises({ category: category, subCategory: subCategory, page: page })
    );
  }, [dispatch, category, subCategory, page]);

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <>
      <ExercisesListWrap>
        {exercises.map(
          ({
            _id,
            name,
            bodyPart,
            equipment,
            target,
            gifUrl,
            burnedCalories,
            time,
          }) => (
            <ExercisesListItem
              key={_id}
              name={name}
              gifUrl={gifUrl}
              bodyPart={bodyPart}
              equipment={equipment}
              target={target}
              burnedCalories={burnedCalories}
              time={time}
            />
          )
        )}
        <button onClick={handleNextPage}>Load more</button>
      </ExercisesListWrap>
    </>
  );
};

export default ExercisesList;
