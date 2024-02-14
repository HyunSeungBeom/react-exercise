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

const result = ReactDomServer.renderToStaticMarkup(
  React.createElement("div", { id: "root" }, <SampleComponent />)
);

/*
- renderToStaticMarkup은 renderToString과 매우 유사한 함수
- 두 함수 모드 리액트 컴포넌트를 기준으로 HTML 문자열을 만든다는 점
- 한 가지 유의미한 차이점은 앞서 루트 요소에 추가한 data-reactroot와 같은 리엑트에서만 사용하는 추가적인 DOM 속성을 만들지 않는다는 점(HTML의 크기를 아주 약간이라도 줄일 수 있는 장점)
- 이 함수를 실행한 결과를 렌더링을 수행하면 클라이언트에서는 리엑트에서 제공하는 useEffect와 같은 브라우저 API를 절대 실행할수 없다.
    => 그 이유는 renderToStaticMarkup의 결과물은 hydrate를 수행하지 않고 순수한 HTML만 반환
*/
