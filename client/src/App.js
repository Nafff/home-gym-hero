import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import Sidebar from "./components/Sidebar";
import Exercises from "./components/Exercises";
import Form from "./components/Form";
import ExerciseInfo from "./components/ExerciseInfo";
import Equipment from "./components/Equipment";
import Header from "./components/Header";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// test
{
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  />;
}
{
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />;
}
// test end

function App() {
  const [equipment, setEquipment] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    const getExercises = async () => {
      const resp = await axios.get(baseURL, config);
      setExercises(resp.data.records);
    };
    getExercises();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Header
        equipment={equipment}
        exercises={exercises}
        setEquipment={setEquipment}
        workout={workout}
        setWorkout={setWorkout}
        setToggleFetch={setToggleFetch}
      />
      <CssBaseline />
      <Container maxWidth="sm">
        <main>
          <Route path="/" exact>
            <Equipment equipment={equipment} setEquipment={setEquipment} />
          </Route>
          <Route path="/exercises/">
            <Exercises
              equipment={equipment}
              exercises={exercises}
              workout={workout}
              setWorkout={setWorkout}
              setToggleFetch={setToggleFetch}
            />
          </Route>
          <Route path="/exerciseinfo/:id">
            <ExerciseInfo
              exercises={exercises}
              workout={workout}
              setWorkout={setWorkout}
              setToggleFetch={setToggleFetch}
            />
          </Route>
          <Route path="/new/">
            <Form setToggleFetch={setToggleFetch} />
          </Route>
          <Route path="/edit/:id">
            <Form exercises={exercises} setToggleFetch={setToggleFetch} />
          </Route>
        </main>
      </Container>
    </div>
  );
}

export default App;
