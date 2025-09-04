import Header from "./components/Header";
import LogoLoop from "./components/LogoLoop";
import IconScroll from "/iconScroll.png";
import TecnlogyScroll from "/tecnologyScroll.png";

function App() {
  const imageLogos = [
    { src: IconScroll, alt: "Company 1" },
    { src: TecnlogyScroll, alt: "Company 1" },
  ];

  return (
    <>
      <div className="bg-black flex flex-col ">
        <Header />

        <LogoLoop
          logos={imageLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </div>
    </>
  );
}

export default App;
