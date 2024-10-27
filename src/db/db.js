const db = {
    eng: {
        nav: [
            { name: "Coffee house", path: "#", id: 1 },
            { name: "Our coffee", path: "#", id: 2 },
            { name: "For your pleasure", path: "#", id: 3 }
        ],
        buttons: [
            { name: "eng", clazz: "btn btn-outline-light" },
            { name: "uk", clazz: "btn btn-outline-light" }
        ],
        promoPage: {
            promoTitle: "Everything You Love About Coffee",
            promoSubtitle: [
                { name: "We makes every day full of energy and taste", id: 1 },
                { name: "Want to try our beans?", id: 1 }
            ],
            button: {
                clazz: "btn btn-outline-light btn-more",
                name: "More",
                id: 1
            },
            aboutUs: {
                name: "About Us",
                text: [
                    {
                        p: "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
                        key: 1
                    },
                    {
                        p: "Now residence dashwoods she excellent you.Shade being under his bed her, Much read on as draw.Blessing for ignorant exercise any yourself unpacked.Pleasant horrible but confined day end marriage.Eagerness furniture set preserved far recommend.Did even but nor are most gave hope.Secure active living depend son repair day ladies now.",
                        key: 1
                    }
                ]
            },
            ourBest: {
                name: "Our Best",
                key: 1
            }
        },
        cards: [
            {
                img: "SolimoCoffee.jpg",
                name: "Solimo Coffee Beans 2 kg",
                origin: "",
                price: "10.74$",
                best: true,
                key: 1
            },
            {
                img: "PrestoCoffee.jpg",
                name: "Presto Coffee Beans 1 kg",
                origin: "",
                price: "15.99$",
                best: true,
                key: 2
            },
            {
                img: "AromistcoCoffee.jpg",
                name: "AROMISTICO Coffee 1 kg",
                origin: "",
                price: "6.99$",
                best: true,
                key: 3
            }
        ]
    },

    uk: {

    }
}

export default db;