import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Button = ({ text, onClick }: { text: string; onClick: VoidFunction }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const _buildTitle = (text: String) => {
  return <h1 className="text-3xl font-bold mb-4">{text}</h1>;
};

const _buildButton = (onClick: VoidFunction) => {
  return (
    <button onClick={onClick} className="absolute top-20 right-20">
      <FaTimes style={{ width: "50px", height: "50px" }} />
    </button>
  );
};

function App() {
  const [home, setHome] = useState<boolean>(true);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const parentButtonClick = () => setHome(!home);

  const showDetailClick = () => {};

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-100">
      {home ? (
        <>
          {_buildTitle("Come on!")}
          <div className="flex flex-col justify-center space-y-4">
            <Button text="react-api" onClick={parentButtonClick} />
            <Button text="example" onClick={showDetailClick} />
            <Button text="example2" onClick={showDetailClick} />
          </div>
        </>
      ) : (
        <>
          {_buildButton(parentButtonClick)}
          {_buildTitle("What would you like to learn?")}
          <div className="flex flex-col justify-center space-y-4">
            <Button text="renderToString" onClick={() => {}} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
