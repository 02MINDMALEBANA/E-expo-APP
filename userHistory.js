
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View , Card} from 'react-native'

export default function UserHistory({route}) {
    const {image} = route.params
  return (
    <SafeAreaView>
    <StatusBar backgroundColor='#2963E1' barStyle='dark-content' />
       <View style={styles.search}>
      <Ionicons name='md-clock' size={20} color='black' style= {{marginRight:20}}/>
      <Text style={styles.name} placeholder='History'/>
      </View>
      <Card style={styles.card}>
  {
    Varsities.map((v, i) => {
      return (
        <SafeAreaView>
        <View key={i} style={styles.Varsities}>
            <Ionicons name='md-time' size={20} color='black' style= {{marginRight:20}}/>
            <Ionicons name='md-calendar' size={20} color='black' style= {{marginRight:20}}/>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: v.image }}
          />
         
        </View>
        <View style={styles.footer}>

        </View>
        </SafeAreaView>
      );
    })
  }
</Card>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    card:{
        width:250,
        height:150,
        backgroundColor:'#56CCF2'

    },
    footer:{
        backgroundColor:'#184FDA',
        borderTopRightRadius:20
    }
})
