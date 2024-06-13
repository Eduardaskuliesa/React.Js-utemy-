import Header from "./components/Header.jsx";
import StateLogin from "./components/StateLogin.jsx";
import Signup from "./components/SignUp.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Signup/> */}
        <StateLogin/>
      </main>
    </>
  );
}

export default App;
