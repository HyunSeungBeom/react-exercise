export type State = { counter: number };

// 상태를 아예 컴포너는트 밖으로 선언,
// 각 컴포넌트가 이 상태를 바라보게 됨
let state: State = {
  counter: 0,
};

//getter
export function get(): State {
  return state;
}

// useState와 동일하게 구현하기 위해 게이른 초기화 함수나 값을 받을 수 있게 구현
type Initializer<T> = T extends any ? T | ((prev: T) => T) : never;

//setter
export function set<T>(nextState: Initializer<T>) {
  state = typeof nextState === "function" ? nextState(state) : nextState;
}

function Counter() {
  const state = get();

  function handleClick() {
    set((prev: State) => ({ counter: prev.counter + 1 }));
  }

  return (
    <>
      <h3>{state.counter}</h3>
      <button onClick={handleClick}>+</button>
    </>
  );
}

// 외부에서 이 전역인 state를 쓴다.
// 하지만 리렌더가 안되는 문제가 생기므로 다음과 같은 코드(다시 set을 시킨다)

import { useState } from "react";

function Counter1() {
  const [count, setCount] = useState(state);

  function handleClick() {
    set((prev: State) => {
      const newState = { counter: prev.counter + 1 };
      setCount(newState);
      return newState;
    });
  }
}
