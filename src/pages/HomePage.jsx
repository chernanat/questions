import React, { useEffect, useState } from "react";
import axios from "axios";
import FinalResults from "../components/Questions/FinalResults";
import Start from "../components/Questions/Start";
import Questionary from "../components/Questions/Questionary";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(false);
  const [currentquestion, setCurrentQuestion] = useState(0);
  const [answerselected, setAnswerSelected] = useState("");
  const [aciertos, setAciertos] = useState(0);
  const [finalresult, setFinalResult] = useState(false);
  const [logselected, setLogSelected] = useState([]);

  const handleStart = () => {
    setStart(true);
    console.log("empezando desafio");
  };

  const handleNext = () => {
    console.log("siguiente");
    setAnswerSelected("");
    setCurrentQuestion(currentquestion + 1);
  };

  const handleSelected = (selected) => {
    setAnswerSelected(selected);
    setLogSelected((prevLog) => [...prevLog, selected]);
    if (selected === data[currentquestion].correct_answer) {
      setAciertos(aciertos + 1);
    }
  };

  const handleFinalResults = () => {
    setFinalResult(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
        );
        setData(response.data.results);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {!start && (
        <Start
          setStart={setStart}
          data={data}
          handleStart={handleStart}
        ></Start>
      )}
      {start && (
        <Questionary
          data={data}
          currentquestion={currentquestion}
          answerselected={answerselected}
          handleSelected={handleSelected}
          handleNext={handleNext}
        ></Questionary>
      )}
      {start && currentquestion + 1 === data.length && !finalresult && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => {
              handleFinalResults();
            }}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-4 py-2 ml-2 rounded"
          >
            See Final Results
          </button>
        </div>
      )}
      {finalresult && (
        <FinalResults
          aciertos={aciertos}
          currentquestion={currentquestion}
          data={data}
          logselected={logselected}
          setStart={setStart}
          setCurrentQuestion={setCurrentQuestion}
          setAnswerSelected={setAnswerSelected}
          setAciertos={setAciertos}
          setFinalResult={setFinalResult}
          setLogSelected={setLogSelected}
        ></FinalResults>
      )}
    </div>
  );
};

export default HomePage;
