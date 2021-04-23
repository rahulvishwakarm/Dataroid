import BannerDisplay from "./utils/BannerDisplay/BannerDisplay";
import Classification from "./utils/Classification/Classification";
import FooterPage from "./utils/Footer/FooterPage";
import Header from "./utils/Header/Header";
import ServicesBanner from "./utils/ServicesBanner/ServicesBanner";
import VerifiedData from "./utils/VerifiedData/VerifiedData";
import {BrowserRouter as Router,Switch, Route,Link} from 'react-router-dom'
import AboutUsMain from "./utils/AboutUs/AboutUsMain";

function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
            <Route path="/">
              <BannerDisplay/>
              <Classification/>
              <VerifiedData/>
              <ServicesBanner/>
            </Route>

            <Route path="/aboutUs">
              <AboutUsMain/>
            </Route>
          <FooterPage/>
      </div>
    </Router>
  );
}

export default App;
