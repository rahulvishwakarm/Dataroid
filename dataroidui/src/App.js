import BannerDisplay from "./utils/BannerDisplay/BannerDisplay";
import FooterPage from "./utils/Footer/FooterPage";
import Header from "./utils/Header/Header";
import ServicesBanner from "./utils/ServicesBanner/ServicesBanner";
import VerifiedData from "./utils/VerifiedData/VerifiedData";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import AboutUsMain from "./utils/AboutUs/AboutUsMain";
import DataStoryMain from "./utils/Data Story/DataStoryMain";
import LoginForm from "./utils/Login/LoginForm";
import B2BDatabase from "./utils/Service/B2B Database/B2BDatabase";
import DataMining from "./utils/Service/Data Mining/DataMining";
import DataWrangling from "./utils/Service/Data Wrangling/DataWrangling";
import DataResearch from "./utils/Service/Data Research/DataResearch";
import MasterDatabase from "./utils/Service/Master Database/MasterDatabase";
import Sales from "./utils/Sales/Sales";
import Register from "./utils/Register/Register";

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

                    <Route path="/ContactUs">
                      
                    </Route>

                    <Route path="/register">
                      <Register/>
                    </Route>

                    <Route path="/b2bdatabase">
                        <B2BDatabase/>
                    </Route>

                    <Route path="/datamining">
                        <DataMining/>
                    </Route>

                    <Route path="/datawrangling">
                        <DataWrangling/>
                    </Route>

                    <Route path="/dataresearch">
                        <DataResearch/>
                    </Route>

                    <Route path="/masterdatabase">
                        <MasterDatabase/>
                    </Route>

                    <Route path="/sales">
                        <Sales/>
                    </Route>
                    
                    <Route path="/">
                      <BannerDisplay/>
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
