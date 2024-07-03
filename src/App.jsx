import './App.css'
import { MainRoutes } from './routes/MainRoutes';
import { CartProvider } from './context/CartContext';  


function App() {


  return (    
    <CartProvider>
      <MainRoutes />
    </CartProvider>
  )
}

export default App

