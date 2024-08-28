import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  text: {
    fontSize: 20,
    color: 'white',
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  scroll: {
    flexDirection: 'column',
    padding: 24,
    borderRadius: 8,
    marginTop: 24,
        height: '100%',
    width: '100%'
  },
});

export default styles;