import { Provider } from "react-redux";
import "./App.css";
import NewsAggregator from "./components/NewsAggregator";
import { store } from "./storage/globalStore/store";

function App() {
  return (
    <Provider store={store}>
      <NewsAggregator />
    </Provider>
  );
}

export default App;
