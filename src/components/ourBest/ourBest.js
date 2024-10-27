import Cards from "../cards/cards";
import SectionTitle from "../sectionTitle/sectionTitle";
import "./ourBest.css";

const OurBest = ({ title, cards }) => {

    let cardsArr = cards.filter(item => item.best);
    return (
        <section className="ourBest">
            <div className="container">
                <div className="ourBest__content">
                    <SectionTitle text={title.name}></SectionTitle>
                    <div className="ourBest__cards">
                        <Cards cards={cardsArr}></Cards>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurBest;
