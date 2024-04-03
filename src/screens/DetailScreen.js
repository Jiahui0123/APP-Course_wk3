import React from 'react';
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';
import Star from "../components/Star";

import img1 from "../image/img_book_fashinopolis.png";
import img2 from "../image/img_book_chanel.png";
import img3 from "../image/img_book_calligraphy.png";
import img4 from "../image/img_book_ysl.png";
import img5 from "../image/img_book_tbos.png";
import img6 from "../image/img_book_stitchedup.png";
const img = [img1, img2, img3, img4, img5, img6];

const DetailScreen = ({ route }) => {
    const { imageStyle, booknamestyle, authorstyle, commentstyle, container, introstyle } = styles;
    const {
        key,
        star,
        bookname,
        author,
        intro
    } = route.params;
    return (
        <View style={container}>
            <Image source={img[key]} />
            <View>
                <Text style={booknamestyle}>{bookname}</Text>
            </View>
            <View>
                <Text style={authorstyle}>{author}</Text>
            </View>
            <View style={commentstyle}>
                <Star star={star} />
                <Text> 4.0 / 5.0</Text>
            </View>
            <View style={introstyle}>
                <Text style={{ alignSelf: 'center' }}>A spectacular visual journey through 40 years of</Text>
                <Text style={{ alignSelf: 'center' }}>haute couture from one of the best-known and</Text>
                <Text style={{ alignSelf: 'center' }}>most trend-setting brands in fashion.</Text>
            </View>
            <View style={styles.cardContainerStyle}>
                <Button
                    onPress={() => Linking.openURL(url)}
                    title="Buy Now for $46.99"
                    color="#6200EE"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    booknamestyle: {
        color: "#131313",
        fontFamily: "Roboto",
        fontSize: 24,
        fontWeight: '500',
        paddingTop: 10
    },
    authorstyle: {
        color: "#666666",
        fontFamily: "Roboto",
        fontSize: 14,
        paddingTop: 5
    },
    introstyle: {
        width: 320,
        justifyContent: 'center',
        paddingTop: 5,
    },
    commentstyle: {
        flexDirection: "row",
        paddingTop: 10
    },
    cardContainerStyle: {
        padding: 15,
    },
});

export default DetailScreen;