import React from "react";

function FinalResults({
  aciertos,
  currentquestion,
  data,
  logselected,
  setStart,
  setCurrentQuestion,
  setAnswerSelected,
  setAciertos,
  setFinalResult,
  setLogSelected,
}) {
  return (
    <div>
      {" "}
      <div className="text-center mt-10 border-2 border-black px-2 mx-10 rounded py-3">
        <div>
          <h1 className="text-center text-3xl font-bold">You Scored</h1>
          <p
            className={
              aciertos === 5
                ? "text-lg text-yellow-500 uppercase font-bold text-center"
                : aciertos < 5
                ? "text-lg text-red-500 uppercase font-bold text-center"
                : "text-lg text-green-500 uppercase font-bold text-center"
            }
          >
            {aciertos}/{currentquestion + 1}
          </p>
        </div>
        <h2 className="text-xl font-bold">Questions</h2>
        <div className="flex justify-center">
          <ul className="text-left">
            {data.map((question, index) => (
              <li key={index}>
                <span className="text-black font-bold">
                  {index + 1} {"- "}
                </span>
                {question.question}
                {logselected[index] === question.correct_answer ? (
                  <span className="text-green-500 font-bold">
                    {" "}
                    - Your Answer is Correct!
                  </span>
                ) : (
                  <span className="text-red-500 font-bold">
                    {" "}
                    - Your Answer is Incorrect!
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <button
            onClick={() => {
              setStart(false);
              setCurrentQuestion(0);
              setAnswerSelected("");
              setAciertos(0);
              setFinalResult(false);
              setLogSelected([]);
            }}
            className="bg-slate-500 hover:bg-slate-600 text-white font-bold px-4 py-2 ml-2 rounded"
          >
            Try Again?
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinalResults;
