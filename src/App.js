import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';


function App() {
  const cart = useSelector(state=> state.cart.items)
  // const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    fetch('https://react-cd9ef-default-rtdb.firebaseio.com/products.json',{
      method:'PUT',
      body: JSON.stringify(cart)
    })

  }, [cart]);

  return (



    <Layout>
      <Cart />
      <Products />
    </Layout>

  );
}

export default App;
