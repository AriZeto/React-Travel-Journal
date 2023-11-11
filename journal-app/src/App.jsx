import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";

function App() {
  const cardElements = data.map((item) => {
    return <Card {...item} />;
  });
  return (
    <>
      <Navbar />
      {cardElements}
      <Footer />
    </>
  );
}

export default App;
