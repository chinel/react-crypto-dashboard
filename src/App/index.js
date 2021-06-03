import "./App.css";
import Appbar from "./Appbar";
import AppLayout from "./AppLayout";
import WelcomeMessage from "./WelcomeMessage";

function App() {
  return (
    <AppLayout>
      <Appbar />
      <WelcomeMessage />
    </AppLayout>
  );
}

export default App;
