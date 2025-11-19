import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useRouter} from "expo-router";

const {width} = Dimensions.get("window");
// TODO Use later
const slides = [
  {
    title: "Track Your Food Easily",
    text: "Keep your fridge organized with ease.",
  },
  {
    title: "Reduce Waste",
    text: "Get reminders before food expires.",
  },
  {
    title: "Save Money",
    text: "Plan smarter and avoid extra purchases.",
  },
];

export default function Onboarding() {
  const router = useRouter();

  async function finish() {
    console.log("FINISH ONBOARDING");

    await AsyncStorage.setItem('onboarding', 'true');
    router.replace('/');
  }

  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        height={Dimensions.get("window").height}
        data={slides}
        renderItem={({item, index}) => (
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>

            {index === slides.length - 1 && (
              <TouchableOpacity style={styles.button} onPress={finish}>
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: {
    width,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#2ecc71",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
