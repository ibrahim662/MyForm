import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";
import Form from "./Form/form";
import Info from "./Info/info";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/Form">
          <Form />
        </Route>

        <Route path="/FormInfo">
          <Info />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
