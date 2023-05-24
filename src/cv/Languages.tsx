import { Text, View } from "@react-pdf/renderer";

import { sizePerc, widthPerc } from "../A4Page";
import { SectionTitle } from "./SectionTitle";
import { styles } from "./styles";

type TLanguages = { language: string; level: string }[];

export const Languages = ({ languages }: { languages: TLanguages }) => {
  return (
    <View wrap={false}>
      <SectionTitle>Languages</SectionTitle>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: sizePerc(0.75),
        }}
      >
        {languages.map((language, i) => {
          return (
            <View
              key={i}
              wrap={false}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: widthPerc(0.75),
              }}
            >
              <View>
                <Text style={styles.periodText}>{language.language}</Text>
              </View>
              <View>
                <Text style={styles.languageLevelText}>- {language.level}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
