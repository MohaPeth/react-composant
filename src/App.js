import React from "react";
import { Navbar, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from "./product";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import withFirstName from "./withFirstName"; // Importation du HOC

function App({ firstName }) {
  return (
    <div className="App" style={{ backgroundColor: '#F0F0F0' }}>
      <header>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">EduFlex</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Acceuil</Nav.Link>
              <Nav.Link href="#features">À propos</Nav.Link>
              <Nav.Link href="#course">Nos Cours</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <main style={{ backgroundColor: '#F0F0F0' }}>
        <Container>

          <h1 className="text-center my-4">Cours populaires</h1>

          <Row className="justify-content-center">
            {/* Première rangée avec les quatre premiers éléments */}
            {products.slice(0, 4).map((product, index) => (
              <Col key={index} md={3}>
                <Card style={{ width: '18rem', marginBottom: '30px', marginRight: '20px' }}>
                  <Image index={index} style={{ marginBottom: '30px', marginRight: '20px' }} />
                  <Card.Body>
                    <Name index={index} />
                    <Description index={index} />
                    <Price index={index} />
                    <Button style={{ backgroundColor: '#00A8E8', borderColor: 'transparent' }}>S'inscrire</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <h1 className="text-center my-4">Cours recommandés</h1>

          <Row className="justify-content-center">
            {/* Deux cartes centrées */}
            {products.slice(4, 6).map((product, index) => (
              <Col key={index} md={6} sm={12}>
                <Card className="mx-auto" style={{ width: '30rem', marginBottom: '80px', marginRight: '20px' }}>
                  <Image index={index + 4} style={{ marginBottom: '30px', marginRight: '20px' }} />
                  <Card.Body>
                    <Name index={index + 4} />
                    <Description index={index + 4} />
                    <Price index={index + 4} />
                    <Button style={{ backgroundColor: '#00A8E8', borderColor: 'transparent' }}>S'inscrire</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <h1 className="text-center my-4">Découvrez nos nouveaux cours</h1>

          {/* Rangée de trois cartes */}
          <Row>
            {/* Lecture des éléments du 7ème au 9ème du tableau products */}
            {products.slice(6, 9).map((product, index) => (
              <Col key={index}>
                <Card style={{ width: '18rem', marginBottom: '30px', marginRight: '20px' }}>
                  <Image index={index + 6} style={{ marginBottom: '30px', marginRight: '20px' }} />
                  <Card.Body>
                    <Name index={index + 6} />
                    <Price index={index + 6} />
                    <Button style={{ backgroundColor: '#00A8E8', borderColor: 'transparent' }}>S'inscrire</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        
          <h1 className="text-center my-4">Cours à venir</h1>

          {/* Rangée d'une carte seule en bas à droite */}
          <Row>
            {products.slice(9, 10).map((product, index) => (
              <Col key={index} className="my-3" xs={12}>
                <Card className="bg-dark text-white ">
                  <Card.Img src={products[index + 9].image} alt={products[index + 9].name} />
                  <Card.ImgOverlay className="my-3">
                    <Name index={index + 9} />
                    <Description index={index + 9} />
                    <div className="d-flex justify-content-between align-items-end py-5">
                      <Card.Text>Prix : {products[index + 9].price}</Card.Text>
                      <Button style={{ backgroundColor: '#00A8E8', borderColor: 'transparent' }}>S'inscrire</Button>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>


          {/* Affichage du nom sous les cartes */}
          {firstName && (
            <p>Nom : {firstName}</p>
          )}

        </Container>
      </main>


      {/* Pied de page */}
      <footer class="py-5  bg-dark text-center">
        <Container>
          <p className="text-white">&copy; Tous droits réservés - EduFlex 2024</p>
          <p className="text-white">Designed by DevDesign</p>
        </Container>
      </footer>
    </div>
  );
}

export default withFirstName(App); // Enveloppez le composant App avec le HOC
