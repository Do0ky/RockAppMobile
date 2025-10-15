import { Button } from '@rneui/themed';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { rocks } from '@/data/rocks';
import RockCard from '@/components/RockCard';
import RockDetailModal from '@/components/RockDetailModal';
import useCollectionManager from '@/utils/collectionManager';

export default function GalleryScreen() {

  const router = useRouter();

  // Lifting state for modal management
  const [selectedRock, setSelectedRock] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = (rock) => {
    setSelectedRock(rock);
    setModalVisible(true);
  };
  const closeModal = () => {
    setSelectedRock(null);
    setModalVisible(false);
  };

  const {
    collection,
    addToCollection,
    removeFromCollection,
    isInCollection,
  } = useCollectionManager();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>Rock Gallery</Text>

        <View style={styles.buttonRow}>
          <Button
            title="Rock Collection"
            onPress={() => router.push('/collection')}
            buttonStyle={styles.backButton}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
          />
          <Button
            title="Back to Home"
            onPress={() => router.back()}
            buttonStyle={styles.backButton}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
          />
        </View>

        <FlatList
          data={rocks}
          key={'2-columns'} //static key to avoid render error
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-around' }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => ( 
            <RockCard 
              rock={item} 
              onPress={ () => openModal(item)}
              accessibilityLabel={`View details for ${item.name}`}
            />
          )}
          contentContainerStyle={styles.list}
        />

      {modalVisible && (
        <RockDetailModal
          rock={selectedRock}
          collection={collection}
          visible={modalVisible}
          onClose={closeModal}
          onAddToCollection={ () => addToCollection(selectedRock) }
          onRemoveFromCollection={ () => removeFromCollection(selectedRock) }
        />
      )}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ae988b',
    paddingVertical: 32,
    paddingHorizontal: 20
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontSize: 55,
    color: '#3d2630',
    fontFamily: 'UnicaOne',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4b313e',
    fontFamily: 'Rationale',
    marginBottom: 32,
    textAlign: 'center'
  },
  buttonRow: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginVertical: 12,
  },
  buttonContainer: {
    marginHorizontal: 8,
    flex: 1, // optional: makes buttons evenly spaced
  },
  backButton: {
    backgroundColor: '#4d313d',
    paddingVertical: 12,
    borderRadius: 6
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f3e4dc',
    fontFamily: 'Rationale',
    textAlign: 'center'
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 24
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16
  }
});