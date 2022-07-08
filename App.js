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

//  import de la function input handler vers addproduct 
  const submitHandler=(product)=>{
    //console.log(product); 
    // setMyProducts([...myProducts, product])
    // recuperer les datas et stockers 
    //   setMyProducts( currentMyProduct => [...currentMyProduct, product]);
    const idString = Date.now().toString(); 
    
    setMyProducts( currentMyProduct => [{key:idString, name:product }, ...currentMyProduct]);
    //setProduct(''); 
    //Products("");
    //console.log(myProducts); 
  }
  return (
    <View style={styles.container}>
    {/* on  a enlevé input et btn vers AddProduct  */}
      <AddProduct submitHandler= {submitHandler} />
      <FlatList
        data ={ myProducts }
        // bien préciser item.name
        renderItem={( {  item } ) => <Products name={item.name} /> }
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
