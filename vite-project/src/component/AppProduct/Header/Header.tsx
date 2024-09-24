import { Container, Navbar } from "react-bootstrap"

export const Header = () => {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Brand link</Navbar.Brand>
          </Container>
      </Navbar>
    </div>
  )
}


