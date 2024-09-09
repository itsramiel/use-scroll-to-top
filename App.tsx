import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer, useScrollToTop } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FlashList } from "@shopify/flash-list";

function HomeScreen() {
  const ref = React.useRef<FlashList<number>>(null);

  useScrollToTop(ref);

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        ref={ref}
        data={Array(100).fill(0)}
        estimatedItemSize={17}
        renderItem={({ index }) => <Text key={index}>{index}</Text>}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
