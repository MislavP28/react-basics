function PropComponent(props)
{
    console.log("Props:", props);
    console.log("Title:", props.tablice);
    console.log("Subtitle:", props.subtitles);
    const containerStyle =
    {
        backgroundColor:"black",
        borderRadius:"10px",
        padding:"20px",
        color:"white"
    }
    return (
        <div style={containerStyle}>
            <h4>Title from PropComponent</h4>
            <h6>Written by: {props.user}</h6>
            <p>{props.subtitles}</p>
            </div>
        
    )
}
export {PropComponent}