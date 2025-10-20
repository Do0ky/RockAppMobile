import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Rationale: require('@/assets/fonts/Rationale-Regular.ttf'),
    UnicaOne: require('@/assets/fonts/UnicaOne-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <Drawer
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ae988b',
          width: 280,
        },
        drawerLabelStyle: {
          color: '#4b313e',
          fontFamily: 'Rationale',
          fontSize: 18,
        },
        drawerActiveTintColor: '#4d313d',
        drawerInactiveTintColor: '#4b313e',
        headerStyle: {
          backgroundColor: '#ae988b',
        },
        headerTintColor: '#4b313e',
        headerTitleStyle: {
          fontFamily: 'UnicaOne',
          fontSize: 20,
        },
      }}
    >
      <Drawer.Screen 
        name="(tabs)" 
        options={{ 
          title: 'Home',
          drawerLabel: 'Home',
          headerShown: false,
        }} 
      />
      <Drawer.Screen 
        name="quiz-screen" 
        options={{ 
          title: 'Rock Quiz',
          drawerLabel: 'Quiz',
        }} 
      />
      <Drawer.Screen 
        name="gallery-screen" 
        options={{ 
          title: 'Rock Gallery',
          drawerLabel: 'Gallery',
        }} 
      />
      <Drawer.Screen 
        name="collection-screen" 
        options={{ 
          title: 'Rock Collection',
          drawerLabel: 'Collection',
        }} 
      />
    </Drawer>
  );
}
