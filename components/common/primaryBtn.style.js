import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: SIZES.xSmall,
  },
  btnText: {
    color: COLORS.white,
    fontSize: 20,
  },
});

export default styles;
