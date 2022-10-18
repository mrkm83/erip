import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import OpenLeads from '../screen/Leads/OpenLeads';
  import HomeStack from './HomeStack'
  import Ratings from '../screen/Ratings/Ratings';
//  import Support from '../screen/Ratings/Support';
 import Wallet from '../screen/Wallet/Wallet';
import navigationStrings from '../utils/navigationStrings';
import { Image, View } from 'react-native'
import imagePath from '../utils/imagePath';
import colors from '../constants/colors';
import Home from '../screen/Home/Home';
import Support from '../screen/Otherpage/Support';

 
const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.blue,
            tabBarInactiveTintColor: 'gray',

            tabBarStyle: {
                position: 'absolute',
                backgroundColor: colors.white,
                fontWeight:'bold',
                // backgroundColor:"red",
                //  borderRadius: 50,
                //  bottom: 2,
                //  marginHorizontal: '16'
            

            }
        }}>
            <Tab.Screen name={navigationStrings.HOME} component={HomeStack} options={{
                tabBarLabelStyle:{fontWeight:'bold'},
 
                tabBarIcon: ({ focused }) => {
                    return (
                        <Image
                            style={{
                                tintColor: focused ? colors.blue : 'gray'
                            }}
                            source={imagePath.Home} />
                    )
                }
            }} />

            <Tab.Screen name={navigationStrings.WALLET} component={Wallet}
                options={{
                   // tabBarBadge:12,
                //    tabBarLabel: 'Home',
                tabBarLabelStyle:{fontWeight:'bold'},

                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                style={{
                                    tintColor: focused ? colors.blue : 'gray'
                                }}
                                source={imagePath.Wallet} />
                        )
                    }
                }}
            />
            <Tab.Screen name={navigationStrings.OPEN_LEADS} component={OpenLeads} 
            Options={{
                tabBarStyle: { position: 'absolute' ,backgroundColor:"red",fontWeight:'800'},
                tabBarBadge:8,
                 
              
              }}
              
            
               options={{
                tabBarLabelStyle:{fontWeight:'bold'},
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                style={{
                                    tintColor: focused ? colors.blue : 'gray'
                                }}
                                source={imagePath.OpenLeads} />

                        )
                    }
                }}
                />
            <Tab.Screen name={navigationStrings.RATINGS} component={Ratings}
                options={{
                    tabBarLabelStyle:{fontWeight:'bold'},
                   // tabBarBadge:12,

                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                style={{
                                    tintColor: focused ? colors.blue : 'gray'
                                }}
                                source={imagePath.Ratings} />
                        )
                    }
                }}/>
            <Tab.Screen name={navigationStrings.SUPPORT} component={Support} 
                  options={{
                    tabBarLabelStyle:{fontWeight:'bold'},
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                style={{
                                    tintColor: focused ? colors.blue : 'gray'
                                }}
                                source={imagePath.Support} />
                        )
                    }
                }}/>
        </Tab.Navigator>
    );
}
export default BottomNav