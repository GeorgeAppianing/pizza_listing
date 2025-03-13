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
      {pizzaData.map((pizza) => (
        <div key={pizza.name} className="flex px-2">
          <img src="../assests/pizzas" alt="pizza image" className="border" />
          <div className="p-4">
            <h2>{pizza.name}</h2>
            <p className="text-sm text-gray-400">{pizza.ingredients}</p>
            <p
              className={`p-4 ${
                pizza.soldOut === true ? "text-red-500 font-bold" : null
              }`}
            >
              {pizza.soldOut === true ? "SOLD OUT" : pizza.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer>
      {isOpen ? (
        <p>We're currently opened</p>
      ) : (
        <p>Sorry we're currently closed, we will open at {openHour}am</p>
      )}
    </footer>
  );
}

export default App;
