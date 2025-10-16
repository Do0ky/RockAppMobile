import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { Image, ImageBackground, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('@/assets/images/home-background2.jpg')}
      style={styles.background}
      resizeMode='cover'
    >
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
          <View style={styles.brandWrapper}>
            <Image
              source={require('@/assets/images/header-title.png')}
              style={styles.headerTitle}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.entryOptions}>
          <Pressable onPress={() => router.push('/GalleryScreen')}>
            <BlurView intensity={20} style={styles.entryCard}>
              <Text style={styles.entryText}>Enter Rock Gallery</Text>
            </BlurView>
          </Pressable>

          <Pressable onPress={() => router.push('/QuizScreen')}>
            <BlurView intensity={20} style={styles.entryCard}>
              <Text style={styles.entryText}>Start Quiz Mode</Text>
            </BlurView>
          </Pressable>
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
    paddingTop: 24,
    paddingBottom: 24
  },
  header: {
    fontFamily: 'Rationale',
    backgroundColor: '#dbe4ea9f',
    width: '100%',
    height: Platform.OS === 'ios' ? 100 : 80, // adjust for status bar
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
    marginTop: Platform.OS === 'ios' ? 40 : 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  brandWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  headerTitle: {
    maxHeight: 180, 
    width: 240
  },
  entryOptions: {
    gap: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 75
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