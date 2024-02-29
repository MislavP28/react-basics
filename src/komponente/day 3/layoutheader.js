import "./taskcss.scss"

function LayoutHeader()
{
    return (
        <header className="background blue margin bottom display flex">
            <div className="logo linkClean">
                <a href="">Logo</a>
            </div>
            
            <div className="menus hide linkCLean"> 
            <div className="margin small">
                <a href="">Home</a>
                </div>
            <div className="margin small">
                <a href="">About</a>
                </div>
            <div className="margin small">
                <a href="">Blog</a>
                </div>
            <div className="margin small">
                <a href="">Contact</a>
                </div>
            </div>
            
        </header>
    )
}
export default LayoutHeader