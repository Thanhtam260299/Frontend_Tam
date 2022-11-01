import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./Layouts/DefaultLayout";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnTfzjwkxchL-D5XGD1Lhj4RktF93Pfkc",
  authDomain: "tiktok-a8406.firebaseapp.com",
  projectId: "tiktok-a8406",
  storageBucket: "tiktok-a8406.appspot.com",
  messagingSenderId: "785981734382",
  appId: "1:785981734382:web:5bbbaa1bf30923a2b1e2ff",
  measurementId: "G-ZKWYRDMXMS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
