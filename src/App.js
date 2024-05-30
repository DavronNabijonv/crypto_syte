import Footer from "./page_parts/footer";
import Navbar from "./page_parts/navbar";
import Head from "./page_parts/head";
import Product from "./page_parts/product";
import Best_way from "./page_parts/best_way";
import Last_3_items from "./page_parts/last_3_items";

function App() {
  return (
    <div> 
      <Navbar/>
      <Head/>
      <Product/>
      <Best_way/>
      <Last_3_items/>
      <Footer/>
    </div>
  );
}

export default App;
