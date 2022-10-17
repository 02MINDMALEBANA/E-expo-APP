import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';

export default function Welcome({navigation}) {
  const resume = () =>{
    navigation.navigate("resume")
  }
  const aps = () =>{
    navigation.navigate("courseinfo")
  }
  return (
    <View style={styles.container}>
      {/* <View style={styles.prof}>
      <Text style={{fontSize:32,fontWeight:500}}>WELCOME!</Text>
        <Image
        source={require('./assets/learner.webp')}
        style={{width:100,height:100, alignSelf:'center',marginTop:60, borderRadius:50, position:'absolute'}} 
        />
      

      </View> */}
       <Text style={{fontSize:32,fontWeight:500,marginTop:250}}>WELCOME!</Text>

       <View>
       <Image
        source={require('./assets/learner.webp')}
        style={{width:135,height:166, alignSelf:'center', borderRadius:50}} 
        />
        </View>
      <View>
      
      </View>
      <View style={styles.logs}></View>
      <View style={styles.log}>
        <Text style={{color:'white', fontSize:28, fontWeight:600, marginLeft:30, marginTop:100}}>NAME :</Text>
        <Text style={{color:'white', fontSize:28, fontWeight:600, marginLeft:30}}>SURNAME :</Text>
        <Text style={{color:'white',fontSize:28, fontWeight:600,marginLeft:30}}>ID NUMBER :</Text>
       
        
        <TouchableOpacity>
          <View style={styles.sign}>
            <Text onPress={aps} style={{color:'white',marginLeft:20,marginTop:10,fontSize:16,fontWeight:700}}>APS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.sign1}>
            <Text onPress={resume} style={{color:'white',marginLeft:20,marginTop:10,fontSize:10,fontWeight:700}}>Resume Guide</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.sign2}>
            <Text style={{color:'white',marginLeft:20,marginTop:10,fontSize:10,fontWeight:700}}>History</Text>
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
    marginTop:30

  },
  line:{
    height:4,
    width:300,
    backgroundColor:'#56CCF2',
    marginLeft:20
  },
  sign:{
    width:100, 
    height:30,
    borderRadius:30,
    backgroundColor: '#56CCF2',
    marginLeft:40,
    marginTop:150,
    // borderWidth:3
  },
  sign1:{
    width:100, 
    height:30,
    borderRadius:30,
    backgroundColor: '#56CCF2',
    marginLeft:150,
    marginTop:'-7%',
    // borderWidth:3
  },
  sign2:{
    width:100, 
    height:30,
    borderRadius:30,
    backgroundColor: '#56CCF2',
    marginLeft:270,
    marginTop:'-8%',
    // borderWidth:3
  },
});