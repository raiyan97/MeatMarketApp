
import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function OnBoarding() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Onboarding Screen</Text>
      <Button title="Continue to App" onPress={() => router.replace('/(tabs)')} />
    </View>
  );
}
