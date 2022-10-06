import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import Welcome from './welcome';
import {useNavigation} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilePage from './profilePage';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import CourseInfo from './courseInfo';
import Login from './login';
import ForgotPassword from './forgotPassword';
import Resume from './resume';


 function SignUP() {
  const navigation = useNavigation();
  const signup = () =>{
    navigation.navigate("welcome")
}
const login = () =>{
  navigation.navigate("login")
}


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
        <Text style={{fontSize:24,fontWeight:600}}>SIGN-UP</Text>
      </View>
      <View style={styles.log}>
        <TextInput
        style={styles.inputs}
        placeholder='Enter your UserName'
        />
        <View style={styles.line}/>
        <TextInput
        style={styles.inputs}
        placeholder='Enter your Email'
        />
        <View style={styles.line}/>
        <TextInput
        style={styles.inputs}
        placeholder='Enter your Password'
        />
        <View style={styles.line}/>
        <TextInput
        style={styles.inputs}
        placeholder='Confirm your Password'
        />
        <View style={styles.line}/>
        <Image
        source={require('./assets/check.png')}
        style={{width:18, height:18,marginTop:30,marginLeft:30}}

        />

        <Text style={{color:'white',marginLeft:70,marginTop:'-5%'}}>Already have an account?</Text>
        <Text onPress={login} style={{color:'#56CCF2',marginLeft:235,marginTop:"-5%"}}>login here</Text>
        <TouchableOpacity>
          <View style={styles.sign}>
          {/* <View style={{width:171, height:44,borderRadius:30,backgroundColor:' #56CCF2'}}> */}
            <Text style={{color:'white',marginLeft:20,marginTop:10,fontSize:16,fontWeight:700}}onPress={signup}>sign-up</Text>
          </View>
        </TouchableOpacity>

      </View>
     
    </View>
  );
}
const Stack = createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='signup' screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="signup" component={SignUP}/>
      <Stack.Screen name="login" component={Login}/>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="profile" component={ProfilePage} />
      <Stack.Screen name="courseinfo" component={CourseInfo} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen name="resume" component={Resume}/>

    </Stack.Navigator>
  </NavigationContainer>
  )
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
    marginTop:30

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
    marginLeft:40,
    marginTop:30,
    // borderWidth:3
  },

});
