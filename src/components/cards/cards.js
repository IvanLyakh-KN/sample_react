import "./cards.css"

const Cards = ({ cards }) => {

    let cardComponents = cards.map(card => {
        const { img, name, origin, price, key } = card;
        if (card.origin) {
            return (
                <div className="card" key={key}>
                    <div className="card__img">
                        <img src={require("./images/" + img)} alt={name} />
                    </div>
                    <div className="card__body">
                        <p className="card__title">{name}</p>
                        <p className="card__origin">{origin}</p>
                        <p className="card__price">{price}</p>
                    </div>
                </div >
            );
        } else {
            return (
                <div className="card" key={key}>
                    <div className="card__img">
                        <img src={require("./images/" + img)} alt={name} />
                    </div>
                    <div className="card__body">
                        <p className="card__title">{name}</p>
                        <p className="card__price">{price}</p>
                    </div>
                </div>
            );
        }
    });


    return cardComponents;
}
export default Cards;