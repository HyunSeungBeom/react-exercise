import React from "react";
import ReactDomServer from "react-dom/server";
import { useEffect } from "react";

function ChildrenComponent({ fruits }: { fruits: Array<string> }) {
  useEffect(() => {
    console.log(fruits);
  }, [fruits]);

  function handleClick() {
    console.log("hello");
  }

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit} onClick={handleClick}>
          {fruit}
        </li>
      ))}
    </ul>
  );
}

function SampleComponent() {
  return (
    <>
      <div>hello</div>
      <ChildrenComponent fruits={["apple", "banana", "peach"]} />
    </>
  );
}

const result = ReactDomServer.renderToString(
  React.createElement("div", { id: "root" }, <SampleComponent />)
);

// result
/* 
<div id="root" data-reactroot="">
  <div> hello</div>
  <ul>
    <li>apple</li>
    <li>banana</li>
    <li>peach</li>
  </ul>
</div>;
 */

//개념
/*
최초의 페이지를 HTML로 먼저 렌더링하는 함수가 renderToString이다.
ChildrenComponent에 있는 useEffect와 같은 훅과 handleClick과 같은 이벤트 핸들러는 결과물에 포함되지 않았다.
renderToString은 인수로 주어진 리액트 컴포넌트를 기준으로 빠르게 브라우저가 렌더링할 수 있는 HTML을 제공하는 데 목적



*/
