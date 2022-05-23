import { View, Text } from 'react-native';

const RepositoryItem = ({ repository }) => {
    return (
        <View key={repository.id}>
            <Text> Full name: {repository.fullName} </Text>
            <Text> Description: {repository.description} </Text>
            <Text> Stars: {repository.stargazersCount} </Text>
            <Text> Forks: {repository.forksCount} </Text>
            <Text> Reviews: {repository.reviewCount} </Text>
            <Text> Rating: {repository.ratingAverage} </Text>
        </View>
    );
};

export default RepositoryItem;