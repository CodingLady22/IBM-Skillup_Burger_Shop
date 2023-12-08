import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/skj.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <h2>founder</h2>
        <div className="content">
          <div className="left-box">
            <img src={me} alt="Founder" height={200} width={200} />
            <h3>Nelson</h3>
          </div>

          <div className="right-box">
            <p>
            Hey, Everyone I am Nelson, the founder of Burger Shop.
            <br />
            Our aim is to create the most tasty burger on planet.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Founder;
