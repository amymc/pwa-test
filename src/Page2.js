import React from "react";
// import { useAddToHomescreenPrompt } from "./useAddToHomescreenPrompt";
import * as serviceWorker from "./serviceWorkerRegistration";
import "./App.css";

function Page() {
  // const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const isMobile = ["iPhone", "iPad", "android"].includes(navigator.platform);
  const [isVisible, setVisibleState] = React.useState(isMobile);

  // needsToSeePrompt() {
  //   return ['iPhone', 'iPad', 'android'].includes(navigator.platform);
  // }

  const hide = () => setVisibleState(false);

  // React.useEffect(() => {
  //   if (prompt) {
  //     setVisibleState(true);
  //   }
  // }, [prompt]);

  return (
    <div className="App">
      page two
      {isVisible && (
        <>
          <button onClick={hide}>Close</button>
          <p> Install this application. Tap 'Add to Homescreen'</p>
        </>
      )}
    </div>
  );
}

export default Page;
serviceWorker.register();
