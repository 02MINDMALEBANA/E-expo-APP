import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView,TextInput } from 'react-native';

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ImageBackground 
        source={require('./assets/student.jpg')}  resizeMode="cover" 
        style={styles.image}>
          {/* <Text>coding</Text> */}
          </ImageBackground>

      </View>
      <View style={styles.details}>
        <ScrollView>
        <View style={styles.personal}>
          <Text style={{color:'white',fontSize:20,fontWeight:600, marginLeft:40}}>PERSONAL DETAILS</Text>
        </View>
        <Text style={{color:'red',marginLeft:15,marginTop:10}}>*</Text><Text style={styles.names}>Full names(s)</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={{color:'red',marginLeft:15,marginTop:10}}>*</Text><Text style={styles.names}>Last name</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={{color:'red',marginLeft:15,marginTop:10}}>*</Text><Text style={styles.names}>Date of birth</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={{color:'red',marginLeft:15,marginTop:10}}>*</Text><Text style={styles.names}>ID number</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={{color:'red',marginLeft:15,marginTop:10}}>*</Text><Text style={styles.names}>Gender</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={{color:'red',marginLeft:15,marginTop:10}}>*</Text><Text style={styles.names}>Email</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={{color:'red',marginLeft:15,marginTop:10}}>*</Text><Text style={styles.names}>Nationality</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={{color:'red',marginLeft:15,marginTop:10}}>*</Text><Text style={styles.names}>Ethic</Text>
        <TextInput style={styles.input}></TextInput>

        <View style={styles.personal}>
          <Text style={{color:'white',fontSize:20,fontWeight:600, marginLeft:40}}>EDUCATIONAL INFORMATION</Text>
        </View>
        <Text style={{color:'red',marginLeft:15,marginTop:10}}>*</Text><Text style={styles.names}>Highest Grade</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={{color:'red',marginLeft:15,marginTop:10}}>*</Text><Text style={styles.names}>Year passed</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={{color:'red',marginLeft:15,marginTop:10}}>*</Text><Text style={styles.names}>Highest Qualification</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={{color:'red',marginLeft:15,marginTop:10}}>*</Text><Text style={styles.names}>Qualification year passed</Text>
        <TextInput style={styles.input}></TextInput>

        <TouchableOpacity>
          <View style={styles.submit}>
            <Text style={{color:'white',marginLeft:20,marginTop:10,fontSize:16,fontWeight:700}}>submit</Text>
          </View>
        </TouchableOpacity>
        
      </ScrollView>
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
  top:{
    width:360,
    height:360,
    marginTop:'0%'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity:0.7
  },
  details:{
    width:370,
    height:500,
    // borderWidth:3,
    borderTopLeftRadius:70,
    borderTopEndRadius:70,
    marginTop:'-20%',
    backgroundColor:'white',
  },
  personal:{
    height:33,
    width:370,
    backgroundColor:'#56CCF2',
    marginTop:60,
  },
  names:{
    marginLeft:30,
    marginTop:'-5%',
    fontSize:15,
    fontWeight:600

  },
  submit:{
    width:171, 
    height:44,
    borderRadius:30,
    backgroundColor: '#56CCF2',
    marginLeft:40,
    marginTop:30,
    // borderWidth:3
  },
  input:{
    borderWidth:3,
    borderColor:'#2963E1',
    marginLeft:200,
    marginTop:'-5%'
  }
});
