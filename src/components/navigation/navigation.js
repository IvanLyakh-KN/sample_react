import "./navigation.css"
import coffeeBeansImage from './coffee-beans.svg';

const Navigation = ({ buttons, nav, changeLang, changePage }) => {
    let NavMenuLinks = nav.map((element) => {
        const { name, path, id } = element;
        return (
            <li className="navigation__link" key={id}>
                <a href={path} onClick={(e) => {
                    changePage(id, e);
                }}> {name} </a></li>
        );
    });

    return (
        <>
            <div className="navigation">
                <nav className="navigation-nav container">
                    <ul className="navigation-ul">
                        <li className="navigation__link">
                            <a href="#home" className="navigation__logo">
                                <img src={coffeeBeansImage} alt="coffee-beans" />
                            </a>
                        </li>
                        {NavMenuLinks}
                    </ul>
                    <div className="language">
                        <button
                            className={buttons[0].clazz}
                            onClick={changeLang}>
                            {buttons[0].name}
                        </button>

                        <button
                            className={buttons[0].clazz}
                            onClick={changeLang}>
                            {buttons[1].name}
                        </button>
                    </div>
                </nav>
            </div >
        </>
    )
}

export default Navigation;