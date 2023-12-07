import React from "react";

function Questionary({
  data,
  currentquestion,
  answerselected,
  handleSelected,
  handleNext,
}) {
  return (
    <div>
      <div>
        <div className="flex justify-between mt-4">
          <h1 className="w-1/2 text-center text-lg font-semibold">
            {" "}
            Difficulty{" "}
            <p className="text-red-500">{data[currentquestion].difficulty}</p>
          </h1>
          <h1 className="w-1/2 text-center text-lg font-semibold">
            {" "}
            Category <p>{data[currentquestion].category}</p>
          </h1>
        </div>
        <h1 className="text-center mt-10 text-3xl font-bold">
          Question # {currentquestion + 1}
        </h1>
        <h1 className="text-center mt-10 text-2xl font-semibold">
          {data[currentquestion].question} ?
        </h1>
        {!answerselected && (
          <div className="text-center mt-5">
            <button
              onClick={() => {
                handleSelected("True");
              }}
              className="bg-blue-500 text-blakc font-bold px-4 py-2 mr-2 rounded hover:bg-blue-600"
            >
              True
            </button>
            <button
              onClick={() => {
                handleSelected("False");
              }}
              className="bg-red-500 text-black font-bold px-4 py-2 ml-2 rounded hover:bg-red-600"
            >
              False
            </button>
          </div>
        )}
        {answerselected && data.length > currentquestion + 1 && (
          <div className="text-center mt-5">
            <button
              onClick={() => {
                handleNext();
              }}
              className="bg-orange-500 text-black font-bold px-4 py-2 ml-2 rounded"
            >
              Next Question
            </button>
          </div>
        )}
        <h1 className="text-center mt-10 text-orange-500 text-lg font-bold uppercase">
          Question {currentquestion + 1} of {data.length}
        </h1>
      </div>
    </div>
  );
}

export default Questionary;
