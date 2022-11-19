import { Text, View } from "react-native";

export default function Detail({route}) {
    const {itemId, otherParam} = route.params;
    return (
        <View>
            <Text>Detail</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        </View>
    );
}