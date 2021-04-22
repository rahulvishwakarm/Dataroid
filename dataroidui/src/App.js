import BannerDisplay from "./utils/BannerDisplay/BannerDisplay";
import Classification from "./utils/Classification/Classification";
import FooterPage from "./utils/Footer/FooterPage";
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
        <FooterPage/>
    </div>
  );
}

export default App;
