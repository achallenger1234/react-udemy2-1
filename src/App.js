
import { useState, useCallback, useMemo } from 'react';
import { ChildArea } from './conponents/ChildArea'
import { InlineStyle } from "./conponents/InlineStyle";
import { CssModules } from "./conponents/CssModules";
import { StyledJsx } from "./conponents/StyledJsx";
import { StyledComponents } from "./conponents/StyledComponents";
import { Emotion } from "./conponents/Emotion";


import { Router }from "./router/Router";

import { BrowserRouter,Link } from "react-router-dom";


function App() {
  
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  
  const onChangeText = (e) => {
    setText(e.target.value)
  }
  
  const onClickOpen = () => {
    setOpen(!open);
  }
  
  const onClickClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])
  
  const temp = useMemo(() => 1+3, [])
  
  return (
      <>
        {/**
        <input value={text} onChange={onChangeText}　/>
        <br />
        <br />
        <button onClick={onClickOpen} >表示</button>
        <ChildArea open={open} onClickClose={onClickClose}/>
        
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
        <Emotion />
        */}
        <BrowserRouter>
          <div className="App">
            <Link to="/">Home</Link>
            <br />
            <Link to="/page1">Page1</Link>
            <br />
            <Link to="/page2">Page2</Link>
            <br />
          </div>
          <Router />
        </BrowserRouter>
      </>
  );
}

export default App;
