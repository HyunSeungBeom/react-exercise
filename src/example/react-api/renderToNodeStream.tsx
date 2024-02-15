import React, { Component } from "react";
import internal from "stream";

export default function RenderToNodeStreamComponent() {
  const todos: TodoResponse[] = [
    { number: 1, name: "할일1" },
    { number: 2, name: "할일2" },
    { number: 3, name: "할일3" },
  ];

  return (
    <>
      <h1>나의 할 일!</h1>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ul>
    </>
  );
}

async () => {
  const response = await fetch("http://localhost:3000");

  if (!response.body) {
    console.error("Response body is null");
    return;
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let result = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      result += decoder.decode(value);
    }
    console.log(result);
  } catch (err: any) {
    console.error(err.stack);
  }
};

interface TodoResponse {
  number: number;
  name: String;
}

interface TodoProps {
  todo: TodoResponse;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  return <li>{}</li>;
};

/*
renderToNodeStream
- 브라우저에서 사용하는 것이 완전히 불가능
- Node.js에 의존
- 반환값은 utf-8 인코딩된 바이트 스크림
- 데이터를 청크로 분할해 조금씩 가져오는 방식을 택할때 사용
*/
