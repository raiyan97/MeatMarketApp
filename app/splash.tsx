
import imagePath from '@/src/Themed/imagePath';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function splash() {
    const router = useRouter();

useEffect(() => {
const timer = setTimeout(() => {
    router.replace('/onBoarding');
},2000)
  return () => clearTimeout(timer);
}, []);
return (
    <View style={styles.container}>
      <Image style={styles.adaptiveImg} source={imagePath.adaptive-icon.png} />
      <Text style={styles.text}>Welcome to MeatShop 🥩</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontFamily: 'RobotoBold', // jo font tu load kar raha
  },
  adaptiveImg:{
    width:100,
    height:100,
  }
});
