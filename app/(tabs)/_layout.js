import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rationale: require('@/assets/fonts/Rationale-Regular.ttf'),
    UnicaOne: require('@/assets/fonts/UnicaOne-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return <Slot />;
}