import { Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const RockCard = ( {rock, onPress, onRemove} ) => {
    
    return (
        <TouchableOpacity 
            style={styles.card} 
            onPress={onPress} 
            activeOpacity={0.8}
            accessibilityLabel={`View details for ${rock.name}`}
            accessibilityRole='button'
        >
            <Image
                source={rock.image}
                style={styles.image}
                accessibilityLabel={`Image of ${rock.name}`}
            />
 
            <Text style={styles.name}>{rock.name}</Text>
            <Text style={styles.category}>{rock.category}</Text>
            <Text style={styles.type}>{rock.type}</Text>

            {onRemove && (
                <TouchableOpacity 
                    style={styles.collectionButton} 
                    onPress={onRemove} 
                    activeOpacity={0.8}
                    accessibilityLabel={`Remove ${rock.name} from collection`}
                    accessibilityRole='button'
                >
                    <Text style={styles.collectionButtonText}>Remove from Collection</Text>
                </TouchableOpacity>
            )}
        </TouchableOpacity>
    );
};

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 57) / 2;

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: '#62414a',
    borderColor: '#5c3b4b',
    borderWidth: 1,
    borderRadius: 16,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    //Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    //Elevation for Android
    elevation: 4,
    overflow: 'hidden'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    marginBottom: 12
  },
  name: {
    fontFamily: 'UnicaOne',
    fontWeight: '500',
    fontSize: 22,
    color: '#f7e8e0',
    marginBottom: 4,
    textAlign: 'center'
  },
  category: {
    fontSize: 16,
    fontFamily: 'Rationale',
    color: '#f7e8e0',
    marginBottom: 2
  },
  type: {
    fontSize: 14,
    fontFamily: 'Rationale',
    color: '#f7e8e0',
    marginBottom: 8
  },
  collectionButton: {
    backgroundColor: '#4d313d',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginTop: 8
  },
  collectionButtonText: {
    color: '#f3e4dc',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  }
});

export default RockCard;