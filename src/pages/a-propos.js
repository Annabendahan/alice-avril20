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
        <Link to="/">ACCUEIL</Link>

        <Link to="/collections">COLLECTIONS</Link>
      </h5>
    )
    let name = (
      <Link to="/">
        <h5 className="name name__white"> ALICE THONNIER</h5>{" "}
      </Link>
    )

    return (
      <Layout>
        <div
          style={{
            transform: this.state.mounted
              ? "translateY(0vh)"
              : "translateY(100vh)",
            transition: "transform .8s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
          }}
          className="collections"
        >
          <div className="profile">
            <svg
              width="391"
              height="133"
              viewBox="0 0 391 133"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="25.2177" height="132.141" fill="white" />
              <rect x="300.599" width="25.2177" height="132.141" fill="white" />
              <rect x="192.662" width="25.2177" height="71.6182" fill="white" />
              <rect
                x="42.3652"
                y="54.4712"
                width="25.2177"
                height="77.6704"
                fill="white"
              />
              <rect x="107.933" width="25.2177" height="77.6704" fill="white" />
              <rect
                x="259.236"
                y="54.4712"
                width="25.2177"
                height="77.6704"
                fill="white"
              />
              <rect x="365.15" width="25.2177" height="132.141" fill="white" />
              <rect x="42.3652" width="89.7749" height="25.2177" fill="white" />
              <rect
                x="42.3652"
                y="52.4536"
                width="89.7749"
                height="25.2177"
                fill="white"
              />
              <rect
                x="43.373"
                y="106.921"
                width="89.7749"
                height="25.2177"
                fill="white"
              />
              <rect
                x="192.662"
                y="106.921"
                width="89.7749"
                height="25.2177"
                fill="white"
              />
              <rect
                x="192.662"
                y="52.4536"
                width="91.7923"
                height="25.2177"
                fill="white"
              />
              <rect
                x="300.599"
                y="106.921"
                width="89.7749"
                height="25.2177"
                fill="white"
              />
              <rect x="300.599" width="89.7749" height="25.2177" fill="white" />
              <rect x="192.662" width="91.7923" height="25.2177" fill="white" />
              <rect
                x="150.298"
                y="106.921"
                width="25.2177"
                height="25.2177"
                fill="white"
              />
              <rect
                x="150.298"
                y="46.3999"
                width="25.2177"
                height="25.2177"
                fill="white"
              />
            </svg>

            <br />
            <h5>
              <a
                href="https://www.instagram.com/alice_thonnier/"
                target="blank"
              >
                {" "}
                @ALICE_THONNIER
              </a>
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
        </div>
        <Footer left={name} right={navs} />
      </Layout>
    )
  }
}

export default Collections
