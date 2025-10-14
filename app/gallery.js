import { Button } from '@rneui/themed';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GalleryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Rock Gallery</Text>
        <Text style={styles.subtitle}>Coming Soon!</Text>
        
        <Button
          title="Back to Home"
          onPress={() => router.back()}
          buttonStyle={styles.backButton}
          titleStyle={styles.buttonTitle}
          containerStyle={styles.buttonContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ae988b',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: '#3d2630',
    fontFamily: 'UnicaOne',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4b313e',
    fontFamily: 'Rationale',
    marginBottom: 40,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    maxWidth: 300,
  },
  backButton: {
    backgroundColor: '#4d313d',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 3,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f3e4dc',
    fontFamily: 'Rationale',
  },
});

