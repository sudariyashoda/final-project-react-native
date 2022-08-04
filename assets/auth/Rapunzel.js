import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,ImageBackground ,TouchableOpacity,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Rapunzel =({routes}) => {
    return(
        <SafeAreaView style={{backgroundColor:"white"}}>
            <View>
   
                <Image style={styles.image} source={{uri: 'https://i.pinimg.com/originals/15/6a/f0/156af0909ae2cc5e7b70d9f93f98e078.jpg'}}/>
                <TouchableOpacity style={styles.defaultbtn}>
                        <Text style={{textAlign:'center',fontSize:15,color:'#ffffff'}}>
                                Rs. 500
                        </Text>
                </TouchableOpacity>
                <Text style={{fontSize:20,marginLeft:20}}>About this book</Text>
                <Text style={styles.auth}>Jacob Gerimm</Text>
                <Text style={{fontSize:15,marginLeft:20}}>Rapunzel is a German fariy tale recorded by the brothers Girmm and first published in 1812.</Text>
                <TouchableOpacity style={styles.btn}>
                        <Text style={{textAlign:'center',fontSize:15,color:'#ffffff'}}>
                                Buy Now
                        </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

const styles =StyleSheet.create({
    image:{
        width:"50%",
        height:300,
        marginLeft:100,
        marginTop:20,
        marginRight:100,

      
    },
    defaultbtn:{
        padding:10,
        marginTop:10,
        marginLeft:320,
        backgroundColor:'#ccccff',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,

    },
    auth:{
        marginLeft:20,
        fontSize:18,
        color:'#6666ff',
        marginTop:20,
        fontWeight:'bold'
    },
btn:{
        padding:10,
        marginTop:30,
        marginBottom:55,
        marginLeft:120,
        marginRight:120,
        backgroundColor:'#4d4dff',
        borderRadius:20,
        

    },
  
});

export default Rapunzel;