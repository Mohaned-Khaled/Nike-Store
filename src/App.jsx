import Cart from "./Components/Cart";
import FlexContent from "./Components/FlexContent";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Sales from "./Components/Sales";
import Stories from "./Components/Stories";
import {
  heroapi,
  toprateslaes,
  popularsales,
  sneaker,
  highlight,
  story,
  footerAPI,
} from "./Data/data";

function App() {
  return (
    <main className="flex flex-col gap-[6rem] relative">
      <Navbar />
      <Cart />
      <Hero heroapi={heroapi} />
      <Sales endPoint={popularsales} ifExists />
      <FlexContent endPoint={highlight} ifExists />
      <Sales endPoint={toprateslaes} />
      <FlexContent endPoint={sneaker} />
      <Stories story={story} />
      <Footer footerApi={footerAPI} />
    </main>
  );
}

export default App;
