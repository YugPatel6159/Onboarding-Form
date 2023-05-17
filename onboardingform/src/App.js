import { BrowserRouter, Route,  Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login page/Login";
import OnBoardingForm from "./pages/OnBoardingForm/OnBoardingForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/onboarding" element={<OnBoardingForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
