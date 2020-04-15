import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"

import logo from "../images/loga-alice-blanc.png"

class Collections extends Component {
  state = {
    mounted: false,
  }
  componentDidMount() {
    this.setState({ mounted: true })
  }
  render() {
    let navs = (
      <h5 className="navs navs__white">
        <Link to="/collections">COLLECTIONS</Link>
        <Link to="/a-propos">À PROPOS</Link>
      </h5>
    )
    let name = <h5 className="name__white"> ALICE THONNIER</h5>

    return (
      <Layout>
        <div
          style={{
            transform: this.state.mounted
              ? "translateY(0vh)"
              : "translateY(100vh)",
            transition: "transform 1s cubic-bezier(0.72, 0.0, 0.28, 1.0)",
          }}
          className="collections"
        >
          <div className="profile">
            <img src={logo} alt="logo" />
            <br />
            <h5>
              <a href=""> @ALICE</a>
            </h5>

            <h5>
              {" "}
              Alice Thonnier designer parisienne passionnée de mode et
              particulierement par le modélisme depuis toujours réalise ses
              études à Esmod Paris de 2015 à 2018. Elle commence à faire ses
              preuves durant un stage de modéliste chez Bleu Comme Gris, marque
              de luxe pour enfant en 2016. En 2017 elle lance sa marque 12:50 .
              Sa marque vise un vestiaire collectif unisexe au style casualwear.
              Son objectif est de pouvoir habiller les femmes et les hommes avec
              les mêmes vêtements en obtenant un volume différent. Oversizes
              chez la femme et ajustés chez l’homme. Diplomée en 2018 grâce à sa
              collection Heures de Pointe elle est repérée par la Galerie Lyncée
              qui lui propose d’exposer ses collections lors d’expositions
              temporaires. A la suite de son diplôme Alice effectue un stage de
              modélisme chez Balzac Paris et trouve ensuite un emploi dans le
              groupe GPE (Sergent Major , DPAM, Natalys). Durant sont temps
              libre elle continue tout de même de créer des collections.
            </h5>
          </div>
          <Footer left={name} right={navs} />
        </div>
      </Layout>
    )
  }
}

export default Collections
