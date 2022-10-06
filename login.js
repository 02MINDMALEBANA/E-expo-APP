import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.prof}>
        <Image
        source={require('./assets/hexagon-blue.png')}
        style={{width:49, height:51, marginLeft:"-30%", marginTop:30}}

        />
          <Image
        source={require('./assets/dark.png')}
        style={{width:21, height:30, marginLeft:"-30%", marginTop:60}}

        />
        <Image
        source={require('./assets/download.png')}
        style={{width:100,height:100, alignSelf:'center',marginTop:60, borderRadius:50, position:'absolute'}} 
        />
            <Image
        source={require('./assets/dark.png')}
        style={{width:41, height:45, marginLeft:"110%", marginTop:"-35%"}}

        />

      </View>
      <View>
        <Text style={{fontSize:24,fontWeight:600}}>LOGIN</Text>
      </View>
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
        <Text style={{color:'white',marginLeft:70,marginTop:'3%'}}>haven't registered yet? register now </Text>
        <Text style={{color:'white',marginLeft:70,marginTop:'3%'}}>forgot password? click here </Text>
        <TouchableOpacity>
          <View style={styles.sign}>
          {/* <View style={{width:171, height:44,borderRadius:30,backgroundColor:' #56CCF2'}}> */}
            <Text style={{color:'white',marginLeft:60,marginTop:10,fontSize:16,fontWeight:700}}>login</Text>
          </View>
        </TouchableOpacity>

      </View>
     
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
    height:200,
    width:200,
    borderRadius:100,
    backgroundColor: 'blue',
    marginTop:200
  
  },
  log:{
    marginTop: 20,
    height: 588,
    width:380,
    backgroundColor: '#184FDA',
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