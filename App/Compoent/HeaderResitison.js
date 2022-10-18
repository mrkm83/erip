import React from 'react';
import { View, Text ,Image,Dimensions, TouchableOpacity} from 'react-native';
  import { scale, verticalScale, moderateScale } from 'react-native-size-matters-ch';
import { useNavigation } from '@react-navigation/native';

 import image from '../aasets/index'
const  HeaderResitison=(props)=> {
    const navigation = useNavigation();

    const {name}= props;

  return (
   <View style={{ 
        height: moderateScale(48),
        padding: moderateScale(5),
        width:'100%',
         flexDirection:"row",
        backgroundColor:"white"
          }}>


             <View style={{ 
        height: moderateScale(48),
        padding: moderateScale(5),
        width:'100%',
marginTop:8,
        flexDirection:"row",
        backgroundColor:"white"
          }}>
   <TouchableOpacity   style={{
 
            height: moderateScale(44),
        padding: moderateScale(5),

                     marginRight:moderateScale(1),
                     with:"30%"

    }}
    
 onPress={() => navigation.goBack()}  
 
   >
 <Image
 style={{height:15,width:18,
 marginLeft:5
 }}
 source={image.back}
 

 />   
   
   </TouchableOpacity>
   <View   style={{



            height: moderateScale(40),
         width:'55%',
         flexDirection:"row",
          justifyContent:"flex-end",
         
        
    
   }}>
   <Text style={{textAlign:"center",color:"#000000",fontSize:scale(19),marginTop:3}}>Rigistration</Text>
   
   
   </View>




      <TouchableOpacity   style={{



            height: moderateScale(40),
         width:'34%',
         flexDirection:"row",
          marginLeft: moderateScale(10),
         justifyContent:"flex-end",
         alignItems:"center",

          
          
        
    
   }}
    //onPress={() => navigation.navigate('Registrationstep2')}  
            // onPress={() => navigation.push('Registrationstep2')}


   >
   <Text style={{textAlign:"center",color:"#0085FF",fontSize:scale(12),    marginBottom:scale(15),     marginStart:scale(-18)
}}>
   
   
   {name}
   </Text>
   
   
   </TouchableOpacity>
   </View>
    </View>
  );
}

export default HeaderResitison;
