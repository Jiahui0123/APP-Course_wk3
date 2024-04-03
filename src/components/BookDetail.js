import React from "react";
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from "react-native";
import Star from "./Star";
import img1 from "../image/img_book_fashinopolis.png";
import img2 from "../image/img_book_chanel.png";
import img3 from "../image/img_book_calligraphy.png";
import img4 from "../image/img_book_ysl.png";
import img5 from "../image/img_book_tbos.png";
import img6 from "../image/img_book_stitchedup.png";

const img = [img1, img2, img3, img4, img5, img6];

const BookDetail = ({ book, navigation }) => {
    const { CardContainerStyle, headerContainerStyle, booknamestyle, authorstyle } = styles;
    return (
        <ScrollView>
            <View style={CardContainerStyle}>
                <Pressable onPress={() => navigation.navigate('Detail', book)}>
                    <Image
                        source={img[book.key]}
                        style={{ height: 200, width: 140, marginBottom: 10 }}
                    />
                </Pressable>
            </View>
            <View>
                <Star star={book.star} />
            </View>
            <View style={headerContainerStyle}>
                <Text style={booknamestyle}>{book.bookname}</Text>
                <Text style={authorstyle}>{book.author}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    CardContainerStyle: {
        marginLeft: 20,
        marginRight: 5,
        marginTop: 10,
    },
    headerContainerStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingLeft: 20,
        marginTop: 5,
    },
    booknamestyle: {
        fontSize: 16,
        fontFamily: "Roboto",
        fontWeight: '500'
    },
    authorstyle: {
        fontSize: 12,
        fontFamily: "Roboto",
        color: '#808080'
    }
});

export default BookDetail;