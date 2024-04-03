import React from "react";
import { View, Image, StyleSheet, } from "react-native";

const Star = ({ star }) => {
    let allstar = [];
    if (star > 0) {
        for (let i = 0; i < 5; i++) {
            if (star > i) {
                allstar.push(
                    <Image
                        source={require('../image/icon_star_filled.png')}
                        style={styles.starstyle}
                    />
                )
            }
            else {
                allstar.push(
                    <Image
                        source={require('../image/icon_star_empty.png')}
                        style={styles.starstyle}
                    />
                )
            }
        }
    }
    return (
        <View style={styles.allstarstyle}>
            {allstar}
        </View>

    )

};

const styles = StyleSheet.create({
    starstyle: {
        height: 14,
        width: 14,
        marginRight: 3
    },
    allstarstyle: {
        flexDirection: "row",
        alignSelf: "flex-around",
        paddingLeft: 20
    }

});

export default Star;