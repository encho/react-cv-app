import { Text, View, Link } from "@react-pdf/renderer";

import { styles } from "./styles";
import { SectionTitle } from "./SectionTitle";
import { CVData } from "./CVData";

type WorkItem = {
  organization: {
    name: string;
    city: string;
    country: string;
    url: string;
  };
  period: {
    startDate: string;
    endDate: string;
  };
  title: string;
  description: string;
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

export const Work = ({ work, intl }: CVData) => {
  return (
    <View>
      <SectionTitle>{intl.professionalExperience}</SectionTitle>
      <View style={styles.verticalItemsLayout}>
        {work.map((workItem, i) => {
          return (
            <View key={i} wrap={false} style={styles.columnsLayout}>
              <View style={styles.leftColumn}>
                <Text style={styles.periodText}>
                  {workItem.period.startDate} - {workItem.period.endDate}
                </Text>
              </View>
              <View style={styles.rightColumn}>
                <ItemHeader
                  title={workItem.title}
                  organization={workItem.organization.name}
                  organizationUrl={workItem.organization.url}
                  city={workItem.organization.city}
                  country={workItem.organization.country}
                />
                <View>
                  <Text style={styles.itemDescriptionText}>
                    {workItem.description}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
