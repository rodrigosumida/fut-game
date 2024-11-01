import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
        <GlobalStyles />
      </BrowserRouter>
    </div>
  );
}

export default App;
