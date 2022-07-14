import React, { useState } from "react";
import defaultColors from "./data/defaultColors.json";
import { StyleSheet, FlatList, Alert } from "react-native";
import ColorButton from "./components/ColorButton";
import ColorForm from "./components/ColorForm";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  const [colors, setColors] = useState([]);

  return (
    <>
      <ColorForm
        onNewColor={(newColor) => Alert.alert(`TODO: add color ${newColor}`)}
      />
      <FlatList
        style={[styles.container, { backgroundColor }]}
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={setBackgroundColor}
            />
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    displacement: "flex",
  },
});
