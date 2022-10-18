import  React, { useState } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import image from '../../aasets/index';
  import { scale, verticalScale, moderateScale } from 'react-native-size-matters-ch';

  import SyncStorage from 'sync-storage';
  import moment from 'moment';

import Heder from '../../Compoent/HeaderCompent';
import CountDown from 'react-native-countdown-component';
const  RegistrationVerfiction=({navigation})=> {

  const [Verification,setVerification] = useState()

  const [sucess_text,setsucess_text] = useState('VERIFY')
  const [btncolor,setbtncolor] = useState('#0C7EFA')
  const [resendopt ,setresendopt] = useState(false);
const [remsecond , setremsecond] = useState(20);

const [resendsms , setresnd] = useState({
  resendmsg : '',
})

  let mobile = SyncStorage.get('mobile');
const onSubmitForm = e => {
  // alert(Verification);
//  alert(SyncStorage.get('mobile')) ;
    
     let full_name = SyncStorage.get('full_name');
     let email = SyncStorage.get('email');
     let dob = SyncStorage.get('dob');
     let blod_group = SyncStorage.get('blod_group');
     let category = SyncStorage.get('category');
     let category_experiance = SyncStorage.get('category_experiance');
     let gender= SyncStorage.get('gender');
// alert(moment(dob).format('DD-MM-YYYY'))
let newdob = moment(dob).format('DD-MM-YYYY');

     fetch('http://43.204.87.153/api/v1/partners/verify_registration_otp', {
                method: 'POST',
                body: JSON.stringify({
                  fullname: full_name,
                  dob:newdob,
                  blood_group:blod_group,
                  gender:gender,
                  mobile:mobile,
                  email:email,
                  mobile_otp:Verification,
                  category:category,
                  category_experiance:2


                    }), //post body
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                //Request Type 
            }).then((response) => response.json())
            .then((responseJson) => {;
              // alert(responseJson.success)
          console.warn(responseJson);
            //  alert(responseJson.partner_details.partner_id);
            // console.warn(responseJson.partner_details[0].partner_id)
              if(responseJson.success==true){
                // navigation.navigate('Address')
                navigation.navigate('Address', { });
                SyncStorage.set('partnel_id', responseJson.partner_details[0].partner_id);

              }else{
                setsucess_text('INVALID OTP');
                setbtncolor('#F9623B');
                // console.warn(responseJson.message);

              }

            }).catch((error) => {
              //Error 
              console.error(error);
          });


}
const redesndotp = () =>{
  
  fetch('http://43.204.87.153/api/v1/partners/resend_registration_otp', {
    method: 'POST',
    body: JSON.stringify({
        mobile: mobile,
        // otp:Verification
        }), //post body
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },

  }).then((response) => response.json())
  .then((responseJson) => {
//  console.warn(responseJson);
const nextFormState = {
  ...resendsms,
  resendmsg:responseJson.message,
 
 
};
setresnd(nextFormState);
setremsecond(30);
setresendopt(false);


      
    

  }).catch((error) => {
    //Error 
    console.error(error);
});    

  // alert("Working");
}
  return (
   <View  style={{flex:1, }}>
   <Heder name1={'Verification'}/>

   <ScrollView   style={{flex:1,backgroundColor:"white"}}>
   <View style={{height: moderateScale(69),
          width:'100%',
 justifyContent:"center",
alignItems:"center",
flexDirection:"row",
   }}>



<Text style={{textAlign:"center",color:"#000000",fontSize:scale(21),alignItems:"center",fontWeight:"600"

}}>
Verification
</Text>
</View>

         <View style={{height: moderateScale(100),
                    width:'100%'
,
 justifyContent:"center",
// alignItems:"center",
margin:moderateScale(2),
marginBottom:moderateScale(8),


 }}>

  <View style={{height: verticalScale(42),
          width:'100%',
 justifyContent:"center",
alignItems:"center",
margin:5,

 }}>

<Text style={{textAlign:"center",color:"#000000",fontSize:scale(18), marginLeft:3
,fontWeight:"700"

}}>
Enter OTP received to proceed
</Text>

 </View>
 <View style={{height: moderateScale(40),
 width:'100%',
  justifyContent:"center",
  flexDirection:"row",
  
   }}>
   <View style={{height: moderateScale(35),
 width:'60%',
  justifyContent:"center",
  flexDirection:"row",  

 
   }}>

<Text style={{ color:"#000000",fontSize:scale (17), 
fontWeight:"700"
}}>
OTP sent on {mobile} 
</Text>
<View style={{height: moderateScale(25),
 width:'10%',
 justifyContent:"center",
      
   }}>
<Image


style={{height:15,width:15, marginLeft:scale(7)}}
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
    marginTop:33,
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#0C7EFA",
   borderRadius:10

 
   }}>

