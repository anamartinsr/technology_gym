import Header from "./components/Header";
import LogoLoop from "./components/LogoLoop";
import Time from "./components/Time";

import IconScroll from "/iconScroll.png";
import TecnlogyScroll from "/tecnologyScroll.png";

function App() {
  const imageLogos = [
    { src: IconScroll, alt: "Company 1" },
    { src: TecnlogyScroll, alt: "Company 1" },
  ];

  return (
    <>
      <div className="flex flex-col ">
        <Time />
      </div>
    </>
  );
}

export default App;
