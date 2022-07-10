import { 
  StyleSheet, Text,
  View , 
  TextInput,Button, 
  placeholder, ScrollView,
   FlatList, Modal, Pressable,
  } from 'react-native';
import React, {useState} from 'react';
import Products from './components/products';
import AddProduct from './components/AddProduct';

export default function App() {
  // const [product, setProduct] = useState(''); if flatlist 
  // const [product, setProduct] = useState('');
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setshowModal] = useState(false); //à true il va s'afficher 
  //onRequestClose : retourne en false si on veut 

  const submitHandler=(product)=>{
//  import de la function input handler vers addproduct 
    //console.log(product); 
    // setMyProducts([...myProducts, product])
    // recuperer les datas et stockers 
    //   setMyProducts( currentMyProducts => [...currentMyProducts, product]);
    
      // Condition saisie si caractères ? 
    if(product.length > 1){

      const idString = Date.now().toString(); 
      setMyProducts( currentMyProducts => [{key:idString, name:product }, ...currentMyProducts]);
    }else{
      setshowModal(true)
    }
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
    {/*  Modal : false : caché */}
    <Modal
    visible={showModal}
    onRequestClose={()=>setshowModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>OUPS😯</Text>
            </View>
            <View style={styles.modalBody}>
            <Text style={styles.modalBodyText}> Merci d'indiquer plus d'un seul caractère </Text>
            </View>
            {/* footer : le bas  */}
            <View style={styles.modalFotter}>
              <Pressable 
              style={styles.pressablebtnmodal}
              onPress={()=> setshowModal(false)}
              animationType="slide"
              // hardwareAccelerated :android 
              transparent
              >
            <Text style={styles.modalbtn}>OK</Text>
              </Pressable>
            </View>
        </View>
      </View>
    </Modal>
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
  modalContainer:{
    flex:1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "rgba(0,0,0,0.2)", 

  }, 
  modalContent:{
    backgroundColor: "#fff", 
    width: "90%", 
    height: 250, 
    borderRadius: 15, 
    // padding: 9, 
    alignItems: "center", 
    




  }, 
  modalHeader:{
    // backgroundColor:"grey", 
    width: "100%", 
    padding: 16, 
    AlignItems:"center", 
    // borderBottomEndRadius: 15,
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15, 
    borderBottomWidth:1 , 
    borderBottomColor: "lightgray"

    
  }, modalHeaderText:{
    color: "grey", 
    fontSize:17, 
    textAlign:"center"

  }, 
  modalBody:{
    // backgroundColor: "red", 
    flex:1, 
    width:"100%", 
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15, 
    alignItems:"center",
    justifyContent:"center"


  }, 
  modalBodyText:{
    fontSize: 17, 


  },
modalFotter:{
  // backgroundColor: "black", 
  width:"100%", 
  // borderBottomLeftRadius: 15, 
  // borderBottomRightRadius: 15, 

}, 
pressablebtnmodal:{
  backgroundColor: "lightseagreen", 
  borderBottomLeftRadius: 15, 
  borderBottomRightRadius: 15, 

}, 
modalbtn:{
  fontSize:17, 
  color: "white", 
  textAlign:"center", 
  padding: 16, 
  
}
});
