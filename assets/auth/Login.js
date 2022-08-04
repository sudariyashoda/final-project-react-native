
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,ImageBackground ,TouchableOpacity,Image,TextInput} from 'react-native';


const Login =() => {
    const navigation=useNavigation();
    return(
            <SafeAreaView style={{backgroundColor:'#ffffff'}}>
            
                <View style={StyleSheet.containner}>
                    <TouchableOpacity>
                        <Image style={styles.bgimage} source={require('../imagesrc/istock.jpg')}/>
                    </TouchableOpacity>
                    <Text style={styles.head}>Log in</Text>
                    <Text style={styles.sub}>Please sign into continue.</Text>
                    <View style={StyleSheet.forminput}>
                        <TextInput style={styles.textinput} placeholder="E mail"/>
                        <TextInput style={styles.textinput} placeholder="password" secureTextEntry={true}/>
                    </View>
                    <View style={StyleSheet.forminput}>
                        <TouchableOpacity >
                        <Text style ={{textAlign:'right',fontSize:14,marginRight:20,color:'#32a852',  marginTop:10}}>Forgot Password?</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.defaultbtn}>
                            <Text style={{textAlign:'center',fontSize:15,color:'#ffffff'}} onPress={()=>{navigation.navigate("Home")}}>
                                Log in
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View >
                    <TouchableOpacity onPress={()=>{navigation.navigate("Register")}}>
                        <Text style={styles.pressinput}>Don't have an account? Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
    )
}

const styles =StyleSheet.create({
        containner:{
         flex:1
        },
        texthead:{
            textAlign:"center"
        },
        bgimage:{
            width:'100%',
            height:400,
            marginTop:-20,
            marginLeft:0,
          
        },
        head:{
            fontSize:20,
            fontWeight:'bold',
            marginLeft:20,
            

        },
        sub:{
            fontSize:15,
            marginLeft:20,
            color:'#265c39',
        },
        forminput:{
            marginTop:0,
            padding:10
        },
        textinput:{
            marginTop:10,
            marginLeft:20,
            marginRight:20,
            padding:8,
            fontSize:15,
            borderWidth:1,
            borderRadius:10
        },
        defaultbtn:{
            padding:10,
            marginTop:10,
            marginLeft:160,
            marginRight:160,
            backgroundColor:'#265c39',
            borderRadius:20,
        },
       
        pressinput:{
           textAlign:'center',
           color:'#32a852',
           marginTop:45
          
        }    


});
export default Login;