import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,ImageBackground ,TouchableOpacity,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LordOfRing =() => {
    return(
        <SafeAreaView style={{backgroundColor:"white"}}>
            <View>
                <Image style={styles.image} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7XvGnm-wBfCVEhPzDeVRoClQXntF0fffvw&usqp=CAU'}}/>
                <TouchableOpacity style={styles.defaultbtn}>
                        <Text style={{textAlign:'center',fontSize:15,color:'#ffffff'}}>
                                Rs. 500
                        </Text>
                </TouchableOpacity>
                <Text style={{fontSize:20,marginLeft:20}}>About this book</Text>
                <Text style={styles.auth}>J.R.R.Tolkien</Text>
                <Text style={{fontSize:15,marginLeft:20}}>The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien.</Text>
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
        backgroundColor:'#ffcc9c',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,

    },
    auth:{
        marginLeft:20,
        fontSize:18,
        color:'orange',
        marginTop:20,
        fontWeight:'bold'
    },
    btn:{
        padding:10,
        marginTop:30,
        marginBottom:55,
        marginLeft:120,
        marginRight:120,
        backgroundColor:'orange',
        borderRadius:20,
        

    },
  
});

export default LordOfRing;