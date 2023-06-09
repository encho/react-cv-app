import { StyleSheet } from "@react-pdf/renderer";

import { sizePerc, widthPerc } from "../A4Page";

const textColor = "#222222";
const linkColor = "#F05122";

const text = {
  xs: sizePerc(1.15),
  sm: sizePerc(1.25),
  base: sizePerc(1.5),
  lg: sizePerc(1.5 * 1.15 ** 1),
  xl: sizePerc(1.5 * 1.15 ** 2),
  "2xl": sizePerc(1.5 * 1.15 ** 3),
  "3xl": sizePerc(1.5 * 1.15 ** 4),
  "4xl": sizePerc(1.5 * 1.15 ** 5),
  "5xl": sizePerc(1.5 * 1.15 ** 5),
  "6xl": sizePerc(1.5 * 1.15 ** 6),
};

// const fontFamily = "Inter";
const fontFamily = "Helvetica";

export const styles = StyleSheet.create({
  footer: {
    fontFamily,
    fontWeight: 400,
    fontSize: text["sm"],
    textDecoration: "none",
  },
  nameText: {
    fontFamily,
    color: "#222",
    fontSize: text["5xl"],
    fontWeight: 600,
    lineHeight: 1.1,
  },
  sectionHeaderText: {
    fontFamily,
    fontWeight: 600,
    fontSize: text["base"],
    color: textColor,
    marginBottom: sizePerc(1.5),
    letterSpacing: widthPerc(0.01),
    textTransform: "uppercase",
  },
  periodText: {
    fontFamily,
    fontWeight: 400,
    fontSize: text["sm"],
    color: textColor,
  },
  itemTitleText: {
    fontFamily,
    fontWeight: 600,
    fontSize: text["lg"],
    marginTop: sizePerc(-0.3),
    color: textColor,
  },
  itemOrganizationNameLink: {
    fontFamily,
    fontWeight: 500,
    fontSize: text["base"],
    marginTop: sizePerc(0.2),
    color: linkColor,
    textDecoration: "none",
  },
  itemOrganizationLocationText: {
    fontFamily,
    fontWeight: 400,
    fontSize: text["sm"],
    color: "#222",
    marginTop: sizePerc(0.1),
  },
  itemDescriptionText: {
    fontFamily,
    lineHeight: 1.4,
    fontSize: text["sm"],
    fontWeight: 400,
    marginTop: sizePerc(0.75),
    color: textColor,
  },
  contactLink: {
    fontFamily,
    fontSize: text["xs"],
    fontWeight: 400,
    color: linkColor,
    textDecoration: "none",
    // textDecoration: "underline",
  },
  contactText: {
    fontFamily,
    fontSize: text["xs"],
    fontWeight: 400,
    color: textColor,
  },
  contactLinkLabel: {
    fontFamily,
    fontSize: text["xs"],
    fontWeight: 500,
    color: textColor,
  },
  badgeText: {
    fontFamily,
    lineHeight: 1.4,
    fontSize: text["sm"],
    fontWeight: 400,
    marginTop: sizePerc(0.75),
    color: textColor,
  },
  languageLevelText: {
    fontFamily,
    fontWeight: 400,
    fontSize: text["sm"],
    color: textColor,
  },
  verticalItemsLayout: {
    display: "flex",
    flexDirection: "column",
    gap: sizePerc(2.5),
  },
  columnsLayout: {
    display: "flex",
    flexDirection: "row",
    gap: widthPerc(3),
  },
  leftColumn: {
    width: widthPerc(20),
  },
  rightColumn: {
    width: widthPerc(63),
  },
});
