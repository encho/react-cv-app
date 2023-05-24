import { Text, View, Link } from "@react-pdf/renderer";

import { styles } from "./styles";
import { sizePerc } from "../A4Page";

type ContactData = {
  phone?: string;
  address?: string;
  email?: string;
  web?: string;
  linkedin?: string;
};

type PersonalData = {
  dateOfBirth?: string;
  birthplace?: string;
  maritalStatus?: string;
  citizenship?: string;
};

type HeaderProps = {
  name: string;
  contactData: ContactData;
  personalData: PersonalData;
};

export const Header = ({ name, contactData, personalData }: HeaderProps) => {
  return (
    <View>
      <View style={{ marginBottom: sizePerc(1.5) }}>
        <Text style={styles.nameText} hyphenationCallback={(word) => [word]}>
          {name}
        </Text>
      </View>

      <View>
        <View style={{ display: "flex", gap: sizePerc(0.2) }}>
          {personalData.dateOfBirth ? (
            <ContactItem
              text={personalData.dateOfBirth}
              label="Date of Birth"
            />
          ) : null}
          {personalData.birthplace ? (
            <ContactItem text={personalData.birthplace} label="Birthplace" />
          ) : null}
          {personalData.maritalStatus ? (
            <ContactItem
              text={personalData.maritalStatus}
              label="Marital Status"
            />
          ) : null}
          {personalData.citizenship ? (
            <ContactItem text={personalData.citizenship} label="Citizenship" />
          ) : null}
        </View>
      </View>

      <View style={{ marginTop: sizePerc(1.5 / 2) }}>
        <View style={{ display: "flex", gap: sizePerc(0.2) }}>
          {contactData.address ? (
            <ContactItem text={contactData.address} label="Address" />
          ) : null}
          {contactData.email ? (
            <ContactItem
              text={contactData.email}
              link={`mailto:${contactData.email}`}
              label="E-Mail"
            />
          ) : null}
          {contactData.phone ? (
            <ContactItem
              text={contactData.phone}
              link={`tel:${contactData.phone}`}
              label="Phone"
            />
          ) : null}
          {contactData.web ? (
            <ContactItem
              text={contactData.web}
              link={contactData.web}
              label="Web"
            />
          ) : null}
          {contactData.linkedin ? (
            <ContactItem
              text={contactData.linkedin}
              link={contactData.linkedin}
              label="LinkedIn"
            />
          ) : null}
        </View>
      </View>
    </View>
  );
};

const ContactItem = ({
  label,
  link,
  text,
}: {
  label: string;
  link?: string;
  text: string;
}) => {
  return (
    <View style={{ display: "flex", flexDirection: "row", gap: sizePerc(3) }}>
      <View style={{ width: "15%" }}>
        <Text style={styles.contactLinkLabel}>{label}</Text>
      </View>
      <View style={{ width: "70%" }}>
        {link ? (
          <Link src={link} style={styles.contactLink}>
            {text}
          </Link>
        ) : (
          <Text style={styles.contactText}>{text}</Text>
        )}
      </View>
    </View>
  );
};
