import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Parallax from "./components/Parallax";
import Rewiews from "./components/Rewiews";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Parallax />
      <Rewiews />
    </>
  );
}
