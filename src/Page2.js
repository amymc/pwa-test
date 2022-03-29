import React from "react";
import { useAddToHomescreenPrompt } from "./useAddToHomescreenPrompt";
import * as serviceWorker from "./serviceWorkerRegistration";
import "./App.css";

function Page() {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);

  const hide = () => setVisibleState(false);

  React.useEffect(() => {
    if (prompt) {
      setVisibleState(true);
    }
  }, [prompt]);

  return (
    <div className="App">
      page two
      {isVisible && (
        <>
          <button onClick={hide}>Close</button>
          <button onClick={promptToInstall}>Add to homescreen</button>
        </>
      )}
    </div>
  );
}

export default Page;
serviceWorker.register();
