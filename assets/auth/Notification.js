import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,ImageBackground ,TouchableOpacity,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Notification =() => {
    const navigation=useNavigation();
    return(
        <SafeAreaView style={styles.areaview}>
            <View>
                <Image style={styles.images} source={require('../imagesrc/notifications.jpg')}/>
                <Text style ={{textAlign:'center',fontSize:19,  marginTop:10}}>
                    Nothing Here!!
                </Text>
                <Text style ={{textAlign:'center',fontSize:15,  marginRight:25,marginLeft:25}}>
                    Tap the notification nottification setting button and check again..
                </Text>
            </View>
        </SafeAreaView>
    )
}
const styles =StyleSheet.create({
    
    images:{
        width:"75%",
        height:200,
        marginLeft:40,
        marginRight:40,
        marginTop:100,
  
      
    },
    areaview:{
        backgroundColor:"#ffffff",
        height:700
    }

});



export default Notification;
