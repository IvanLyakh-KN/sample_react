const Button = (props) => {
    const {name, clazz} = props;
    return (
        <button className={clazz} onClick={(e) => {
            console.log(e);
        }}>
            {name}
        </button>
    );
}

export default Button; 