import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,ImageBackground ,TouchableOpacity,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home =() => {
    const navigation=useNavigation();
    return(

        <SafeAreaView>
         <View style={StyleSheet.containner}>
         <ScrollView vertical={true} >
            <TouchableOpacity>
                <Text style={{textAlign:'left',fontSize:20,color:'black',marginLeft:10,marginBottom:10,marginTop:10}}>Novels</Text>
            </TouchableOpacity>
            <ScrollView style={styles.scrollView} horizontal={true}>
                <TouchableOpacity onPress={() =>navigation.navigate('Rapunzel')} >
                    <Image style={styles.image} source={{uri: 'https://i.pinimg.com/originals/15/6a/f0/156af0909ae2cc5e7b70d9f93f98e078.jpg'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate("LordOfRing")}}>
                    <Image style={styles.image} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7XvGnm-wBfCVEhPzDeVRoClQXntF0fffvw&usqp=CAU'}}/>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image style={styles.image} source={{uri: 'https://shereads.com/wp-content/uploads/2020/02/81gHqxKP2sL.jpg'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529000634.jpg'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://1.bp.blogspot.com/-uFVw11kb5PU/TluA2sCdVEI/AAAAAAAAEGc/cmXbt9mQMLM/s1600/Harry%2BPotter.jpg'}}/>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity>
                <Text style={{textAlign:'left',fontSize:20,color:'black',marginLeft:10,marginBottom:10,marginTop:10}}>Travel Book</Text>
            </TouchableOpacity>
            <ScrollView style={styles.scrollView} horizontal={true}>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1HQNrsbHArEk4hlTWjAhVP4aGnqQqfCmnoz0KmyfSqWk4IOZpSLqeV3GsmnHeOjJ8MO4&usqp=CAU'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNJj5fCHWqwufaR2VFKF5jOw5optzGvF4eQt8Hc1-oSZyroOOm'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRZuHCTbE6VnR8E-gkf4fJWsgy_H-q9bc9GW98b8u7ugnwTK3rB'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://m.media-amazon.com/images/I/415qF9qEF2L.jpg'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://expertvagabond.com/wp-content/uploads/travel-books-how-to-travel-world.png.webp'}}/>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity>
                <Text style={{textAlign:'left',fontSize:20,color:'black',marginLeft:10,marginBottom:10,marginTop:10}}>Drama</Text>
            </TouchableOpacity>
            <ScrollView style={styles.scrollView} horizontal={true}>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/91ZVbEU1TmL.jpg'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://static01.nyt.com/images/2019/10/11/books/review/BestFriends/BestFriends-popup.jpg?quality=75&auto=webp&disable=upscale'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81-zY8s+ReL.jpg'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/51mnYM9JToL._SX346_BO1,204,203,200_.jpg'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://www.adazing.com/wp-content/uploads/2019/03/51iAx7x3HLL.jpg'}}/>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity>
                <Text style={{textAlign:'left',fontSize:20,color:'black',marginLeft:10,marginBottom:10,marginTop:10}}>Poem Books</Text>
            </TouchableOpacity>
            <ScrollView style={styles.scrollView} horizontal={true}>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/16/1437050368678/a99b3fe1-587f-4130-ba71-4ee2b6900f83-bestSizeAvailable.jpeg?width=300&quality=45&auto=format&fit=max&dpr=2&s=f1b9f4089e12c26600c9bea1d4979ba9'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591204943l/53804524._SY475_.jpg'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://shereads.com/wp-content/uploads/2019/08/sun-and-her-flowers.jpeg'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uPcdLTW3Y4wstIZk6uKUXzaM1dDlWmE3GaukMcG5gR_RudrndGZ_D392_6CTSGftSEM&usqp=CAU'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: 'https://s18670.pcdn.co/wp-content/uploads/my-thoughts-are-clouds-poems-for-mindfulness.jpg'}}/>
                </TouchableOpacity>
            </ScrollView>
            
        </ScrollView>
        </View>
       </SafeAreaView>
    )
}
const styles =StyleSheet.create({
    containner:{
        flex:1
    },
    scrollView: {
        backgroundColor: '#d7d9d7',
        marginHorizontal: 5,
        height:170
    },
    image:{
        width:100,
        height:150,
        marginLeft:10,
        marginRight:10,
        marginTop:10
    }
});

export default Home;