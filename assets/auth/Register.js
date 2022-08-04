import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,ImageBackground ,TouchableOpacity,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register =() => {
    const navigation=useNavigation();
    return(
            <SafeAreaView style={{backgroundColor:'#ffffff'}}>
            
                <View style={StyleSheet.containner}>
                    <TouchableOpacity>
                        <Image style={styles.bgimage} source={require('../imagesrc/books.jpg')}/>
                    </TouchableOpacity>
                   
                    <Text style={styles.head}>Create an account</Text>
                
                    <View style={StyleSheet.forminput}>
                        <TextInput style={styles.textinput} placeholder="First name"/>
                        <TextInput style={styles.textinput} placeholder="E mail"/>
                        <TextInput style={styles.textinput} placeholder="password" secureTextEntry={true}/>
                        <TextInput style={styles.textinput} placeholder="Confirm password" secureTextEntry={true}/>

                    </View>
                    <View style={StyleSheet.forminput}>
                        
                        <TouchableOpacity style={styles.defaultbtn}  onPress={()=>{navigation.navigate("Login")}}>
                            <Text style={{textAlign:'center',fontSize:15,color:'#ffffff'}}>
                                Sign up
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                    <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                        <Text style={styles.pressinput}>Already have an an account? Sign in</Text>
                    </TouchableOpacity>
                </View>
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
            height:250,
            marginTop:-10,
            
          
        },
        head:{
            fontSize:20,
            fontWeight:'bold',
            marginLeft:20,

        },
        sub:{
            fontSize:15,
            marginLeft:20
        },
        forminput:{
            marginTop:20,
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
           marginTop:120
          
        }    


});
export default Register;