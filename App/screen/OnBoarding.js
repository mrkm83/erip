import React from 'react';
import {
 SafeAreaView,
 Image,
 StyleSheet,
 FlatList,
 View,
 Text,
 StatusBar,
 TouchableOpacity,
 Dimensions,
} from 'react-native';
import image from '../aasets/index';
    import { scale, verticalScale, moderateScale,moderateVerticalScale } from 'react-native-size-matters-ch';

 import { useNavigation } from '@react-navigation/native';
 const {width, height} = Dimensions.get('window');const COLORS = {primary: '#282534', white: '#fff',black:"#000",blue:'#0C7EFA'};const slides = [
 {
   id: '1',
   image: image.splash,
   title: 'Get the best Jobs that suit you',
   subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum sit est diam diam condimentum viverra.',
 },
 {
   id: '2',
   image: image.splash,
   title: 'Get the best Jobs that suit you',
   subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum sit est diam diam condimentum viverra.',
 },
 {
   id: '3',
   image: image.splash,
   title: 'Get the best Jobs that suit you',
   subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum sit est diam diam condimentum viverra.',
 },
];const Slide = ({item}) => {
 return (
   <View style={{justifyContent:'center',alignItems:'center',marginTop:moderateVerticalScale(40),backgroundColor:COLORS.white,justifyContent:'center',width:Dimensions.get('window').width,alignItems:'center'}}>
     <Image
       source={item?.image}
       style={{marginTop:moderateVerticalScale(20),height: moderateScale(300),width:moderateScale(280), resizeMode: 'contain'}}
     />
     <View style={{marginTop:moderateVerticalScale(60) }}>
       <Text style={styles.title}>{item?.title}</Text>
       <Text style={styles.subtitle}>{item?.subtitle}</Text>
     </View>
   </View>
 );
};const OnBoarding = () => {
 const navigation = useNavigation();
 const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
 const ref = React.useRef();
 const updateCurrentSlideIndex = e => {
   const contentOffsetX = e.nativeEvent.contentOffset.x;
   const currentIndex = Math.round(contentOffsetX / width);
   setCurrentSlideIndex(currentIndex);
 };  const goToNextSlide = () => {
   const nextSlideIndex = currentSlideIndex + 1;
   if (nextSlideIndex != slides.length) {
     const offset = nextSlideIndex * width;
     ref?.current.scrollToOffset({offset});
     setCurrentSlideIndex(currentSlideIndex + 1);
   }
 };  const skip = () => {
   const lastSlideIndex = slides.length - 1;
   const offset = lastSlideIndex * width;
   ref?.current.scrollToOffset({offset});
   setCurrentSlideIndex(lastSlideIndex);
 }; 
  const Footer = () => {
   return (
     <View
       style={{
         height: height * 0.25,
         justifyContent: 'space-between',
         paddingHorizontal: 20,
        }}>
        <View
         style={{
           flexDirection: 'row',
           justifyContent: 'center',
           marginTop: 20,
         }}>
          {slides.map((_, index) => (
           <View
             key={index}
             style={[
               styles.indicator,
               currentSlideIndex == index && {
                 
                 width: 25,
                 borderRadius:moderateScale(10)
               },
             ]}
           />
         ))}
       </View> 
       <View style={{marginBottom: 20}}>
         {currentSlideIndex == slides.length - 1 ? (
           <View style={{height: 50, }}>
             <TouchableOpacity
               style={styles.btn}
               onPress={() => navigation.navigate('Registrationstep')}>
               <Text style={{fontWeight: 'bold', fontSize: 15,color:'white'}}>
                 Get Started
               </Text>
             </TouchableOpacity>
           </View>
         ) : (
           <View style={{flexDirection: 'row'}}>
             <TouchableOpacity
               activeOpacity={0.8}
               style={[
                 styles.btn,
                 {
                   borderColor: 'blue',
                   borderWidth: 1,
                   backgroundColor: 'transparent',

                  }
               ]}
              // onPress={skip}
              onPress={() => navigation.navigate('Registrationstep')}
               >
               <Text
                 style={{
                   fontWeight: 'bold',
                   fontSize: 15,
                   color: 'blue',
                 }}>
                 Register
               </Text>
             </TouchableOpacity>
             <View style={{width: 15}} />
             <TouchableOpacity
               activeOpacity={0.8}
              // onPress={goToNextSlide}
              onPress={() => navigation.navigate('Login')}
               style={styles.btn}>
               <Text
                 style={{
                   fontWeight: 'bold',
                   fontSize: 15,
                   color:'white'
                 }}>
                 Login
               </Text>
             </TouchableOpacity>
           </View>
         )}
       </View>
     </View>
   );
 }; 
 
  return (
   <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
     <StatusBar backgroundColor={COLORS.primary} />
     <FlatList
       ref={ref}
       onMomentumScrollEnd={updateCurrentSlideIndex}
       contentContainerStyle={{height: height * 0.75}}
       showsHorizontalScrollIndicator={false}
       horizontal
       data={slides}
       pagingEnabled
       renderItem={({item}) => <Slide item={item} />}
     />
     <Footer />
   </SafeAreaView>
 );
};const styles = StyleSheet.create({
 subtitle: {
   color: COLORS.black,
   fontSize: 15.4,
   marginTop: 10,
   maxWidth: '70%',
   textAlign: 'center',
   lineHeight: 23,
 },
 title: {
   color: COLORS.black,
   fontSize: 22,
   fontWeight: 'bold',
   marginTop: 20,
   textAlign: 'center',
 },
 image: {
   height: '100%',    resizeMode: 'contain',
 },
 indicator: {
   height: moderateScale(10),
   width: moderateScale(10),
   backgroundColor: COLORS.blue,
   marginHorizontal: 3,
   borderRadius:moderateScale(5)
},
 btn: {
   flex: 1,
   height: 47,
   borderRadius: 10,
   backgroundColor: COLORS.blue,
    justifyContent: 'center',
   alignItems: 'center',
 },
});
export default OnBoarding;
