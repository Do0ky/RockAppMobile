import { Button } from '@rneui/themed';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RockCard from '../components/RockCard';

export default function RockCollection({ removeFromCollection = () => {}, collection = [], goToGallery }) {
  
    /* SORT COLLECTION CARDS BY ALPHABETICAL ORDER */
    const sortedRockCollection = useMemo(() => {
        return [...collection].sort((a, b) => a.name.localeCompare(b.name));
    }, [collection]);

    const router = useRouter();

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
                        onPress={() => router.back()}
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
        maxWidth: 300,
        marginVertical: 12, // .text-center.my-3 equivalent
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
        marginTop: 10,
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
