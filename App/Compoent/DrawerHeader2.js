import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
const Drowe = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const { name, image1 } = props;

  const navigationView = () => (
    <View style={[styles.container1,]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
      drawerBackgroundColor={"pink"} 
    >
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Drawer on the {drawerPosition}!
        </Text>
        
        <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({

  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"red"
   },



   container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"green"
   },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});

export default Drowe;