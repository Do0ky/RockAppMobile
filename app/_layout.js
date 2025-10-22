//DRAWER LAYOUT 
import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {

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
        name="index" 
        options={{ 
          title: 'Home',
          drawerLabel: 'Home',
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-circle" color={color} size={size} />
          )
        }} 
      />
      <Drawer.Screen
        name="gallery-screen"
        options={{
          title: '',
          drawerLabel: 'Gallery',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="image-album" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen 
        name="quiz-screen" 
        options={{ 
          title: '',
          drawerLabel: 'Quiz',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gamepad-variant" color={color} size={size} />
          )
        }} 
      />
    </Drawer>
  );
}