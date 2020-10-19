import React from 'react';
import Header from './Header'; 
import MemeGenerator from './MemeGenerator';
import './style.css';
import './App.css';

function App() {
  return (
/**
 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 */
    
    <div className="App">
    
      <Header/> 
      <h1>john's meme gen title</h1>
      <MemeGenerator />
         
    </div>
  );
}

export default App;
