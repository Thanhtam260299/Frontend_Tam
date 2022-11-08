import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./Layouts/DefaultLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = "Fragment";
            }
            let Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout large={route.large}>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
