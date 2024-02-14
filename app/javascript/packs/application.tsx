import React, { useState, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Divider from '@mui/material/Divider';

const LOCAL_STATE = {};

const Recipe = () => {
    return (
      <>
        <Typography variant="h2">Ingredients</Typography>
        <Alert severity="info">TODO</Alert>
        <ol>
          <li>{LOCAL_STATE.pantry.protein[2]}</li>
          <li>{LOCAL_STATE.pantry.veggies[2]}</li>
          <li>{LOCAL_STATE.pantry.seasonings[2]}</li>
        </ol>
        <Typography variant="h2">Directions</Typography>
        
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

  const inventory = (ingredientType: string, ingredientList: string[]) => (
    <>
      <Typography variant="h4">{ingredientType}</Typography>
      { ingredientList.map(ingredient => <p>{`=> ${ingredient}`}</p>) }
    </>
  );

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        {(clickCount > 0 ? `Spun ${clickCount} times` : 'Spin!')}
      </Button>
      <Recipe />
      <Divider />
      <Accordion>
        <AccordionSummary>
          <Typography variant="h3">
            🍴 What's in your Pantry
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        {Object.entries(LOCAL_STATE.pantry).map(([k, v]) => inventory(k, v))}
        </AccordionDetails>
      </Accordion>

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
  try {
    const payloadEl = document.getElementById('payload').innerText;
    LOCAL_STATE.pantry = JSON.parse(payloadEl);
  } catch (e: TypeError) {
    console.error(`Reading Rails payload from DOM: ${e}`);
  }

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
