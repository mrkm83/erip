import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerCustom from '../screen/DrawerScreen/DrawerCustom';

 import BottomNav from '../Appnavigtore/BottomNav';
 import IdCard from '../screen/DrawerScreen/IdCard'
 import myprofile from '../screen/profile/YourProfile'
 import completeLeads from '../screen/Leads/completeLead';
 import AddCreditscreen from '../screen/Wallet/AddCreditscreen';
 import WithdrawCreditscreen from '../screen/Wallet/WithdrawCreditscreen';
 import MyCoinsScreen from '../screen/Wallet/MyCoinsScreen';
 import WalletScreen from '../screen/Wallet/WalletScreen';
 import Notification_home from '../screen/Otherpage/Notification';
 import Orderdetails from '../screen/Leads/OrderDetailscreen'
 import Orderdetails_afterjob from '../screen/Leads/OrderDetailscreenjobstart'
//';
// import AppStack from "../navigations/AppNav";
// import Bottom from "../Appnavigtore/BottomNav";
// import OrderDetailscreen from '../screens/OrderDetails/OrderDetailscreen';
// import OrderDetailscreen2 from '../screens/OrderDetails2/OrderDetailscreen2';



const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        // < >
            <Drawer.Navigator useLegacyImplementation drawerContent={(props) => <DrawerCustom {...props} />}>
                <Drawer.Screen name="Bottom" component={BottomNav} options={{ headerShown: false }} />
                 <Drawer.Screen name="IdCard" component={IdCard} options={{ headerShown: false }} />
                 <Drawer.Screen name="myprofile" component={myprofile} options={{ headerShown: false }} />
                 <Drawer.Screen name="completeLeads" component={completeLeads} options={{ headerShown: false }} />
                 <Drawer.Screen name="AddCreditscreen" component={AddCreditscreen} options={{ headerShown: false }} />
                 <Drawer.Screen name="WithdrawCreditscreen" component={WithdrawCreditscreen} options={{ headerShown: false }} />
                 <Drawer.Screen name="MyCoinsScreen" component={MyCoinsScreen} options={{ headerShown: false }} />
                 <Drawer.Screen name="WalletScreen" component={WalletScreen} options={{ headerShown: false }} />
                 <Drawer.Screen name="Notification_home" component={Notification_home} options={{ headerShown: false }} />
                 <Drawer.Screen name="Orderdetails" component={Orderdetails} options={{ headerShown: false }} />
                 <Drawer.Screen name="Orderdetails_afterjob" component={Orderdetails_afterjob} options={{ headerShown: false }} />
                {/* <Drawer.Screen name="OrderDetailscreen" component={OrderDetailscreen} options={{ headerShown: false }} />
                <Drawer.Screen name="OrderDetailscreen2" component={OrderDetailscreen2} options={{ headerShown: false }} />  */}

            </Drawer.Navigator>
        // </ >

    //     <Drawer.Navigator
    //   useLegacyImplementation
    //   drawerContent={(props) => <DrawerCustom {...props} />}
    // >
    //   <Drawer.Screen name="Bottom" component={BottomNav} options={{ headerShown: false }} />
    //   <Drawer.Screen name="IdCard" component={IdCard} options={{ headerShown: false }} />
    // </Drawer.Navigator>

    );
}

export default DrawerNav; 