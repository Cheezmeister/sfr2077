import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const App = () => (
  <div>
    <h2>Hello again cruel world</h2>
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
