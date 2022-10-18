import React from 'react';
import { View, Text ,Image,Dimensions, TouchableOpacity} from 'react-native';
  import { scale, verticalScale, moderateScale } from 'react-native-size-matters-ch';
import { useNavigation } from '@react-navigation/native';

 import image from '../aasets/index'
const  HeaderCompent=(props)=> {
      const navigation = useNavigation();
    const {name1}= props;

  return (
   <View style={{  
        height: verticalScale(48),
        padding: moderateScale(5),
        width:'100%',
        flexDirection:"row",        backgroundColor:"white"


          }}>
             <View style={{  
        height: verticalScale(48),
        padding: moderateScale(5),
        width:'100%',
marginTop:8,
        flexDirection:"row",        

          }}>
   <TouchableOpacity   style={{
 
            height: verticalScale(40),
        padding: moderateScale(5),

                     marginRight:moderateScale(1),




                     width:"15%"

    }}
    
 //onPress={() => navigation.goBack()}  
 
   >
 <Image
 style={{height:18,width:20,
 marginLeft:4
 }}
 source={image.back}
 

 />   
   
   </TouchableOpacity>
   <View   style={{



            height: verticalScale(45),
            width:"65%",
          flexDirection:"row",
          justifyContent:"center"
           
        
    
   }}>
   <Text style={{textAlign:"center",color:"#000000",fontSize:20,marginTop:3,marginLeft:23,fontWeight:'bold'}}>
   
   {name1}
    
   </Text>
   
   </View>
   </View>
    </View>
  );
}

export default HeaderCompent;
