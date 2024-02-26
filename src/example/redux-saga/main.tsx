import "@babel/polyfill";

import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

import Counter from "./Counter";
import counter from "./reducers";

const store = createStore(counter);

const action = (type: any) => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action("INCREMENT")}
      onDecrement={() => action("DECREMENT")}
    />,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
