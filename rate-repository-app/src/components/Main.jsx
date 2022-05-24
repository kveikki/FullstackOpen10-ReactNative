import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.mainBackground,
        flexGrow: 1
    }
});

const Main = () => {
    return (<View style={styles.container}>
        <AppBar />
        <RepositoryList />
    </View>);
};

export default Main;