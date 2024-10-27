import Button from "../../components/buttons/buttons";
import "./promoPage.css";
import "../../components/buttons/buttons.css";
import Decor from "../../components/decor/decor";
import About from "../about/about";
import OurBest from "../../components/ourBest/ourBest";

const PromoPage = ({ promoPage, cards }) => {
    const { promoTitle, promoSubtitle, button, aboutUs, ourBest } = promoPage;
    return (
        <>
            <article className="promo-page">
                <section className="container">
                    <h1 className="promo-page__title">{promoTitle}</h1>
                    <h2 className="promo-page__subtitle">{promoSubtitle[0].name}</h2>
                    <h2 className="promo-page__subtitle">{promoSubtitle[1].name}</h2>
                    <Decor color="white"></Decor>
                    <Button name={button.name} clazz={button.clazz}></Button>
                </section>
            </article>
            <div className="about-us container">
                <About title={aboutUs.name} text={aboutUs.text}></About>
            </div>
            <OurBest title={ourBest} cards={cards}></OurBest>
        </>
    );
}

export default PromoPage;
//    <Cards img={cards[2].img} name={cards[2].name} price={cards[2].price}></Cards>
