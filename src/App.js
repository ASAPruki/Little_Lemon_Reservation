//! Note that pages and css pages that are not used might be used if I want to modify this project later. Therefore don't mind them.

import app from "./styles/app.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
