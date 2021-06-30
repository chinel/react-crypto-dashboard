import Settings from "../Settings";
import "./App.css";
import Appbar from "./Appbar";
import AppLayout from "./AppLayout";
import { AppProvider } from "./AppProvider";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <Appbar />
        <Settings />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
