import Header from "./components/header/header.component"
import Menu from "./components/menu/menu.component";

import './App.css';

function App() {
  return (
    <>
      <Header />

      <div className="wrapper">
        <Menu />
      </div>
    </>
  );
}

export default App;
