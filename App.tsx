import AppContainer from "./src/AppContainer";

if (__DEV__) {
  import("./reactotron").then(() =>
    console.log("Reactotron Configured")
  );
}

export default function App() {
  return <AppContainer />;
}
