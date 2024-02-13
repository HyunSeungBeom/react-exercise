import React, { createContext, useState, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { buttonStateContextType } from "./type";

const ButtonStateContext = createContext<buttonStateContextType>({
  buttonState: {
    showHome: true,
    type: "",
  },
  setButtonState: () => {}, // 빈 함수로 초기화
});

const _buildTitle = (text: string) => {
  return <h1 className="text-3xl font-bold mb-4">{text}</h1>;
};

const _buildBackButton = (onClick: VoidFunction) => {
  return (
    <button onClick={onClick} className="absolute top-20 right-20">
      <FaTimes style={{ width: "50px", height: "50px" }} />
    </button>
  );
};

const _buildButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: VoidFunction;
}) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const _buildMain = () => {
  const { buttonState, setButtonState } = useContext(ButtonStateContext);

  const homeButtonClick = (type: string) => {
    setButtonState({ showHome: false, type: type });
  };

  return (
    buttonState.showHome && (
      <>
        {_buildTitle("Learn React")}
        <div className="flex flex-col justify-center space-y-4">
          <_buildButton
            text="react-api"
            onClick={() => homeButtonClick("react-api")}
          />
          <_buildButton
            text="status"
            onClick={() => homeButtonClick("status")}
          />
        </div>
      </>
    )
  );
};

const _homeButtonClick = (type: string) => {
  const { setButtonState } = useContext(ButtonStateContext);

  setButtonState({ showHome: false, type: type });
};

const _buildDetail = ({
  type,
  buttons,
}: {
  type: string;
  buttons: string[];
}) => {
  const { buttonState } = useContext(ButtonStateContext);

  return (
    !buttonState.showHome &&
    buttonState.type == type && (
      <>
        {/* {_buildBackButton(() => setButtonState({ showHome: true, type: "" }))}
         */}
        {_buildTitle(buttonState.type)}
        <div className="flex flex-col justify-center space-y-4">
          {buttons.map((button) => (
            <_buildButton key={button} text={button} onClick={() => {}} />
          ))}
        </div>
      </>
    )
  );
};

function App() {
  const [buttonState, setButtonState] = useState({
    showHome: true,
    type: "",
  });

  return (
    <ButtonStateContext.Provider value={{ buttonState, setButtonState }}>
      <div className="flex flex-col justify-center items-center h-screen bg-blue-100">
        {_buildMain()}
        {_buildDetail({
          type: "react-api",
          buttons: [
            "renderToString",
            "renderToNodeStream",
            "renderToStaticMarkup",
          ],
        })}
        {_buildDetail({
          type: "swr",
          buttons: [
            "fluxPattern",
            "swr",
            "useAppState",
            "useAppStateRestore",
            "useRef",
            "useSubscription",
          ],
        })}
      </div>
    </ButtonStateContext.Provider>
  );
}

export default App;
