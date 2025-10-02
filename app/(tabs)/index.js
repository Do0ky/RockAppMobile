import { View, Text, StyleSheet, ImageBackground, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('@/assets/images/home-background.jpg')}
      style={styles.background}
      resizeMode='cover'
    >
      <SafeAreaView style={styles.container}>

        <Text style={styles.header}>ROCKAPP MOBILE</Text>

        <View style={styles.entryOptions}>
          <BlurView intensity={20} style={styles.entryCard} onPress={() => router.push('/gallery')}>
            <Text style={styles.entryText}>Enter Rock Gallery</Text>
          </BlurView>

          <BlurView intensity={20} style={styles.entryCard} onPress={() => router.push('/quiz')}>
            <Text style={styles.entryText}>Start Quiz Mode</Text>
          </BlurView>
        </View>

      </SafeAreaView>

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
    fontFamily: 'Rationale',
    backgroundColor: '#dbe4eab7',
    height: '10%',
    width: '100%',
    padding: 10,
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    fontSize: 46,
    fontWeight: '600',
    marginBottom: 40,
    textAlign: 'center',
    justifyContent: 'center'
  },
  entryOptions: {
    marginTop: 40,
    gap: 20,
    width: '100%',
    alignItems: 'center',
  },
  entryCard: {
    backgroundColor: 'rgba(197, 191, 184, 0.664)',
    borderColor: '#5c3b4b',
    borderWidth: 2,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    height: 250,
    width: 250,
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5 // for Android
  },
  entryText: {
    fontFamily: 'UnicaOne',
    color: '#4b313e',
    fontSize: 27,
    fontWeight: '600',
    textAlign: 'center',
  }, 
  background: {
  flex: 1,
  justifyContent: 'center',
}
});