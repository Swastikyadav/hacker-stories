import Header from "./components/header/header.component"
import Menu from "./components/menu/menu.component";
import Main from "./components/main/main.component";
import Footer from "./components/footer/footer.component";

import './App.css';

function App() {
  return (
    <>
      <Header />

      <div className="wrapper">
        <Menu />
        <Main />
      </div>

      <Footer />
    </>
  );
}

export default App;
