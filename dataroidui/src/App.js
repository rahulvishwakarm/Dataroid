import BannerDisplay from "./utils/BannerDisplay/BannerDisplay";
import Classification from "./utils/Classification/Classification";
import Header from "./utils/Header/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <BannerDisplay/>
        <Classification/>
    </div>
  );
}

export default App;
