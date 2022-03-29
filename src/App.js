// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

const standalone = window.matchMedia("(display-mode: standalone)");

let Page1;
if (standalone) {
  Page1 = React.lazy(() => import("./Page"));
}
const Page2 = React.lazy(() => import("./Page2"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {standalone ? (
          <Page2 />
        ) : (
          <Router>
            <li>
              <Link to="/pageone">One</Link>
            </li>
            <li>
              <Link to="/pagetwo">Two</Link>
            </li>
            <Routes>
              <Route path="/pageone" element={<Page1 />} />
              <Route path="/pagetwo" element={<Page2 />} />
            </Routes>
          </Router>
        )}
      </Suspense>
    </div>
  );
}
export default App;
