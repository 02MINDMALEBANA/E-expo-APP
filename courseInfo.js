import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';

export default function CourseInfo(){
    return(
        <View style={styles.container}> 
            <View style={styles.info}>
                
                <Text style={{color:'#2963E1',fontSize:24,fontWeight:400,marginLeft:80}}>Course Info</Text>
           
         </View>
         <Text style={{color:'#2963E1',fontSize:24,fontWeight:400,marginTop:30}}>Bachelor of Architecture (B8BA3Q)</Text>
            <View style={styles.detail} >
                <Text style={{marginLeft:10,marginTop:30}}>
                                The programme is an entry-level qualification that addresses all knowledge fields in Architecture. The programme focuses specifically on the theoretical and social aspects of Architecture. It enables you to tailor your studies to your own interest and career plans. This type of qualification can be followed by additional postgraduate studies to prepare you for a career in a specific field.

                                        Architectural professionals are involved in shaping the built environment. From low-rise public projects to multilevel private buildings. Architectural professionals are employed in the design, technological resolution and onsite supervising of the construction of projects.</Text>
            </View>
            <View style={styles.bottom}>
            <TouchableOpacity>
          <View style={styles.apply}>
         
            <Text style={{color:'white',marginLeft:60,marginTop:10,fontSize:16,fontWeight:700}}>Apply</Text>
          </View>
        </TouchableOpacity>
            </View>
       
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    info:{
        width:329,
        height:48,
        borderRadius:18,
        borderWidth:3,
        borderColor:'#2963E1',
        marginTop:60
                                        

    },
    detail:{
        height:386,
        width:370,
        borderTopLeftRadius:26,
        borderTopRightRadius:26,
        backgroundColor:'#56CCF2',
        marginTop:30,
    },
    bottom:{
        height:200,
        width:370,
        // borderTopLeftRadius:26,
        borderBottomLeftRadius:26,
        borderTopRightRadius:250,
        backgroundColor:'#184FDA',
        marginTop:30,
    },
    apply:{
        width:171, 
        height:44,
        borderRadius:30,
        backgroundColor: '#56CCF2',
        marginLeft:30,
        marginTop:50,
        // borderWidth:3
      },
})