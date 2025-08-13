
import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';


export default function DetialScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Explore Main Screen</Text>
      <Button title="Go to Details" onPress={() => router.push('/(tabs)/details')} />
    </View>
  );
}
