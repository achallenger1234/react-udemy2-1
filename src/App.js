
import { useState, useCallback, useMemo } from 'react';
import { ChildArea } from './conponents/ChildArea'
import { InlineStyle } from "./conponents/InlineStyle";
import { CssModules } from "./conponents/CssModules";
import { StyledJsx } from "./conponents/StyledJsx";
import { StyledComponents } from "./conponents/StyledComponents";
import { Emotion } from "./conponents/Emotion";


//import { Router }from "./router/Router";
import { Router } from "./router/router5/Router";

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
        <Router />
      </>
  );
}

export default App;
