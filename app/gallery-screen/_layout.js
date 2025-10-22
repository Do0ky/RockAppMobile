// TAB LAYOUT
import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rationale: require('@/assets/fonts/Rationale-Regular.ttf'),
    UnicaOne: require('@/assets/fonts/UnicaOne-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return ( 
      <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ae988b',
        },
        tabBarActiveTintColor: '#4d313d',
        tabBarInactiveTintColor: '#4b313e',
        tabBarLabelStyle: {
          fontFamily: 'Rationale',
          fontSize: 14,
        },
        headerStyle: {
          backgroundColor: '#ae988b',
        },
        headerTitleStyle: {
          fontFamily: 'UnicaOne',
          fontSize: 20,
          color: '#4b313e',
        },
      }}
    >
      <Tabs.Screen
        name="gallery"
        options={{
          headerShown: false,
          tabBarLabel: 'Gallery',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="image-album" color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          headerShown: false,
          tabBarLabel: 'Collection',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="folder-star" color={color} size={size} />
          )
        }}
      />
    </Tabs>
  );
}