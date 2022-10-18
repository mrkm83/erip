import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Verfication  from  '../screen/auth/Verification';
import Verificationotp from '../screen/auth/Verificationotp';
import Registration from '../screen/auth/Registration';
import Registrationstep2 from '../screen/auth/Registrationstep2';

import Documents  from '../screen/auth/Documents';
import Address  from '../screen/auth/Address';
 import OnBoarding  from '../screen/auth/OnBoarding';
import Registrationstep  from '../screen/auth/Registrationstep';
import ApplictionScreen  from '../screen/auth/ApplictionScreen';
import Login  from '../screen/auth/Login';
import RegistrationVerfiction  from '../screen/auth/RegistrationVerfiction';
import TaxDetail  from '../screen/auth/TaxDetail';
import Notification  from '../screen/auth/Notification';
import Orederdetailes2  from '../screen/auth/Orederdetailes2';
import Orederdetailes3  from '../screen/auth/Orederdetailes3';
import Home from '../Appnavigtore/BottomNav';
import DrawerNav from '../Appnavigtore/DrawerNav';

// import Orderdetails from '../screen/Leads/OrderDetailscreen'
  //import OnBoarding from '../Appnavigtore/BottomNav';

 import Orderdetails_test from '../screen/openleads/WiFi'
//import Orderdetails_afterjob from '../screen/Leads/OrderDetailscreenjobstart'
import paymnetinvoice from '../screen/Leads/Totalinvoice'

import newpart from '../screen/Leads/NewPartScreen'

import paymnetpage from '../screen/Leads/Onlinepayment'
import Onlinesuccessful from '../screen/Leads/Onlinesuccessful';
import Congratulations from '../screen/Leads/Congratulations';
import Onlinesfailed from '../screen/Leads/Onlinesfailed';

import CreateEstimate from '../screen/Leads/CreateEstimateScreen';
// import AddCreditscreen from '../screen/Wallet/AddCreditscreen';

import AddNewPart from '../screen/Leads/AddNewPart';














  

const Stack = createNativeStackNavigator();

function App1() {
  return (
    <NavigationContainer>
      {/* <DrawerNav /> */}

     <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DrawerNav" component={DrawerNav}  options={{headerShown:false}}/>

        <Stack.Screen name="OnBoarding" component={OnBoarding} 
        
        options={{headerShown:false}}
        />
         <Stack.Screen name="Verfication" component={Verfication} 
        
        options={{headerShown:false}}
        />
           <Stack.Screen name="Documents" component={Documents} 
        
        options={{headerShown:false}}
        />
         <Stack.Screen name="Verificationotp" component={Verificationotp} 
        
        options={{headerShown:false}}
        />
         <Stack.Screen name="Registration" component={Registration} 
        
        options={{headerShown:false}}
        />
        
   <Stack.Screen name="Registrationstep2" component={Registrationstep2} 
        
        options={{headerShown:false}}
        />
           <Stack.Screen name="Address" component={Address} 
        
        options={{headerShown:false}}
        />
                   <Stack.Screen name="Registrationstep" component={Registrationstep} 
        
        options={{headerShown:false}}
        />
   <Stack.Screen name="ApplictionScreen" component={ApplictionScreen} 
        
        options={{headerShown:false}}
        />
           <Stack.Screen name="Login" component={Login} 
        
        options={{headerShown:false}}
        />

        <Stack.Screen name="RegistrationVerfiction" component={RegistrationVerfiction} 
        
        options={{headerShown:false}}
        />
          <Stack.Screen name="TaxDetail" component={TaxDetail} 
        
        options={{headerShown:false}}
        />
        <Stack.Screen name="Notification" component={Notification} 
        
        options={{headerShown:false}}
        />
         {/* <Stack.Screen name="Orderdetails" component={Orderdetails} 
        
        options={{headerShown:false}}
        /> */}
         {/* <Stack.Screen name="Orderdetails_afterjob" component={Orderdetails_afterjob} 
        
        options={{headerShown:false}}
        /> */}
        
        <Stack.Screen name="newpart" component={newpart} 
        
        options={{headerShown:false}}
        />
         <Stack.Screen name="paymnetinvoice" component={paymnetinvoice} 
        
        options={{headerShown:false}}
        />

<Stack.Screen name="paymnetpage" component={paymnetpage} 
        
        options={{headerShown:false}}
        />

<Stack.Screen name="Onlinesuccessful" component={Onlinesuccessful} 
        
        options={{headerShown:false}}
        />

<Stack.Screen name="Congratulations" component={Congratulations} 
        
        options={{headerShown:false}}
        />
        <Stack.Screen name="Onlinesfailed" component={Onlinesfailed} 
        
        options={{headerShown:false}}
        />

<Stack.Screen name="CreateEstimate" component={CreateEstimate} 
        
        options={{headerShown:false}}
        />

<Stack.Screen name="AddNewPart" component={AddNewPart} 
        
        options={{headerShown:false}}
        />





<Stack.Screen name="Orderdetails_test" component={Orderdetails_test} 
        
        options={{headerShown:false}}
        />


        

<Stack.Screen name="homenew" component={Home} 
        
        options={{headerShown:false}}
        />



        

        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App1;
