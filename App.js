
import React from 'react';

import {
 SafeAreaView,
 ScrollView,
 StatusBar,
 StyleSheet,
 Text,
 useColorScheme,
 View,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';


import Navigatore from './App/Appnavigtore/Navigatore'
//import DrawerNav from './app/Appnavigtore/DrawerNav'


// const App = () => {
//   LogBox.ignoreAllLogs()
//   return (
//     <Navigatore/>
   
//   )
// };
// export default App;

const App = () => {
  return (
       <PaperProvider>

<Navigatore/>

</PaperProvider>
  );
};

export default App;





 

