import "./App.css";
import NavBar from "./components/header/Nabar";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";

function App() {
  return (
    <div>
      <NavBar />
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;
