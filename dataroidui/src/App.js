import BannerDisplay from "./utils/BannerDisplay/BannerDisplay";
import Classification from "./utils/Classification/Classification";
import Header from "./utils/Header/Header";
import ServicesBanner from "./utils/ServicesBanner/ServicesBanner";
import VerifiedData from "./utils/VerifiedData/VerifiedData";

function App() {
  return (
    <div className="App">
        <Header/>
        <BannerDisplay/>
        <Classification/>
        <VerifiedData/>
        <ServicesBanner/>
    </div>
  );
}

export default App;
