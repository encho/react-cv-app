import { Text, View } from "@react-pdf/renderer";
import { ReactNode } from "react";

import { sizePerc } from "../A4Page";
import { styles } from "./styles";

export const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <View
      style={{
        ...styles.sectionHeaderText,
        borderBottomColor: "#eaeaea",
        borderBottomWidth: sizePerc(0.1),
        borderBottomStyle: "solid",
      }}
    >
      <Text style={{ marginBottom: sizePerc(0.25) }}>{children}</Text>
    </View>
  );
};
