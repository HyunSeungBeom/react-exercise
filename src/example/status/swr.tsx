import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function App() {
  const { data, error } = useSWR(
    "https://api.githumb.com/repos/vercel/swr",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

/*
useSWR의 첫 번쨰 인수로 조회할 API 주소, 두번째 인수로 조회헤 사용되는 fetch를 넘겨줌
*/

function useCounter(initCount: number = 0) {
  const [counter, setCounter] = useState(initCount);

  function inc() {
    setCounter((prev) => prev + 1);
  }

  return { counter, inc };
}

function Counter1() {
  const { counter, inc } = useCounter();

  return (
    <>
      <h3>Counter 1: {counter}</h3>
      <button onClick={inc}>+</button>
    </>
  );
}
