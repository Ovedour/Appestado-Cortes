import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../store/actions/category.action";

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const onHandleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.push("Breads", { name: item.title });
  };

  const renderGridItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onHandleSelectedCategory(item)}>
        <View style={styles.gridItem}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderGridItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    width: 160,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: "100%",    
    overflow: 'hidden', // to clip the image within the container
    
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});

