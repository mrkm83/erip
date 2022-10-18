import  React ,{useState}from 'react';
import { View, Text,Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import image from '../../aasets/index';
  import { scale, verticalScale, moderateScale } from 'react-native-size-matters-ch';
import Heder from '../../Compoent/HeaderCompent';
const  Verificationotp=({navigation})=> {
  const [Verification
,setVerification
] = useState()
  return (
   <View  style={{flex:1, }}>
   <Heder  name1={'Verification'}/>
   <ScrollView style={{flex:1,backgroundColor:"white"}}>
   <View style={{height: moderateScale(80),
          width:'100%',
 justifyContent:"center",
alignItems:"center",

 flexDirection:"column",
 marginBottom:scale(10)

  }}>



<Text style={{textAlign:"center",color:"#000000",fontSize:scale(21.3),alignItems:"center",fontWeight:"600"

}}>
Verification
</Text>
</View>

         <View style={{height: moderateScale(45),
          width:'100%',
 justifyContent:"center",
alignItems:"center",
margin:moderateScale(2),
marginBottom:moderateScale(10)

 }}>

  <View style={{height: moderateScale(40),
          width:'100%',
 justifyContent:"center",
alignItems:"center",
margin:5
 }}>

<Text style={{textAlign:"center",color:"#000000",fontSize:18,alignItems:"center",marginLeft:8
,fontWeight:"700"

}}>
Enter OTP received to proceed
</Text>

 </View>

<View style={{height: moderateScale(58),
 width:'100%',
  justifyContent:"center",
  flexDirection:"row",
  marginLeft:22,
  
   }}>
   <View style={{height: moderateScale(50),
 width:'100%',
  justifyContent:"center",
  flexDirection:"row",
 
   }}>

<Text style={{ color:"#000000",fontSize:scale (17), 
fontWeight:"700"
}}>
OTP sent on 9909991857   
</Text>
<View style={{height: moderateScale(25),
 width:'8%',
 justifyContent:"center",
      
   }}>
<Image


style={{height:15,width:15, marginLeft:scale(12)}}
source={image.pencil}

/>
</View>
</View>
 
</View>
</View>




 <View style={{height: moderateScale(100),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center"
 
   }}>


 <View style={{height: moderateScale(50),
 width:'80%',
   flexDirection:"column",
    marginTop:38,
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#0C7EFA",
   borderRadius:10,

 
   }}>

<TextInput

value={Verification}
onChangeText={setVerification}

style={{textAlign:"center",marginLeft:moderateScale(30),

fontSize:scale(16),   color:"black"

}}

placeholder='**************


'
placeholderTextColor={'#7E7E7E'}
 
keyboardType="decimal-pad"
/>


</View>

</View>



 <View style={{height: moderateScale(70),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center"
 
   }}>


 
<TouchableOpacity      


 
style={{height: moderateScale(50),
 width:'80%',
   flexDirection:"column",
    marginTop:moderateScale(12),
   justifyContent:"center",
  //  borderWidth:1,
  //  borderColor:"#0C7EFA",
   borderRadius:10,backgroundColor:"#F9623B"

 
   



}} 

        onPress={() => navigation.navigate('Address')}

    >
 <Text style={{textAlign:"center",fontSize:scale(16),marginLeft:moderateScale(15),color:"white"}}>
 
 
INVALID OTP
 </Text>
 </TouchableOpacity>

{/* </View> */}

</View>


                        <View style={{ height: moderateScale(73), width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: moderateScale(3),flexDirection:'row'}}>
                        <Text style={{ fontSize: scale(16), color: 'black',marginBottom:scale(18), }}>
Did not get OTP? 
                        </Text>
                        <TouchableOpacity  

                                                     onPress={() => navigation.navigate('Registrationstep')}

                        >
                        <Text style={{ fontSize: scale(16), color: '#0C7EFA',marginBottom:scale(18),borderBottomWidth:0.8,
 borderBottomColor:"#0C7EFA", }}>
                            Resend OTP
                        </Text>
                        </TouchableOpacity>
                        </View>

 </ScrollView>
</View>
 
   
 

   );
}

export default Verificationotp;
