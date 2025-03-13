const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="flex justify-center flex-col items-center mt-5 bg-yellow-50">
      <Header />
      <Pizza />
      <Footer />
    </div>
  );
}

function Pizza() {
  return (
    <>
      <h2 className="my-5 font-medium underline">OUR MENU</h2>
      <p className="text-sm">
        Authentic Italian cuisine {pizzaData.length} creative dishes to choose
        from. All from our store oven, all organic, all delicious
      </p>

      <Menu />
    </>
  );
}

function Header() {
  return <h2 className="text-yellow-200 font-sans text-5xl">Fast Pizza CO.</h2>;
}
function Menu() {
  return (
    <div className="grid grid-cols-2 gap-2 w-3/4 mt-4">
      <ul>
        <Pizza />
      </ul>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer className="flex justify-center items-center">
      {isOpen ? (
        <div className="flex flex-col justify-center items-center">
          <p>We're currently opened</p>
          <button className="bg-yellow-300 p-2 rounded">Order</button>
        </div>
      ) : (
        <p>Sorry we're currently closed, we will open at {openHour}am</p>
      )}
    </footer>
  );
}

export default App;
