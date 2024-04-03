import React from "react";
import { FlatList, Text, StyleSheet, ScrollView } from "react-native";
import BookDetail from "./BookDetail";

const BookList = ({ list, navigation }) => {
    return (
        <ScrollView>
            <Text style={styles.sectionHeader}>{list.titleA}</Text>
            <FlatList
                horizontal={true}
                data={list.dataA}
                renderItem={({ item }) => <BookDetail book={item} navigation={navigation} />}
                keyExtractor={item => item.key}
            />
            <Text style={styles.sectionHeader}>{list.titleB}</Text>
            <FlatList
                horizontal={true}
                data={list.dataB}
                renderItem={({ item }) => <BookDetail book={item} navigation={navigation} />}
                keyExtractor={item => item.key}
            />
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    sectionHeader: {
        fontWeight: '600',
        fontSize: 24,
        paddingTop: 8,
        paddingBottom: 5,
        paddingLeft: 20,
        textTransform: 'uppercase',
    },
})

export default BookList; 