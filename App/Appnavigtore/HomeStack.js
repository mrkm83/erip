import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

 import Home from '../screen/Home/Home';
import navigationStrings from "../utils/navigationStrings";
 import NewLeads from "../screen/Leads/NewLeads";
 import profile from "../screen/profile/YourProfile";
 import Orederdetailes2  from '../screen/auth/Orederdetailes2';
// import OrderDetailscreen from "../screens/OrderDetails/OrderDetailscreen";
// import OrderDetailscreen2 from "../screens/OrderDetails2/OrderDetailscreen2";
// import CreateEstimateScreen from "../screens/CreateEstimate/CreateEstimateScreen";




const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
      
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name={navigationStrings.HOME} component={Home} />
        <Stack.Screen name={navigationStrings.NEWLEADS} component={NewLeads} />
        <Stack.Screen name={navigationStrings.PROFILE} component={profile} />
        <Stack.Screen name="Orederdetailes2" component={Orederdetailes2}  />

        {/* <Stack.Screen name="OrderDetailscreen" component={OrderDetailscreen}  />
        <Stack.Screen name="OrderDetailscreen2" component={OrderDetailscreen2}  />
        <Stack.Screen name="CreateEstimateScreen" component={CreateEstimateScreen}  /> */}


       </Stack.Navigator>
    );
  }