<TextInput

value={Verification}
onChangeText={setVerification}
style={{textAlign:"center",marginLeft:moderateScale(30),

fontSize:scale(16),
color:"black"
}}

placeholder='**************


'
placeholderTextColor={'#7E7E7E'}
 
keyboardType="decimal-pad"
/>


</View>

</View>



 <View style={{height: moderateScale(55),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
    marginTop:scale(8)
 
   }}>

 
<TouchableOpacity      


        // onPress={() => navigation.navigate('Verificationotp')}
        onPress={onSubmitForm}

style={{height: moderateScale(50),
 width:'80%',
   flexDirection:"column",
    marginTop:moderateScale(5),
   justifyContent:"center",
   borderWidth:1,
   borderColor:btncolor,
   borderRadius:10,
   backgroundColor:btncolor

 
   



}}     >
 <Text style={{textAlign:"center",fontSize:scale(16),marginLeft:moderateScale(15),color:"white"}}>
 
 
 {sucess_text}

 </Text>
 </TouchableOpacity>

 
</View>

 <View style={{ height: moderateScale(75)}}>
 <View style={{ height: moderateScale(70)}}>
 <Text  style={{ fontSize: scale(16), color: 'green',marginTop:scale(7) }}>{resendsms.resendmsg}</Text>
 { !resendopt &&(
 <View>
<CountDown
       until={60 * 10 + 30}
        
        size={30}
        until={remsecond}
        onFinish={() => setresendopt(true)}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#0C7EFA'}}
        timeToShow={['S']}
       timeLabels={{m: 'MM', s: ''}}
      //  running = {false}
      />
      </View>
 )}
      </View>

 </View>

 { resendopt &&(

 <View style={{height: moderateScale(48),
 width:'100%',
  justifyContent:"center",
  flexDirection:"row",
  marginTop:moderateScale(18),
    }}>


   <View style={{height: moderateScale(44),
 width:'55%',
  justifyContent:"center",
  flexDirection:"row",
  marginTop:scale(4)
 
   }}>

<Text style={{ color:"#000000",fontSize:scale(15), 
fontWeight:"700",

}}>
Did not get OTP?</Text>
</View>
<TouchableOpacity onPress={()=>redesndotp()}>
<View style={{height: moderateScale(44),
 width:'30%',
 justifyContent:"center",
 marginStart:moderateScale(-35),  marginTop:scale(-1)



     
   }}>
 <Text  style={{color:"#0C7EFA",fontSize:scale(14), marginTop:moderateScale(-12),
  borderBottomWidth:0.8,
 borderBottomColor:"#0C7EFA",
 width:90,
 
}}>
 
  Resend OTP
 </Text>
</View>
</TouchableOpacity>





</View>

 )}

 <View style={{height: moderateScale(40),
 width:'100%',
  justifyContent:"center",
  flexDirection:"row",
  marginTop:5,
    }}>
   <View style={{height: moderateScale(35),
 width:'70%',
  justifyContent:"center",
  flexDirection:"row",
 
   }}>

<Text style={{ color:"#000000",fontSize:16, 
fontWeight:"700",
marginLeft:scale(4),
}}>
  Change mobile number?



</Text>
</View>
<View style={{height: verticalScale(35),
 width:'20%',
 justifyContent:"center",
 marginStart:-50,
   }}>
 <Text  style={{color:"#0C7EFA",fontSize:14, marginTop:-12,
  borderBottomWidth:0.8,
 borderBottomColor:"#0C7EFA",
 width:50

 
}}>
Change
 </Text>
</View>
</View>
</ScrollView>
</View>
 
   
 

   );
}

export default RegistrationVerfiction;
