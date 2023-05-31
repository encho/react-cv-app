import { Text, View } from "@react-pdf/renderer";

import { sizePerc } from "../A4Page";
import { SectionTitle } from "./SectionTitle";
import { styles } from "./styles";
import { CVData } from "./CVData";

export const Skills = ({ skills, intl }: CVData) => {
  return (
    <View>
      <SectionTitle>{intl.skillsAndAbilities}</SectionTitle>
      <View style={styles.verticalItemsLayout}>
        {skills.map(({ name, entries }, i) => {
          return (
            <View key={i} wrap={false} style={styles.columnsLayout}>
              <View style={styles.leftColumn}>
                <Text style={styles.periodText}>{name}</Text>
              </View>
              <View
                style={{
                  ...styles.rightColumn,
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: sizePerc(0.5),
                  marginTop: sizePerc(-0.2),
                }}
              >
                {entries.map((skill) => {
                  return (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: sizePerc(0.125),
                        borderStyle: "solid",
                        borderColor: "#222",
                        backgroundColor: "#fff",
                        paddingHorizontal: sizePerc(0.5),
                        paddingVertical: sizePerc(0.1),
                        borderRadius: sizePerc(0.4),
                      }}
                    >
                      <Text
                        style={{
                          ...styles.badgeText,
                          marginTop: sizePerc(0.2),
                        }}
                      >
                        {skill}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
