import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';


export default function FacultyInfo() {
  return (
  
    <View style={styles.container}>
      <View style={styles.search}>
      <Text style={{color:'#2963E1', fontWeight:500, fontSize:24}}>Faculty/College</Text>
      </View>
     
      <TouchableOpacity style={styles.touch}>
        <Text style={{padding:5,fontWeight:'light', fontSize:14}}>Faculty of Art, Design and Architecture</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch}>
        <Text style={{padding:5,fontWeight:'light', fontSize:14}}>College of Business and Economics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch}>
        <Text style={{padding:5,fontWeight:'light', fontSize:14}}>Faculty of Education</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch}>
        <Text style={{padding:5,fontWeight:'light', fontSize:14}}>Faculty of Health science</Text>
      </TouchableOpacity>
     
    </View>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start',
  },touch:{
    backgroundColor:'#56CCF2',
    width:250,
    height:80,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:19,
    marginTop: 25,

  },search:{
    borderColor: '#2963E1',
    borderWidth:1,
    borderRadius:18,
    padding:10,
    textAlign:'center',
    margin:20,
   
  }

  
});