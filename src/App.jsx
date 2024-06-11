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


  /* const myPromise = new promise((resolve, reject) => {
    setTimeout(() => {  
      const isTrue = true; 

        if(isTrue) {
          resolve([{
            id: 1,
            name: "Motherboard ASUS 95XGD",
            description: "Mother para INTEL",
            stock: 10
          }])
        } else { 
          reject(console.error("El producto no existe"))
        }
      }, 3000)
    }); */
