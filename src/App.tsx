import React, { useState } from "react";

function App() {
  const [showChildren, setShowChildren] = useState<boolean>(false);

  const parentButtonClick = () => {
    setShowChildren(!showChildren);
    if (showChildren) {
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-100">
      <h1 className="text-3xl font-bold mb-4">React Exercise!</h1>
      <div className="flex flex-col justify-center space-y-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
          onClick={parentButtonClick}
        >
          react-api
        </button>
        {showChildren && (
          <div className="flex-row space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
              renderToString
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
              renderToStaticMarkup
            </button>
          </div>
        )}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
          example
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
          example
        </button>
      </div>
    </div>
  );
}

export default App;
