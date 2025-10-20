import useCollectionManager from '@/utils/collectionManager';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RockCard from '../components/RockCard';

export default function CollectionScreen() {
  
    // Using the custom hook to manage collection state and actions
    const {
        collection,
        removeFromCollection,
    } = useCollectionManager();

    /* SORT COLLECTION CARDS BY ALPHABETICAL ORDER */
    const sortedRockCollection = useMemo(() => {
        return [...collection].sort((a, b) => a.name.localeCompare(b.name));
    }, [collection]);

    const router = useRouter();
    const navigation = useNavigation();

    const renderRockCard = ({ item: rock }) => (
        <RockCard 
            key={rock.id} 
            rock={rock} 
            onRemove={() => removeFromCollection(rock)} 
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Rock Collection</Text>
                
                <View style={styles.buttonContainer}>
                    <Button
                        title="Back to Gallery"
                        onPress={() => router.push('/gallery-screen')}
                        buttonStyle={styles.backButton}
                        titleStyle={styles.buttonTitle}
                        containerStyle={styles.backButtonContainer}
                    />
                    <Button
                        title="Back to Home"
                        onPress={() => navigation.navigate('(tabs)')}
                        buttonStyle={styles.backButton}
                        titleStyle={styles.buttonTitle}
                        containerStyle={styles.backButtonContainer}
                    />
                </View>
            </View>

            <View style={styles.collectionContainer}>
                <FlatList
                    data={sortedRockCollection}
                    renderItem={renderRockCard}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={styles.row}
                    scrollEnabled={true}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ae988b', // .rock-collection background-color
        paddingHorizontal: 32, // 2rem padding from .rock-collection
    },
    header: {
        paddingVertical: 32, // 2rem padding
        alignItems: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: '900',
        color: '#483d3d', // .rock-collection h1 color (different from rock-gallery)
        fontFamily: 'UnicaOne',
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        maxWidth: 400,
        marginVertical: 12, // .text-center.my-3 equivalent
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    backButton: {
        backgroundColor: '#524848', // .rock-collection .collection-button background
        paddingVertical: 12, // 0.8rem
        paddingHorizontal: 24, // 2rem
        borderRadius: 3, // 0.2rem
    },
    buttonTitle: {
        fontSize: 18, // 1.2rem
        fontWeight: 'bold',
        color: '#e5ccbe', // .rock-collection .collection-button color
        fontFamily: 'Rationale',
    },
    backButtonContainer: {
        flex: 1,
    },
    collectionContainer: {
        flex: 1,
        paddingBottom: 32, // 2rem padding bottom
    },
    listContainer: {
        paddingBottom: 20,
    },
    row: {
        justifyContent: 'space-around',
        marginBottom: 20,
    },
});
