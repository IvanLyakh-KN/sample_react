const SectionTitle = ({text, clazz}) => {
    let clazzName = "section-title";
    if (clazz) {
        clazzName += clazz;
    }
    return (
        <h2 className={clazzName}>{text}</h2>
    );
}
export default SectionTitle;