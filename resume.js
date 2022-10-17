import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, Linking } from "react-native";

export default function Resume(){
    return(
        <View style={styles.container}>
            <View style={styles.info}>
            <Image
        source={require('./assets/docicon.png')}
        style={{width:20, height:28, marginLeft:20, marginTop:10}}
        />
                <Text style={{ color: '#2963E1', marginTop:'-10%',fontSize: 24, fontWeight: 400, marginLeft: 80,}}>Resume Guideline</Text>
            </View>
            <View style={{marginLeft:30,marginTop:30}}>
                <Text>1. Use the right order</Text>
                <Text>2. There are three main type of resumes</Text>
                <Text>  i. Chronologiical: Focuses on professional experience,
                                   listed in reverse chronological order. 
                                    Most resumes use this format.</Text>
                <Text>ii. Functional: Emphasizes a large skills section over work history.</Text>
                <Text>iii. Combination: Gives equal space to your skills and work experience sections.</Text>
                <Text> 3. Don’t make it too long:  Submit a one-page resume 
                        whenever possible so the hiring 
                        manager can quickly skim your 
                        qualifications and determine 
                        you’re hireable.</Text>
                <Text>  4. Pick readable font: The best fonts for a resume are easy 
                  to read Here are a few fonts that 
                  follow resume formatting guidelines
                  and clearly present your 
                  qualifications to hiring managers:</Text>
                <Text> i. Cambria</Text>
                <Text>  ii. Calibri</Text>
                <Text>   iii. Times New Roman</Text>
                <Text> 5. Feature your name in a header: Write your name in extra- large, bold text, and then
                        list your contact information in the samefont size you use for the rest of your resume.</Text>
            </View>
            <View style={styles.bottom}>
                <Text style={{marginTop:50}}>Free online resume template</Text>
                <Text onPress={() => Linking.openURL('https://www.jobseeker.com/en/resume')}>1.	https://www.jobseeker.com/en/resume</Text>
                <Text onPress={() => Linking.openURL('https://www.resumenerd.com/')}>2.	https://www.resumenerd.com/ </Text>
                <Text onPress={() => Linking.openURL('cvmaker.com')}>3.	CV templates & examples to professionally format your CV (cvmaker.com)</Text>
                <Text onPress={() => Linking.openURL('Resume.io')}>4.	Job winning Resume Templates 2022 (Free) · Resume.io</Text>

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
        marginTop:120
        // marginTop:'-100%'
                                        

    },
    bottom:{
        height:200,
        width:370,
        // borderTopLeftRadius:26,
        borderBottomLeftRadius:26,
        borderTopRightRadius:250,
        backgroundColor:'#184FDA',
        marginTop:30,
    }
})