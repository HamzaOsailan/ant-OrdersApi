import { Space } from "antd";
import "./App.css";
import AppFooter from "./component/AppFooter";
import AppHeader from "./component/AppHeader";
import PageContent from "./component/PageContent";
import SideMenu from "./component/SideMenu";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
}
export default App;