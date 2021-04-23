import BannerDisplay from "./utils/BannerDisplay/BannerDisplay";
import Classification from "./utils/Classification/Classification";
import FooterPage from "./utils/Footer/FooterPage";
import Header from "./utils/Header/Header";
import ServicesBanner from "./utils/ServicesBanner/ServicesBanner";
import VerifiedData from "./utils/VerifiedData/VerifiedData";
import {BrowserRouter as Router,Switch, Route,Link} from 'react-router-dom'
import AboutUsMain from "./utils/AboutUs/AboutUsMain";
import DataStoryMain from "./utils/Data Story/DataStoryMain";

function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
                <Switch>

                    <Route path="/aboutUs">
                      <AboutUsMain/>
                    </Route>
                    
                    <Route path="/datastory">
                      <DataStoryMain/>
                    </Route>
                    
                    <Route path="/">
                      <BannerDisplay/>
                      <Classification/>
                      <VerifiedData/>
                      <ServicesBanner/>
                    </Route>
                    
              </Switch>
          <FooterPage/>
      </div>
    </Router>
  );
}

export default App;
