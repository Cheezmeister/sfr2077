import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const App = () => (
  <div id="app rounded border border-solid">
    <h1 class="text-2xl font-bold">I'm a React Container!</h1>
  </div>
);

export default App;

const after = (ms, fn) => window.setTimeout(fn, ms);
after(50, () => {
  const rootEl = document.getElementById("root");
  const root = createRoot(rootEl);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
