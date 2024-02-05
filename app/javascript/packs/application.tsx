import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const App = () => (
  <div id="app" className="rounded border border-solid bg-green-100 border-blue">
    <h1 className="text-2xl rounded border border-1 border-blue font-bold">
      I'm a React Container!
    </h1>
    <div id="content" style={{height: "12em"}}>
    </div>
  </div>
);

export default App;

const after = (ms, fn) => window.setTimeout(fn, ms);
after(50, () => {
  const rootEl = document.getElementById("react-root");
  const root = createRoot(rootEl);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
