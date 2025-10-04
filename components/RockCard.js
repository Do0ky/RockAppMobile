import { View, Text } from 'react-native';

const RockCard = () => {

    return (
        <View>
            <Text>
                {rock.name}
            </Text>
            <Text>
                {rock.category}
            </Text>
            <Text>
                {rock.type}
            </Text>
        </View>
    )
};

export default RockCard;