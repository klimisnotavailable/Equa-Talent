import css from "./AuthNav.module.css";

const AuthNav = () => {
    return (
        <ul className="flex gap-3 pr-4 xlg:pr-6">
            <li className={`link`}>Log in</li>
            <li className={`link linkAccent`}>Sign up</li>
        </ul>
    )
};

export default AuthNav;