import Navbar from "./Components/Navbar.js"
import Card from "./Components/Card.js"
import Data from "./data.js"

function App() {

  const cards=Data.map(item => {
    return(
      <Card 
          kei={item.id}
          item={item}

        />
    )
  })

  return (


    <div className="container">

        <Navbar />

        <section className="cards-list">

        {cards}

        </section>

    </div>
    

  );
}

export default App;
