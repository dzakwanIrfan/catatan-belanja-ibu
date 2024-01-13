const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <GroceryList />
      <Footer />
    </div>
  );
}

function Header(){
  return <h1>Catatan Belanja Ibu 📝</h1>
}

function Form(){
  return(
    <form className="add-form">
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="text" placeholder="nama barang..." />
        </div>
        <button>Tambah</button>
      </form>
  );
}

function GroceryList(){
  return(
    <>
    <div className="list">
      <ul>
        {groceryItems.map((item) => (
          <Item item={ item } key={ item.id }/>
        ))}
      </ul>
    </div>
    <div className="actions">
      <select>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button>Bersihkan Daftar</button>
    </div>
    </>
  )
}

function Item( {item} ){
  return(
    <li key={item.id}>
      <input type="checkbox" />
      <span style={ item.checked ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.name}
      </span>
      <button>&times;</button>
    </li>
  )
}

function Footer(){
  return <footer className="stats">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>
}