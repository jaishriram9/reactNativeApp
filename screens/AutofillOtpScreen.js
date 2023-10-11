import React from 'react'
import { View, Text, StyleSheet,Image } from "react-native";


const AutofillOtpScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={{color:"black",fontWeight:'400',fontSize:16,}}>We have sent a verification code to</Text>
        <Text style={{color:"black",fontWeight:'400',fontSize:16}}>+91-9010858965</Text>
        <View style={{flexDirection:"row",width:"50%",justifyContent:"space-between",marginTop:10}}>
            {
                [1,2,3,4,5,6].map((_,index)=>
                    <View style={{width:30,height:35,borderWidth:1,borderColor:"#C4C4C4",borderRadius:5}}/>
                )
            }
        </View>
        <View style ={{height:"88%",width:"90%",justifyContent:"flex-end",alignItems:"center"}}>
            <Text style={{color:"black",fontWeight:'400',fontSize:16,marginBottom:20}}>0:19</Text>
            <View style={{flexDirection:"row"}}>
                <Text style={{color:"black",fontWeight:'400',fontSize:16,marginHorizontal:15}}>Didn’t receive the code?</Text>
                <Text style={{color:"#C4C4C4",fontWeight:'400',fontSize:16,}}>Resend now</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       marginTop:'15%',
       width:"100%",
    //    borderWidth:1,
       alignItems:"center"

    }
})

export default AutofillOtpScreen
