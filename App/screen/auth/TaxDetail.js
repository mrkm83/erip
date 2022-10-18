import  React, { useState } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import image from '../../aasets/index'
  import { scale, verticalScale, moderateScale } from 'react-native-size-matters-ch';

import HeaderResitison from '../../Compoent/HeaderResitison';
 const  TaxDetail=({navigation})=> {


  const [Adhar,setAdhar]= useState();
    const [pan,setpan]= useState();

  return (
   <View  style={{flex:1,flexDirection:"column" }}>
     
<HeaderResitison  name="Step 3/3"/>
<ScrollView   style={{flex:1,backgroundColor:"white"}}>

 <View style={{height: moderateScale(50),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
    padding:moderateScale(16)
    ,
    alignItems:"center"
 
  
   }}>
      <Text style={{color:"#000000",fontSize:scale(15),fontWeight:"600"}}>Enter your Tax Details
</Text>

   </View>
 


<View style={{
   height:moderateScale(240),
   width:"100%", 
   justifyContent:"center",
  }}>
<View style={{
   height:moderateScale(230),
   width:"90%", 
    marginLeft:scale(20),
   borderWidth:1,
   borderColor:"#C8C8C8",
   borderRadius:scale(10)

 }}>
 <View style={{height: moderateScale(80),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
        marginTop:scale(15),
        
 
  
   }}>


 <View style={{height: moderateScale(50),
 width:'80%',
     borderWidth:1,
   borderColor:"#0C7EFA",
   borderRadius:10,

 
   }}>

<TextInput


style={{ marginLeft:moderateScale(30),

fontSize:scale(12),
color:"black"
}}

placeholder='GST Number



'
placeholderTextColor={'#7E7E7E'}
value={Adhar}
onChange={setAdhar}

keyboardType="decimal-pad"
/>


</View>

</View>
 <View style={{height: moderateScale(130),
 width:'100%',
    marginBottom:scale(17),
    
      
   }}>


 <View style={{height: moderateScale(120),
 width:'30%',
     borderWidth:1,
   borderColor:"#E8E8E8",
   borderRadius:8,
       backgroundColor:"#E8E8E8",
       marginLeft:scale(24),
 

 
   }}>
<View style={{height: moderateScale(48),
 width:118,
   flexDirection:"row",
    
   
        justifyContent:"center",
              alignItems:"center", 
              top:scale(8)



 
 
   }}>
 
<Text style={{color:"black",fontSize:scale(27),textAlign:"center",}}>+</Text>
</View>
<View style={{height: moderateScale(20),
 width:130,
   
    borderWidth:1,
   borderColor:"#E8E8E8",
   borderRadius:3,
        justifyContent:"center",
       alignItems:"center", 
 
top:scale(5),
  
 
   }}>
 
<Text style={{color:"#000000",fontSize:scale(12),textAlign:"center",top:scale(8),fontWeight:"600"}}>Add </Text>
<Text style={{color:"#000000",fontSize:scale(12),textAlign:"center",top:scale(10),fontWeight:"600",marginLeft:-17}}>Document
</Text>


</View>
<View 
>

</View>
</View>

</View>
 </View>
 </View>

 <View style={{height: moderateScale(280),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
    //  alignItems:"flex-end"
     position:"relative",
     marginTop:scale(120)

 
   }}>


 
<TouchableOpacity      


 
style={{height: moderateScale(50),
 width:'80%',
   flexDirection:"column",
    
   justifyContent:"center",
  //  borderWidth:1,
   borderColor:"#C4C4C4",
   borderRadius:10, 
   backgroundColor:"#C4C4C4",

   marginBottom:scale(2)
 

 
   



}} 

                         onPress={() => navigation.push('Registrationstep2')}

    >
 <Text style={{textAlign:"center",fontSize:scale(16),marginLeft:moderateScale(15),color:"white"}}>
 
 
Register
 </Text>
 </TouchableOpacity>

 
</View>

 


</ScrollView>
 </View>


 
 
   
 

   );
}

export default TaxDetail;
