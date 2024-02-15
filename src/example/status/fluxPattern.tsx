import React, { useReducer } from "react";

type StoreState = {
  count: number;
};

type Action = { type: "add"; payload: number };

function reducer(prevState: StoreState, action: Action) {
  const { type: ActionType } = action;
  if (ActionType === "add") {
    return {
      count: prevState.count + action.payload,
    };
  }

  throw new Error(`Unexpected Action [${ActionType}]`);
}

export default function App() {
  const [state, dispatcher] = useReducer(reducer, { count: 0 });

  function handleClick() {
    dispatcher({ type: "add", payload: 1 });
  }

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClick}></button>
    </div>
  );
}

/*
- 액션 : 어떠한 작업을 처리할 액션과 그 액션 발생 시 함꼐 포함시킬 데이터를 의미, 액션 타입과 데이터를 각각 정의해 이를 디스패처로 보낸다.
- 디스패처: 액션을 스토어에 보내는 역할, 콜백 함수 형태로 앞서 액션이 정의한 타입과 데이터를 모두 스토어에 보냄.
- 스토어: 실제 상태에 따른 값과 상태를 변경할 수 있는 메서드를 가지고 있음. 액션의 타입에 따라 어떻게 이를 변경할지가 정의 돼 있음.
- 뷰: 화면을 렌더링하는 역할, 사용자의 입력이나 행위에 따라 상태를 업데이트하고자 할땐 뷰에서 액션을 호출하는 구조로 구성
*/
