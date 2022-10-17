import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native';

export default function Login({navigation}) {
  const signup = () =>{
    navigation.navigate("signup")
}
const forgot = () =>{
  navigation.navigate("forgotPassword")
}
const log = () =>{
  navigation.navigate("welcome")
}
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.profs}></View>
      <View style={styles.prof}>
        <Image
        source={require('./assets/hexB.jfif')}
        style={{width:49, height:51, marginLeft:"-40%", marginTop:30}}

        />
          <Image
        source={require('./assets/hexD.jfif')}
        style={{width:21, height:30, marginLeft:"-30%", marginTop:60}}

        />
        <Image
        source={require('./assets/download.png')}
        style={{width:120,height:120, alignSelf:'center',marginTop:25, borderRadius:60, position:'absolute'}} 
        />
            <Image
        source={require('./assets/hexD.jfif')}
        style={{width:41, height:45, marginLeft:"128%", marginTop:"-35%"}}

        />

      </View>
      <View>
        <Text style={{fontSize:24,fontWeight:600,marginLeft:150,marginTop:30}}>LOGIN</Text>
      </View>
      <View style={styles.logs}></View>
      <View style={styles.log}>
        <TextInput
        style={styles.inputs}
        placeholder='Enter your UserName/Email'
        />
        <View style={styles.line}/>
       
        <TextInput
        style={styles.inputs1}
        placeholder='Enter your Password'
        />
        <View style={styles.line}/>
      
        <Image
        source={require('./assets/check.png')}
        style={{width:18, height:18,marginTop:30,marginLeft:30}}

        />

        <Text style={{color:'white',marginLeft:70,marginTop:'-5%'}}>I am not a robot </Text>
        <Text style={{color:'white',marginLeft:30,marginTop:'3%'}}>haven't registered yet?</Text>
        <Text onPress={signup} style={{color:'#56CCF2',marginLeft:180,marginTop:"-5%"}}>register now </Text>
         
        <Text style={{color:'white',marginLeft:30,marginTop:'3%'}}>forgot password? </Text>
        <Text onPress={forgot} style={{color:'#56CCF2',marginLeft:160,marginTop:"-5%"}}>click here </Text>
        <TouchableOpacity>
          <View style={styles.sign}>
          {/* <View style={{width:171, height:44,borderRadius:30,backgroundColor:' #56CCF2'}}> */}
            <Text style={{color:'white',marginLeft:60,marginTop:10,fontSize:16,fontWeight:700}} onPress={log}>Login</Text>
          </View>
        </TouchableOpacity>

      </View>
      </ScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prof:{
    height:170,
    width:170,
    borderRadius:85,
    backgroundColor: 'blue',
    marginTop:'-49%',
    marginLeft:93,
  
  },
  profs:{
    height:200,
    width:200,
    borderRadius:100,
    backgroundColor: '#A0BEF8',
    marginLeft:80,
    marginTop:30,
    // marginBottom:'-150%'
  
  },
  log:{
    // marginTop: 20,
    height: 588,
    width:380,
    backgroundColor: '#184FDA',
    borderTopRightRadius: 207,
    marginTop:'-150%'
  },
  logs:{
    marginTop: 40,
    height: 588,
    width:380,
    backgroundColor: '#A0BEF8',
    borderTopRightRadius: 207,
    
  },
  

  inputs:{
    color: '#ffffff',
    fontSize:19,
    fontWeight:700,
    marginLeft:20,
    marginTop:150

  },
  inputs1:{
    color: '#ffffff',
    fontSize:19,
    fontWeight:700,
    marginLeft:20,
    marginTop:10

  },
  line:{
    height:4,
    width:300,
    backgroundColor:'#56CCF2',
    marginLeft:20
  },
  sign:{
    width:171, 
    height:44,
    borderRadius:30,
    backgroundColor: '#56CCF2',
    marginLeft:100,
    marginTop:30,
    // borderWidth:3
  },
});