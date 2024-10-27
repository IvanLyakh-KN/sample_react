import "./about.css";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import Decor from "../../components/decor/decor";

const About = (props) => {
    const { title, text, img } = props;
    let content = text.map((item, i) => {
        if (item.p) {
            return (
                <p key={i}>{item.p}</p>);
        }
        return <p key={i}>{item.p}</p>;
    })


    
    return (
        <>
            <article className="about">
                <div className="container">
                    <SectionTitle text = {title} clazz = "about__title"></SectionTitle>
                    <Decor color="black"></Decor>
                    <div className="about__text about__text_center">{content}</div>
                </div>
            </article>
        </>
    );
}

export default About;