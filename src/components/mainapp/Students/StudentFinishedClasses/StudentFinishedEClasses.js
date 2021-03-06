import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Gradient from 'react-native-css-gradient'
import ListItemFFC from '../../reusable/ListItemFFC';

class StudentFinishedEClasses extends React.Component {
    static navigationOptions = {
        title: "Sed. Perfectionare"
    }
    render() {
        return (
            <Gradient gradient={`linear-gradient(0deg ,white 0%, #1E6EC7 100% )`} style={{ width: '100%', height: '100%', zIndex: 2, position: 'absolute' }} >
                <FlatList
                    data={this.props.navigation.state.params.finishedEClasses}
                    keyExtractor={(item, i) => `${i}`}
                    renderItem={({ item }) => {
                        return <ListItemFFC class={item} isCanceled={false} />
                    }}
                />
            </Gradient>
        );
    }
}
export default StudentFinishedEClasses;