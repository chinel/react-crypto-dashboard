import "./App.css";
import Appbar from "./Appbar";
import AppLayout from "./AppLayout";
import { AppProvider } from "./AppProvider";
import WelcomeMessage from "./WelcomeMessage";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <Appbar />
        <WelcomeMessage />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
