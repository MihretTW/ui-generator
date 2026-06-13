function CardPreview((settings)) {
    const cardstyle ={
        width: setting.width;
        hight: setting.height;
        backgroundColor: setting.backgroundColor;
        borderRadius: setting.borderRadius;
        boxShadow: setting.boxShadow;
        border: setting.border;
    }


    return(
        <div style={cardstyle}>

        <h2>{setting.title}</h2>

        <p>{setting.description}</p>

        <button style={buttonStyle}>{setting.buttonText}</button>


        </div>
    )
}

export default CardPreview;