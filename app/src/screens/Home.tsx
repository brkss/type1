import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  RecordsHistory,
  DemonsHome,
  HistoryHome,
  CreateRecordHome,
  CreateSingleRecord,
  ActiveDemons,
} from "../components";

export const Home: React.FC<any> = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.wrap}>
          <TouchableOpacity onPress={() => navigation.navigate("menu")}>
            <Text>Menu</Text>
          </TouchableOpacity>
          <HistoryHome />
          <CreateSingleRecord />
          <ActiveDemons navigation={navigation} />
          <RecordsHistory />
          {false ? (
            <CreateRecordHome onClick={() => navigation.navigate("record")} />
          ) : null}
          <DemonsHome clicked={() => navigation.navigate("demons")} />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 10,
    marginBottom: 20,
  },
  wrap: {},
});
