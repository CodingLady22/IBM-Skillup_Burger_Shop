import { Link } from "react-router-dom";
import "../../styles/menu.scss"
import MenuCard from "./MenuCard"
import menuData from "../../menuData"

function Menu() {
  return (
    <>
        <div id="menu">
            <h3>Menu</h3>
            <div>
                {menuData.map(item => (
                    <MenuCard 
                    key={item.itemNum}
                    itemNum={item.itemNum}
                    burgerSrc={item.burgerSrc}
                    price={item.price}
                    title={item.title}
                    />
                )) }
            </div>
            <Link className="ship-link" to={"/cart"}>View Orders</Link>
        </div>
    </>
  )
}

export default Menu