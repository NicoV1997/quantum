import './App.css'
import NavBar from './components/navBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'


function App() {

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

  return (    
    <>
    <NavBar />
    <ItemListConteiner greeting="Bienvenidos a Quantum"/>
    </>
  )
}

export default App
