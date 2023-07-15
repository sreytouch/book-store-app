import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../../constants";
import { bookReactJS, bookFullStack, bookRichDad, bookReactNative } from "../../services/Books";

const ListBooks = ({ navigation }) => {

    const myBooksData = [
        {
            ...bookReactJS,
            completion: "75%",
            lastRead: "3d 5h",
        },
        {
            ...bookFullStack,
            completion: "23%",
            lastRead: "10d 5h",
        },
        {
            ...bookRichDad,
            completion: "10%",
            lastRead: "1d 2h",
        },
        {
            ...bookReactNative,
            completion: "63%",
            lastRead: "13d 5h",
        }
    ];
    const [myBooks, setMyBooks] = React.useState(myBooksData);

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    marginLeft: index == 0 ? SIZES.padding : 0,
                    marginRight: SIZES.radius
                }}
                onPress={() => navigation.navigate("BookDetail", {
                    book: item
                })}
            >
                {/* Book Cover */}
                <Image
                    source={item.bookCover}
                    resizeMode="cover"
                    style={{
                        width: 180,
                        height: 250,
                        borderRadius: 20
                    }}
                />

                {/* Book Info */}
                <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={icons.clock_icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.lightGray
                        }}
                    />
                    <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.lastRead}</Text>

                    <Image
                        source={icons.page_icon}
                        style={{
                            marginLeft: SIZES.radius,
                            width: 20,
                            height: 20,
                            tintColor: COLORS.lightGray
                        }}
                    />
                    <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.completion}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Book</Text>
                <TouchableOpacity onPress={() => navigation.navigate("ReadingPage")}>
                    <Text style={{ ...FONTS.body3, color: COLORS.lightGray, alignSelf: 'flex-start', textDecorationLine: 'underline' }}>view all</Text>
                </TouchableOpacity>
            </View>

            {/* Books */}
            <View style={{ flex: 1, marginTop: 10 }}>
                <FlatList
                    data={myBooks}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default ListBooks;