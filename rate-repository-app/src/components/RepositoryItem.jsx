import { View, StyleSheet, Image } from 'react-native';
import { Text, Subheading } from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    repositoryContainer: {
        backgroundColor: theme.colors.repositoryItemBackground,
        flexDirection: 'column',
        padding: 10
    },
    detailContainer: {
        flexDirection: 'row',
    },
    detailTextContainer: {
        marginLeft:10,
        marginBottom:10
    },
    statisticsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    titledValue: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 5,
    },
    languageContainer: {
        backgroundColor: theme.colors.primary,
        flex: -1,
        borderRadius: 3,
        padding: 5,
        margin: 2
    },
    detail: {
        margin: 2
    }
});

const RepositoryItem = ({ repository }) => {
    return (
        <View key={repository.id} style={styles.repositoryContainer}>
            <View style={styles.detailContainer}>
                <Image style={styles.logo} source={{ uri: repository.ownerAvatarUrl }}></Image>
                <View style={styles.detailTextContainer}>
                    <Subheading style={styles.detail} fontWeight='bold'>{repository.fullName} </Subheading>
                    <Text style={styles.detail} color='textSecondary'>{repository.description} </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.languageContainer}><Text color='textOnColored'>{repository.language}</Text></View>
                    </View>
                </View>
            </View>
            <View style={styles.statisticsContainer}>
                <TitledValue title="Stars" value={repository.stargazersCount} />
                <TitledValue title="Forks" value={repository.forksCount} />
                <TitledValue title="Reviews" value={repository.reviewCount} />
                <TitledValue title="Rating" value={repository.ratingAverage} />
            </View>
        </View>
    );
};

const toKFormat = (number) => {
    return (
        (number < 1000)
            ? number
            : Math.round(number / 100) / 10 + "k"
    );
};

const TitledValue = ({ title, value }) => {
    return (
        <View style={styles.titledValue}>
            <View style={{ flexGrow: 1 }}><Text fontWeight='bold'>{toKFormat(value)}</Text></View>
            <View style={{ flexGrow: 1 }}><Text color='textSecondary'>{title}</Text></View>
        </View>
    );
};

export default RepositoryItem;