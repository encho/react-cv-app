import { Text, View, Link } from "@react-pdf/renderer";

import { styles } from "./styles";
import { SectionTitle } from "./SectionTitle";
import { sizePerc, widthPerc } from "../A4Page";
import { CVData } from "./CVData";

type EducationItem = {
  institution: {
    name: string;
    city: string;
    country: string;
    url: string;
  };
  period: {
    startDate: string;
    endDate: string;
  };
  degree: string;
  description?: string;
  thesis?: {
    title: string;
    url: string;
    publicationDate: string;
  };
};

type ItemHeaderProps = {
  title: string;
  organization: string;
  organizationUrl: string;
  city: string;
  country: string;
};

const ItemHeader = ({
  title,
  organization,
  organizationUrl,
  city,
  country,
}: ItemHeaderProps) => {
  return (
    <View>
      <View>
        <Text style={styles.itemTitleText}>{title}</Text>
      </View>
      <View>
        <Link src={organizationUrl} style={styles.itemOrganizationNameLink}>
          {organization}
        </Link>

        <Text style={styles.itemOrganizationLocationText}>
          {city}, {country}
        </Text>
      </View>
    </View>
  );
};

export const Education = ({ education, intl }: CVData) => {
  return (
    <View style={{}}>
      <SectionTitle>{intl.education}</SectionTitle>

      <View style={styles.verticalItemsLayout}>
        {education.map((educationItem, i) => {
          return (
            <View key={i} wrap={false} style={styles.columnsLayout}>
              <View style={styles.leftColumn}>
                <Text style={styles.periodText}>
                  {educationItem.period.startDate} -{" "}
                  {educationItem.period.endDate}
                </Text>
              </View>
              <View style={styles.rightColumn}>
                <ItemHeader
                  title={educationItem.degree}
                  organization={educationItem.institution.name}
                  organizationUrl={educationItem.institution.url}
                  city={educationItem.institution.city}
                  country={educationItem.institution.country}
                />

                {educationItem.description ? (
                  <View>
                    <Text style={styles.itemDescriptionText}>
                      {educationItem.description}
                    </Text>
                  </View>
                ) : null}
                {educationItem.thesis ? (
                  <View
                    style={{ width: widthPerc(60), marginTop: sizePerc(0.5) }}
                  >
                    <Link
                      src={educationItem.thesis.url}
                      style={styles.contactLink}
                    >
                      {educationItem.thesis.title}
                    </Link>
                  </View>
                ) : null}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
