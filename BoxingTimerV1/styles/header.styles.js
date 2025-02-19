import { StyleSheet } from 'react-native';
import { COLORS } from './variables';

const styles = StyleSheet.create({
    //HEADER
    header: {
        width: '100%',   
        height: 100,  
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: 'black',
      },
    //LOGO
    logoContainer: {
        //width: 88,
        //textAlign: 'center',
        //alignItems: 'center',
    },
    logoImg: {
        width: 88,
        height: 88,
        resizeMode: 'stretch',
    },
    //SOUNDS TOGGLE ICON
    soundToggleContainer: {
        width: 88,
        position: 'absolute',
        left: 0,
    },
    soundToggleIcon: {
        fontSize: 36, 
        color: COLORS.greenNeon,
        textAlign: 'center', 
    },
});

export default styles;