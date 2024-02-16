import { Provider as ReduxProvider } from "react-redux";

import { PlayerPage } from "./pages/Player";
import { store } from "./store/index";

export function App() {
  return (
    <ReduxProvider store={store}>
      <PlayerPage />
    </ReduxProvider>
  );
}
