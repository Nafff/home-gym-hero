import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function Exercises(props) {
  const [availableExercises, setAvailableExercises] = useState([]);

  const availEx = props.exercises.filter(exercise => props.equipment.includes(exercise.fields.equipment))


  return (
    <>
      <h1>Hello here are exercises</h1>
      {availEx.map((exercise) => (
        <>
        {console.log(exercise)}
          <p>{exercise.fields.exercise}</p>
        </>
      ))
      }
    </>
  );
}

export default Exercises;
