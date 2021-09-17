import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SingleRecord: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={style.labelContainer}>
        <Text style={style.label}>Good</Text>
      </View>
      <View style={style.bgContainer}>
        <Text style={style.bgRecord}>120</Text>
        <Text style={style.bgUnit}>mg/dl</Text>
      </View>
      <View style={style.records}>
        {/* Single Record */}
        <View style={style.recordContainer}>
          <Text style={style.recordLabel}>before eating</Text>
          <View style={style.recordValueContainer}>
            <Text style={style.recordValue}>130</Text>
            <Text style={style.recordUnit}>mg/dl</Text>
          </View>
        </View>
        {/* Single Record */}
        {/* Single Record */}
        <View style={style.recordContainer}>
          <Text style={style.recordLabel}>insulin </Text>
          <View style={style.recordValueContainer}>
            <Text style={style.recordValue}>14</Text>
            <Text style={style.recordUnit}>units</Text>
          </View>
        </View>
        {/* Single Record */}
      </View>
      <View style={style.records}>
        {/* Single Record */}
        <View style={style.recordContainer}>
          <Text style={style.recordLabel}>carbs taken</Text>
          <View style={style.recordValueContainer}>
            <Text style={style.recordValue}>203</Text>
            <Text style={style.recordUnit}>grams</Text>
          </View>
        </View>
        {/* Single Record */}
        {/* Single Record */}
        <View style={style.recordContainer}>
          <Text style={style.recordLabel}>insulin</Text>
          <View style={style.recordValueContainer}>
            <Text style={style.recordValue}>0</Text>
            <Text style={style.recordUnit}> units</Text>
          </View>
        </View>
        {/* Single Record */}
      </View>
      <View style={style.dateContainer}>
        <Text style={style.date}>3 Hours ago.</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 100,
    backgroundColor: "#EFEBE8",
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
    width: "100%",
  },
  labelContainer: {
    alignSelf: "flex-start",
    borderRadius: 50,
    backgroundColor: "#BEE193",
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  label: {
    fontWeight: "bold",
    fontSize: 10,
  },
  bgContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bgRecord: {
    fontSize: 27,
    fontWeight: "bold",
  },
  bgUnit: {
    fontSize: 14,
    fontWeight: "bold",
    bottom: 0,
  },
  records: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
    justifyContent: "space-between",
  },
  recordContainer: {
    marginRight: 10,
  },
  recordLabel: {
    fontSize: 15,
    opacity: 0.9,
  },
  recordValueContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  recordValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  recordUnit: {
    fontSize: 10,
  },
  dateContainer: {
    marginTop: 10,
  },
  date: {
    fontSize: 12,
  },
});
