import React from 'react';
import { View, Text, } from 'react-native';
import Logo from '../header/Logo.js';
import styles from '../../styles/body.styles.js';

const Home = () => {

    return (
        <View style={styles.bodyContainer}> 
            <Text style={styles.bodyTitles}>HOME</Text>
            <View>
                <Logo width={168} height={168} paddingVertical={40}/> 
            </View> 
            <View style= {styles.contentContainer}>
            <Text style={styles.commonHeading}>
                    Rythme tes entraînements.
                </Text>
                <Text style={styles.commonHeading}>
                    Notre coach est là pour t'aider si tu le souhaites,
                </Text>
                <Text style={styles.commonHeading}>
                    bonne séance.
                </Text>
            </View>
        </View>
    );
};

export default Home;
