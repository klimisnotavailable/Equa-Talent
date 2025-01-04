import css from "./LocalizationToggler.module.css";

const LocalizationToggler = () => {
    return (
       <select className={`${css.toggler}`}>
        <option value="EN">EN</option>
        <option value="UK">UK</option>
       </select>
    )
};

export default LocalizationToggler;