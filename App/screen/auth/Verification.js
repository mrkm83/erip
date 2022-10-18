import  React, { useState } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import image from '../../aasets/index';
  import { scale, verticalScale, moderateScale } from 'react-native-size-matters-ch';
  import SyncStorage from 'sync-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
import Heder from '../../Compoent/HeaderCompent';
import CountDown from 'react-native-countdown-component';
const  Verification=({navigation})=> {

  const [Verification,setVerification] = useState('')

const [sucess_text,setsucess_text] = useState('VERIFY')
const [btncolor,setbtncolor] = useState('#0C7EFA')
let mobile = SyncStorage.get('mobile');
const [resendopt ,setresendopt] = useState(false);
const [remsecond , setremsecond] = useState(20);

const [resendsms , setresnd] = useState({
     resendmsg : '',
})

const onSubmitForm =   async (e) =>{
    // alert(Verification);

 

 
  if(Verification == ''){
    setsucess_text('INVALID OTP');
    setbtncolor('#F9623B');

  }else{

    fetch('http://43.204.87.153/api/v1/partners/verify_login_otp', {
      method: 'POST',
      body: JSON.stringify({
          mobile: mobile,
          otp:Verification
          }), //post body
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },

    }).then((response) => response.json())
    .then((responseJson) => {

       console.warn(responseJson);
      // alert(responseJson.success);
      // console.warn();
      if(responseJson.success==true){
       

        // 
        let partner_id = responseJson.partner_data.partner_id;
        let partner_fullname = responseJson.partner_data.partner_fullname;
        let partner_email = responseJson.partner_data.partner_email;
        let token = responseJson.authorisation.token;

        // async () => {
          
        //   try {
        //     await AsyncStorage.setItem(
        //       'login_token',
        //       token
        //     );
        //   } catch (error) {
        //     // Error saving data
        //   }
        // }
        
        retrieveData(token);

        // AsyncStorage.setItem('LOGIN_TOKEN', "token")
        SyncStorage.set('partner_id', partner_id);
        SyncStorage.set('partner_fullname', partner_fullname);
        SyncStorage.set('partner_email', partner_email);
        SyncStorage.set('token', token);
        
        
        

        

       
    // alert(token);

      }else{

        setsucess_text('INVALID OTP');
        setbtncolor('#F9623B');

      }
    

}).catch((error) => {
                        //Error 
                        console.error(error);
                    });    
    // setsucess_text('VERIFY');
    // setbtncolor('#0C7EFA');

  }
     
  
}

const retrieveData =  async (token) => {
  try {
    await AsyncStorage.setItem(
      'login_token',
      token
    );

    navigation.navigate('Home', { });
  } catch (error) {
    // Error saving data
  }
};

const resend_otp = async(e) =>{

  fetch('http://43.204.87.153/api/v1/partners/resend_login_otp', {
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
    // console.warn(responseJson);
   

      const nextFormState = {
        ...resendsms,
        resendmsg:responseJson.message,
       
       
      };
      setresnd(nextFormState);
      setremsecond(30);
      setresendopt(false)
    

  }).catch((error) => {
    //Error 
    console.error(error);
});    

  
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
OTP sent on {mobile}
</Text>
 
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
onChangeText={(text)=>setVerification(text)}
style={{textAlign:"center",marginLeft:moderateScale(30),

fontSize:scale(16),
color:"black"
}}

placeholder='* * * * * *


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
        onPress = {onSubmitForm}

style={{height: moderateScale(50),
 width:'80%',
   flexDirection:"column",
    marginTop:moderateScale(5),
   justifyContent:"center",
   borderWidth:1,
   borderColor:btncolor,
   borderRadius:10,backgroundColor:btncolor

 
   



}}     >
 <Text style={{textAlign:"center",fontSize:scale(16),marginLeft:moderateScale(15),color:"white"}}>
 
 
 {sucess_text}

 </Text>
 </TouchableOpacity>

 
</View>
<View style={{ height: moderateScale(68), width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: moderateScale(3)}}>
<Text  style={{ fontSize: scale(16), color: 'green',marginTop:scale(7) }}>{resendsms.resendmsg}</Text>
{ !resendopt &&(
<View style={{ height: moderateScale(58)}}>
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
{ resendopt &&(
<TouchableOpacity  

                                                     onPress={() => resend_otp()}

                        >
                        <View style={{ height: moderateScale(58), width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: moderateScale(3),flexDirection:'row'}}>
                        <Text style={{ fontSize: scale(16), color: 'black',marginTop:scale(7), }}>
Did not get OTP? 
                        </Text>
                        
                        <Text style={{ fontSize: scale(16), color: '#0C7EFA',marginTop:scale(7), borderBottomWidth:0.8,
 borderBottomColor:"#0C7EFA",
 }}>
                            Resend OTP
                        </Text>
                        
                        </View>
                        </TouchableOpacity>
                        )}
                        <TouchableOpacity  

onPress={() => navigation.navigate('Login')}

>
                        <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: moderateScale(3),flexDirection:'row'}}>
                        <Text style={{ fontSize: scale(16), color: 'black',marginBottom:scale(18), }}>
Change mobile number?
                        </Text>
                       
                        <Text style={{ fontSize: scale(16), color: '#0C7EFA',marginBottom:scale(18),borderBottomWidth:0.8,
 borderBottomColor:"#0C7EFA", }}>
                            Change
                        </Text>
                        
                        </View>
                        </TouchableOpacity>

</ScrollView>
</View>
 
   
 

   );
}

export default Verification;
