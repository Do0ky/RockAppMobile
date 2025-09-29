import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Platform } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('@/assets/images/home-background.jpg')}
      style={styles.background}
      resizeMode='cover'
    >
      <View style={styles.container}>
        <Text style={styles.header}>RockApp Mobile</Text>

        <View style={styles.entryOptions}>
          <TouchableOpacity style={styles.entryCard} onPress={() => router.push('/gallery')}>
            <Text style={styles.entryText}>Enter Rock Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.entryCard} onPress={() => router.push('/quiz')}>
            <Text style={styles.entryText}>Start Quiz Mode</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 24,
  },
  header: {
    backgroundColor: '#dbe4eab7',
    height: '10%',
    width: '100%',
    padding: 10,
    marginTop: Platform.OS === 'ios' ? 40 : 20, // optional: add top padding for iOS notch
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  entryOptions: {
    marginTop: 40,
    gap: 20,
    width: '100%',
    alignItems: 'center',
  },
  entryCard: {
    backgroundColor: '#6899979a',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    height: 130
  },
  entryText: {
    fontSize: 18,
    fontWeight: '600',
  }, 
  background: {
  flex: 1,
  justifyContent: 'center',
}
});