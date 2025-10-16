import React from 'react'; 
import { Modal, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Pressable, ScrollView } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const RockDetailModal = ( {rock, collection, visible, onClose, onAddToCollection, onRemoveFromCollection} ) => {
    
    //if no rock is provided not rendering the modal
    if (!rock) return null;

    //check if the rock is already in the collection
    const isInCollection = Array.isArray(collection) && collection.some( (r) => r.id === rock.id );

    return(
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <Pressable style={styles.overlay} onPress={onClose}>

                <ScrollView contentContainerStyle={styles.modalContent}>
                    <TouchableOpacity 
                        style={styles.closeButton} 
                        onPress={onClose}
                        accessibilityLabel='Close rock details'
                        accessibilityRole='button'
                    >
                        <Text style={styles.closeButtonText}>×</Text>
                    </TouchableOpacity>

                    {rock.image && (
                        <Image source={rock.image} style={styles.image} />
                    )}

                    <Text style={styles.name}>{rock.name}</Text>
                    <Text style={styles.detail}><Text style={styles.label}>Category:</Text> {rock.category}</Text>
                    <Text style={styles.detail}><Text style={styles.label}>Type:</Text> {rock.type}</Text>
                    <Text style={styles.detail}><Text style={styles.label}>Color:</Text> {rock.color}</Text>
                    <Text style={styles.detail}><Text style={styles.label}>Texture:</Text> {rock.texture}</Text>
                    <Text style={styles.detail}><Text style={styles.label}>Fun Fact:</Text> {rock.funFact}</Text>

                    <TouchableOpacity
                        style={styles.collectButton}
                        onPress={isInCollection ? onRemoveFromCollection : onAddToCollection}
                        accessibilityLabel={
                        isInCollection
                        ? `Remove ${rock.name} from collection`
                        : `Add ${rock.name} to collection`
                        }
                        accessibilityRole='button'
                    >
                        <Text style={styles.collectButtonText}>
                            {isInCollection ? 'Remove from Collection' : 'Add to Collection'}
                        </Text>
                    </TouchableOpacity>

                </ScrollView>

            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: screenWidth * 0.9,
    backgroundColor: '#f3e4dc',
    borderRadius: 16,
    padding: 20,
    paddingTop: 40,
    elevation: 10,
    alignItems: 'center'
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 28,
    color: '#4d313d',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    maxHeight: 250,
    resizeMode: 'contain',
    borderRadius: 12,
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontFamily: 'UnicaOne',
    color: '#3d2630',
    textAlign: 'center',
    marginBottom: 12,
  },
  detail: {
    fontSize: 16,
    fontFamily: 'Rationale',
    color: '#4b313e',
    marginBottom: 6,
  },
  label: {
    fontWeight: 'bold',
  },
  collectButton: {
    backgroundColor: '#4d313d',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 16,
  },
  collectButtonText: {
    color: '#f3e4dc',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default RockDetailModal;