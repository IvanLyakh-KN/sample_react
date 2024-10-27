import { Component } from "react"
import db from "./db/db";

import Navigation from "./components/navigation/navigation";
import PromoPage from "./pages/promoPage/promoPage";
class App extends Component {

  constructor(props) {
    super(props);
    const { eng, uk } = db;
    this.state = {
      eng,
      uk,
      language: "eng",
      currentPage: 1,
      currentItem: 1
    }
  }

  setLanguage = () => {
    if (localStorage.language) {
      switch (localStorage.language) {
        case "uk":
          this.setState({ language: "uk" });
          break;
        case "eng":
          this.setState({ language: "eng" });
          break;
        default:
          console.log(localStorage.language);
      }
    }
  }

  changeLang = (e) => {
    if (e) {
      switch (e.target.textContent) {
        case "eng":
          localStorage.setItem('language', "eng");
          this.setState({ language: "eng" });
          break;
        case "uk":
          localStorage.setItem("language", "uk");
          this.setState({ language: "uk" });
          break;
        default:
          this.setState({ language: "eng" });
          break;
      }
    }
  }

  LoadedPage = (promoPage) => {
    const data = this.state[this.state.language];
    switch (this.state.currentPage) {
      case 1:
        return <PromoPage /*language={this.state.language}*/ promoPage={promoPage} cards = {data.cards}></PromoPage>;
      case 2:
        return;
      case 3:
        return;
      case 4:
        return;
      default: 
      return <PromoPage></PromoPage>;
    }
  }

  render() {
    const data = this.state[this.state.language];
    const {buttons, nav, promoPage} = data;
    return (
      <div className="wrapper">
        <Navigation buttons = {buttons} nav = {nav} changeLang = {this.changeLang}  /*changePage */></Navigation>
      <main>
        {this.LoadedPage(promoPage)};
      </main>
      </div>
    );
  }
}

export default App;
