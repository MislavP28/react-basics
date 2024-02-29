import "./taskcss.scss"
import ArticleComponent from "./articlecomponent-vjezba"
import SidebarComponent from "./sidebarcomponents-ponavljanje"


//body layout
function LayoutBody()
{
    return (
        <main className="display flex">
            <SidebarComponent></SidebarComponent>
            <ArticleComponent></ArticleComponent>
        </main>
    )
}
export default LayoutBody