import React from "react";
import * as serviceWorker from "./serviceWorkerRegistration";
import "./App.css";

function Page() {
  return <div className="App">page two</div>;
}

export default Page;
serviceWorker.register();
