import React from "react";
import Settings from "../Settings";
import Dashboard from "../Dashboard";
import Content from "../Shared/Content";
import "./App.css";
import Appbar from "./Appbar";
import AppLayout from "./AppLayout";
import { AppProvider } from "./AppProvider";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <Appbar />
        <Content>
          <Settings />
          <Dashboard />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
