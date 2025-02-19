import { Provider } from "react-redux";
import "./App.css";
import NewsAggregator from "./components/NewsAggregator";
import { store } from "./storage/globalStore/store";
import { ThemeProvider } from "@mui/material";
import lightTheme from "./themes/lightTheme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <NewsAggregator />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
