import React, { useState, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const Recipe = () => {
    return (
      <>
        <h2>Ingredients</h2>
        <Alert severity="info">TODO</Alert>
        <h2>Directions</h2>
        
        <ol>
          <li> Chop up veggies into reasonably-sized pieces. Best judgment. </li>
          <li> Coat frying pan generously in oil and put burner on medium. </li>
          <li> Sloppily chop meat into bite-sized chunks. Dump into pan. </li>
          <li> Use spatula to stir chunks in pan until almost cooked. Split chunk down the middle to check. </li>
          <li> Add veggies one by one, using spatula to mix them in real good </li>
          <li> Turn burner to low. Dump in your spices and stir them in sloppily. </li>
          <li> Don't mix the spices for too long. We want to leave concentrated delicious bursts of flavor here and there to keep things interesting. </li>
          <li> Dump your wondrous creation onto plate(s) and devour. </li>
        </ol>
      </>
    );
  };

const Content = () => {
  const [clickCount, setClickCount] = useState<number>(0);

  const handleClick = () => setClickCount(clickCount + 1);

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        {(clickCount > 0 ? `Spun ${clickCount} times` : 'Spin!')}
      </Button>
      <Recipe />
    </>
  );
};

const App = () => (
  <div id="app" className="rounded border border-solid bg-purple-500 border-blue">
    <h1 className="text-2xl rounded border border-1 border-blue font-bold">
      I'm a React Container!
    </h1>
    <div id="content">
      <Content></Content>
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
