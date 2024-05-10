"use client";

import { Provider } from "react-redux";
import { store } from "./state/store";
import GridPage from "./components/GridPage";

export default function Home() {
  return (
    <Provider store={store}>
      <GridPage />
    </Provider>
  );
}
