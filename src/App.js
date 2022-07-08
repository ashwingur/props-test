import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item, index) => {
    return (
      <Card
        imageUrl={item.imageUrl}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        isLast={data.length - 1 === index ? true : false}
      />
    );
  });
  // cards[cards.length - 1].isLast = true;
  console.log(cards);
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
