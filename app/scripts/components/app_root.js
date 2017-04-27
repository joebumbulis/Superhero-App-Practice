import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Route, Link, NavLink } from "react-router-dom";
import { Card, CardTitle, Col, Modal, Button } from "react-materialize";

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="row">
          {this.props.superheroes.map((hero, i) => {
            return (
              <div key={i} className="hero-card">
                <Col l={4} m={6} s={12}>
                  <Card
                    className="blue darken-3 white-text hero-card"
                    header={
                      <CardTitle image={hero.img}>
                        {hero.name}
                      </CardTitle>
                    }
                  >
                    Superpower: {hero.power}
                  </Card>
                </Col>
              </div>
            );
          })}
        </div>
        <Modal
          header="Modal Header"
          trigger={<Button waves="light">MODAL</Button>}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </Modal>
      </div>
    );
  }
}

export default connect(container.allState)(AppRoot);
