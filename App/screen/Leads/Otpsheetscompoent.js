import React, { useRef,useState } from 'react';
import { View, Text ,Image,Dimensions, TouchableOpacity,TextInput} from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import SyncStorage from 'sync-storage';
import CountDown from 'react-native-countdown-component';
import imagePath from '../../utils/imagePath';
const  Otpsheetscompoent=(props)=> {

  
    const refRBSheet2 = useRef();

    const [number,setchange]=useState('')
    const navigation = useNavigation();
    const [remsecond , setremsecond] = useState(20);
    const [resendopt ,setresendopt] = useState(false);

    const {name}= props;

    const [form_error_otp, setFormotp] = React.useState({
        otp_error :'',
        

   });

   const [resendsms , setresnd] = useState({
    resendmsg : '',
})

    const otp_verify = e =>{
        e.preventDefault();

        if(number==''){
            const nextFormState = {
                ...form_error_otp,
                otp_error: 'please enter OTP',
                
              };
              setFormotp(nextFormState);

        }else{
            let token = SyncStorage.get('token');
   
            let order_e_id = SyncStorage.get('order_e_id');

            let  bearer = 'Bearer ' + token;

        fetch('http://43.204.87.153/api/v1/partners/lead_start_job_verify', {

            method: 'POST',
            body: JSON.stringify({
                order:order_e_id,
                otp:number,
             }), //post body
            headers: {
              'Authorization': bearer,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },


          }).then((response) => response.json())
          .then((responseJson) => {
            // alert(responseJson.success);
            // alert(responseJson.message);
            // console.warn(responseJson.success);
            if(responseJson.success==true){
            //   fetch_remark();
            //   add_tabledata();
            navigation.navigate('Orderdetails_afterjob', { });

            }else{

                const nextFormState = {
                    ...form_error_otp,
                    otp_error: responseJson.message,
                    
                  };
                  setFormotp(nextFormState);


            }
            //  refRBSheet2.current.close()
          

          }).catch((error) => {
            //Error 
            console.error(error);
        });

          

            

        }
        
        // alert(number);
    }

    const resend_otp = () =>{
        let token = SyncStorage.get('token');
   
            let order_e_id = SyncStorage.get('order_e_id');

            let  bearer = 'Bearer ' + token;
        fetch('http://43.204.87.153/api/v1/partners/lead_start_job_resend', {
            method: 'POST',
            body: JSON.stringify({
                order:order_e_id,
                // otp:Verification
                }), //post body
            headers: {
                'Authorization': bearer,
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
<View style={{ height: moderateScale(280), width: '100%', alignItems: 'center', flexDirection: 'column', }}>
            <View style={{ height: moderateScale(40), width: '90%', alignItems: 'flex-start', justifyContent: 'center', }}>
                <Text style={{ fontSize: scale(15), textAlign: 'center', color: 'black',fontWeight:"500" }}>
                    Enter OTP Received From Client To Stat Job
                </Text>
            </View>
            <View style={{ height: moderateScale(280), width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                <View style={{ height: moderateScale(75), width: '100%', justifyContent: 'center', alignItems: "center" }}>
                    <TextInput
                        style={{
                            height: moderateScale(50),
                            borderRadius: 10,
                            fontSize: scale(16),
                            borderWidth: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            borderColor: '#0C7EFA',
                            width: '90%',
                        }}
                         value={number}
                        placeholder="*  *  *  *"
                       keyboardType="decimal-pad"
                        placeholderTextColor={"grey"}
                        onChangeText={(text) => setchange(text)}

                        // autoFocus={true}
                    />
                    <Text>{form_error_otp.otp_error}</Text>
                </View>
                <View style={{ height: moderateScale(180), width: '100%', flexDirection: 'column', alignItems: 'center', }}>
                    <TouchableOpacity
                    //  onPress={() => navigation.navigate('OrderDetailscreen2')}
                    onPress={otp_verify}
                    
                    
                    style={{ height: moderateScale(50), width: '90%', borderRadius: moderateScale(12), backgroundColor: '#0085FF', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: scale(16), color: 'white' }}>Submit OTP</Text>
                    </TouchableOpacity>
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
{ resendopt &&(
                    <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: moderateScale(5), flexDirection: 'row' }}>
                        <Text style={{ fontSize: scale(16), color: 'black' }}>
                            Dont not get OTP?
                        </Text>
                        <TouchableOpacity onPress={()=>resend_otp()}>
                            <Text style={{ fontSize: scale(16), color: '#0C7EFA' }}>
                                Resend OTP
                            </Text>
                        </TouchableOpacity>
                    </View>
)}

                </View>
            </View>
        </View>

  );
}

export default Otpsheetscompoent;