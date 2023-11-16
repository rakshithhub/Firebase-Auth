import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import { Layout } from "./Components/Layout";
import { UserLogin } from "./Components/UserLogin";
import { UserSignUp } from "./Components/UserSignUp";
import { ReactAuthContextProvider } from "./Context/ReactAuthContext";
import { UserBanner } from "./Components/UserBanner";
import { ProtectedRoute } from "./Components/ProtectedRoute";
// import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<UserLogin/>}/>
      <Route path="signup" element={<UserSignUp/>}/>
      <Route path="home" element={<ProtectedRoute><UserBanner/></ProtectedRoute>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ReactAuthContextProvider>
      <RouterProvider router={router}/>
    </ReactAuthContextProvider>
  </>
);
