import React from 'react';
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters-ch';
 import Header from '../../Compoent/HeaderCompent';
 import SyncStorage from 'sync-storage';

const Login = ({navigation}) => {
    const [number, onChangeNumber] = React.useState(null);
    const [form, setForm] = React.useState({
        mobile:'',
        mobile_error:'',
        is_log_status:'',


    });
    const onUpdateField = e => {
        //   alert(form.mobile);
        const nextFormState = {
          ...form,
          mobile: e,
        };
        setForm(nextFormState);
       
         

      };
    const onSubmitForm = e => {
        //  let partner_id = SyncStorage.get('partnel_id');
       
        //  alert(partner_id);

        e.preventDefault();
        let mobile = form.mobile;

        if(mobile==''){
            //    alert("please enter a valid mob");
            const nextFormState = {
                ...form,
                mobile_error: 'please enter mobile number',
              };
              setForm(nextFormState);
            //    this.setState({mobile_error:'please enter a valid mobile numner'});
    
           }else if((isNaN(mobile)) ||(mobile.length!=10)){

            const nextFormState = {
                ...form,
                mobile_error: 'please enter a valid mobile number',
              };
              setForm(nextFormState);

           }else{
            const nextFormState = {
                ...form,
                mobile_error: '',
                
              };
              setForm(nextFormState);

              fetch('http://43.204.87.153/api/v1/partners/send_login_otp', {
                method: 'POST',
                body: JSON.stringify({
                    mobile: mobile,
                    }), //post body
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                //Request Type 
            })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                
                if(responseJson.success==false){
                     const nextFormState = {
                    ...form,
                     mobile_error: responseJson.message,
                    
                    
                  };
                  setForm(nextFormState);
                  SyncStorage.set('mobile', mobile);

                //   navigation.navigate('Verfication', { });

                }else{
                    SyncStorage.set('mobile', mobile);
                    navigation.navigate('Verfication', { });
                }

                //  alert(form.is_log_status)
            })
            //If response is not in json then in error
            .catch((error) => {
                //Error 
                console.error(error);
            });
            //   navigation.navigate('RegistrationVerfiction', { })

           }



       


    }
    return (
        <View style={{ flex: 1, flexDirection: 'column',backgroundColor: 'white',  }}>
            <Header  name1={'Login'}/>
            <ScrollView>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <View style={{ height: moderateScale(210), width: '80%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: scale(22), color: 'black' }}>Log-in with your</Text>
                        <Text style={{ fontSize: scale(22), color: 'black' }}>Phone Number</Text>
                    </View>
                    <View style={{ height: moderateScale(70), width: '90%', marginRight: moderateScale(9) }}>
                        <TextInput
                            style={{
                                height: moderateScale(50),
                                borderRadius: 10,
                                fontSize: scale(16),
                                borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: 80,
                                borderColor: '#0C7EFA',
                                color:'grey'
                            }}
                            onChangeText={onChangeNumber}
                            value={form.mobile}
                            placeholder="Enter your phone number "
                            keyboardType="numeric"
                            placeholderTextColor={"grey"}
                            onChangeText={(text)=>{onUpdateField(text)}}
                        />
                        <Text>{form.mobile_error}</Text>
                    </View>
                    <View style={{marginRight: moderateScale(9), height: moderateScale(200), width: '100%', flexDirection: 'column',   alignItems: 'center',marginTop:12 }}>
                        <TouchableOpacity style={{ height: moderateScale(50), width: '90%', borderRadius: moderateScale(10),   backgroundColor: '#0085FF', alignItems: 'center', justifyContent: 'center' }}
                          onPress={onSubmitForm}
                        >
                        <Text style={{ fontSize: scale(16), color: 'white' }}>Request OTP</Text>

            
                        </TouchableOpacity>
                        <TouchableOpacity  style={{width: '100%'}}

                                                     onPress={() => navigation.navigate('Registrationstep')}

                        >
                        <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: moderateScale(25),flexDirection:'row'}}>
                        <Text style={{ fontSize: scale(16), color: 'black' }}>
                            Dont have an account?  
                        </Text>
                        
                        <Text style={{ fontSize: scale(16), color: '#0C7EFA' }}>
                           Register
                        </Text>
                        
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default Login
