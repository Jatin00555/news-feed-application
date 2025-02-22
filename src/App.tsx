import { Provider } from "react-redux";
import "./App.css";
import NewsAggregator from "./components/NewsAggregator";
import { store } from "./storage/globalStore/store";
import { ThemeProvider } from "@mui/material";
import lightTheme from "./themes/lightTheme";
import GlobalErrorBoundary from "./components/GlobalErrorBoundry";


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <GlobalErrorBoundary>
          <NewsAggregator />
        </GlobalErrorBoundary>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
