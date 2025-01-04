import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import Icon from "../Icon/Icon";
import css from "./Header.module.css";
import LocalizationToggler from "../LocalizationToggler/LocalizationToggler";
const Header = () => {
  return (
    <header className={`${css.header} md:py-7`}>
      <div className="container flex items-center justify-between">
        <Icon id={"companyLogo"} width={170} height={16} />
        <div className="ssm:hidden lg:flex">
          <Navigation></Navigation>
          <AuthNav></AuthNav>
          <LocalizationToggler></LocalizationToggler>
        </div>
        <button className="lg:hidden">
          <Icon id={"menu"} width={30} height={30} style={{"stroke":"#000000"}} />
        </button>
      </div>
    </header>
  );
};

export default Header;
