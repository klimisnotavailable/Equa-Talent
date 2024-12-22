import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";

const Header = () => {
  return (
    <header>
      <div>
        <a href=""></a>
        <div className="flex gap-24 ssm:hidden">
          <Navigation></Navigation>
          <AuthNav></AuthNav>
        </div>
        <button></button>
      </div>
    </header>
  );
};

export default Header;
