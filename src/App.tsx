import { registerFonts } from "./registerFonts";
import { AppHeader } from "./AppHeader";
import { CVDocument } from "./cv/CVDocument";

// Replace the file cvData.json with your data, to generate your personalized CV
import cvData from "./cv/data/MerliniusMumblepuff.json";

registerFonts();

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="CVDocumentWrapper">
        <CVDocument data={cvData} />
      </div>
    </div>
  );
}

export default App;
