import { Document, Page, Text, View, PDFViewer } from "@react-pdf/renderer";

import { pageSizes, sizePerc } from "../A4Page";
import { Header } from "./Header";
import { Work } from "./Work";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Languages } from "./Languages";
import { CVData } from "./CVData";

export function CVDocument({ data: cvData }: { data: CVData }) {
  return (
    <PDFViewer
      style={{
        width: "100%",
        height: "70rem",
      }}
    >
      <Document
        title={`${cvData.name} CV`}
        author={cvData.name}
        keywords="CV"
        language="english"
        pageMode="fullScreen"
        pageLayout="singlePage"
      >
        <Page
          size={pageSizes}
          style={{
            paddingLeft: sizePerc(7),
            paddingRight: sizePerc(7),
            paddingTop: sizePerc(7),
            paddingBottom: sizePerc(7),
          }}
        >
          <View style={{ paddingBottom: sizePerc(5) }}>
            <Header {...cvData} />
          </View>
          <View
            style={{
              display: "flex",
              gap: sizePerc(3),
            }}
          >
            <Work {...cvData} />
            <Education {...cvData} />
            <Skills {...cvData} />
            <Languages {...cvData} />
          </View>

          <Text
            style={{
              position: "absolute",
              bottom: sizePerc(3),
              left: 0,
              right: 0,
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: sizePerc(1.25),
              fontWeight: 400,
              textDecoration: "none",
            }}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      </Document>
    </PDFViewer>
  );
}
