import { 
  StyleSheet, Text,
  View , 
  TextInput,Button, 
  placeholder, ScrollView,
   FlatList} from 'react-native';
import React, {useState} from 'react';
import Products from './components/products';
import AddProduct from './components/AddProduct';
export default function App() {
  // const [product, setProduct] = useState(''); if flatlist 
  // const [product, setProduct] = useState('');
  const [myProducts, setMyProducts] = useState([]);

  const submitHandler=(product)=>{
//  import de la function input handler vers addproduct 
    //console.log(product); 
    // setMyProducts([...myProducts, product])
    // recuperer les datas et stockers 
    //   setMyProducts( currentMyProducts => [...currentMyProducts, product]);
    
      // Condition saisie si caractères ? 

      const idString = Date.now().toString(); 
      setMyProducts( currentMyProducts => [{key:idString, name:product }, ...currentMyProducts]);
  }
    //setProduct(''); 
    //Products("");
    //console.log(myProducts); 


  const deleteProduct =(key)=>{
    // on se base sur son key 
    setMyProducts(currentMyProducts =>{
      return currentMyProducts.filter(product =>product.key !=key)
    })
  }
  return (
    <View style={styles.container}>
    {/* on  a enlevé input et btn vers AddProduct  */}
      <AddProduct submitHandler= {submitHandler} />
      <FlatList
        data ={ myProducts }
        // bien préciser item.name
        renderItem={( {  item } ) => (

        <Products name={item.name}
        idString= {item.key}
        deleteProduct={deleteProduct}
         />
        ) }
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40, 
    paddingTop: 60,  
  },
  
   

});
