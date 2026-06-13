function ButtonPreview ((settings)) {
    const buttonStyle = {
        width: setting.width;
        height: setting.height;
        borderRadius: setting.borderRadius;
        backgroundColor: setting.backgroundColor;
        color: setting.textColor;
        fontSize: setting.fontSize;
        border: setting.border;

}

return(

    <div style={buttonstyle}>

        {setting.buttonText}


    </div>
)

}

export default ButtonPreview;