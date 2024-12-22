import Header from "../Header/Header";

const AppBar = ({children}) => {
    return (<>
        <Header></Header>
        {children}
        </>
    );
};

export default AppBar;