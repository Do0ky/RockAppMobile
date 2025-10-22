import RockCard from '@/components/RockCard';
import RockDetailModal from '@/components/RockDetailModal';
import { rocks } from '@/data/rocks';
import useCollectionManager from '@/utils/collectionManager';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { rocks } from '@/data/rocks';
import RockCard from '@/components/RockCard';
import RockDetailModal from '@/components/RockDetailModal';
import useCollectionManager from '@/utils/collectionManager';

export default function GalleryScreen() {

  const router = useRouter();
  const navigation = useNavigation();

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
    <View style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>Rock Gallery</Text>

<<<<<<< HEAD:app/gallery-screen.js
        <View style={styles.buttonRow}>
          <Button
            title="Rock Collection"
            onPress={() => router.push('/collection-screen')}
            buttonStyle={styles.backButton}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
          />
          <Button
            title="Back to Home"
            onPress={() => navigation.navigate('(tabs)')}
            buttonStyle={styles.backButton}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
          />
        </View>

=======
>>>>>>> 8a7fd82 (drawer and tabs adjustments):app/gallery-screen/gallery.js
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ae988b',
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