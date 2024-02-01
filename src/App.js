import MainComponent from "./components/MaiComponent/MainComponent";
import {
  analytics,
  calender,
  centerImage,
  coconut,
  fingerPrint,
  law,
  plane,
} from "./images";
import CenterImage from "./images/CenterImage";

function App() {
  const allData = {
    fontFamily: "'Inter', sans-serif",
    background: "#fff",
    primaryColor: "#000",
    secondaryColor: "#fff",
    boxshadowColor: "rgba(0, 0, 0, 0.1)",
    coludDataPlatform: {
      title: "Cloud data platform",
      circleBorderWidth: "3px",
      lineBorderWidth: "2px",

      centerImage: (
        <CenterImage
          strokeColor="#000"
          plateColor="#fff"
          bottomPlateColor="#000"
        />
      ),
      images: [analytics, calender, coconut, fingerPrint, law, plane],
    },
    dbtCloud: {
      heading: "dbt Cloud",
      title: "Central active metadata framework",
      buttonText: "Develop - Text - Document",
      borderWidth: "1px",

      data: [
        { title: "Design", info: "dbt Mesh" },
        { title: "Build", info: "Cloud CLI & IDE" },
        { title: "Deploy", info: "Scheduler CI" },
        { title: "Discover", info: "dbt Explorer" },
        { title: "Align", info: "dbt Semantic Layer" },
        { title: "Observe", info: "Test & Alerts" },
      ],
    },
  };
  return (
    <div
      style={{
        "--primaryColor": allData.primaryColor,
        "--secondaryColor": allData.secondaryColor,
        "--background": allData.background,
        "--boxShadowColor": allData.boxshadowColor,
        fontFamily: allData.fontFamily,
      }}
    >
      <MainComponent {...allData} />
    </div>
  );
}

export default App;
