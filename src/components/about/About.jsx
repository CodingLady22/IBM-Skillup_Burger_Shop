import Founder from "../home/Founder"
import { Link } from "react-router-dom"
import search from "../../assets/svg/search-square-svgrepo-com.svg"

function About() {
  return (
    <>
        <div className='about'>
            <main>
                <h1>About Us</h1>

                <article>
                    <h4>Burger shop</h4>
                    <p>
                        This is Burger Shop. The place for the most tasty burgers anywhere. 
                    </p>
                    <p>
                    Explore the various type of food and burgers. Click below to see the menu.
                    </p>

                    <Link to="/menu" className="explore">
                        <img src={search} alt="search icon" width={"25px"} />
                    </Link>
                </article>
        <Founder />
            </main>
        </div>
    </>
  )
}

export default About
