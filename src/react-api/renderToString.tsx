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
