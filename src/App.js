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
    primaryColor: "#000",
    secondaryColor: "#fff",

    coludDataPlatform: {
      title: "Cloud data platform",
      centerImage: <CenterImage color="#000" />,
      images: [analytics, calender, coconut, fingerPrint, law, plane],
    },
    dbtCloud: {
      heading: "dbt Cloud",
      title: "Central active metadata framework",
      buttonText: "Develop - Text - Document",

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
        fontFamily: allData.fontFamily,
      }}
    >
      <MainComponent {...allData} />
    </div>
  );
}

export default App;
