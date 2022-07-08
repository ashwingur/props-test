import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  console.log(data);
  const cards = data.map((item) => (
    <Card
      imageUrl={item.imageUrl}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      title={item.title}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
    />
  ));
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
