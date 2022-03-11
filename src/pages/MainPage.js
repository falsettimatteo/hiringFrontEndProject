import React from "react";
import { Container } from "react-bootstrap";
import ContinentCard from "../components/ContinentCard";

function MainPage() {
  return (
    <>
      <Container className="d-flex justify-content-between">
        <ContinentCard
          href="/europe"
          text="See European coutries"
          name="Europe"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/1200px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png"
        />

        <ContinentCard
          name="Asia"
          href="/asia"
          text="See Asian countries"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/1200px-Asia_%28orthographic_projection%29.svg.png"
        />

        <ContinentCard
          href="/africa"
          name="Africa"
          text="See Africans Countries"
          img="https://upload.wikimedia.org/wikipedia/commons/8/86/Africa_%28orthographic_projection%29.svg"
        />

        <ContinentCard
          name="North America"
          text="See North Americans countries"
          href="/northAmerica"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Location_North_America.svg/1200px-Location_North_America.svg.png"
        />
      </Container>

      <Container className="d-flex justify-content-between">
        <ContinentCard
          name="South America"
          text="See South Americans countries"
          href="/southAmerica"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/South_America_%28orthographic_projection%29.svg/1200px-South_America_%28orthographic_projection%29.svg.png"
        />
        <ContinentCard
          name="Oceania"
          text="See Oceanian countries"
          href="/oceania"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Australia_%28orthographic_projection%29.svg/1200px-Australia_%28orthographic_projection%29.svg.png"
        />

        <ContinentCard
          name="Antartica"
          text="See Antartican countries"
          href="/antartica"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Antarctica_%28orthographic_projection%29.svg/1200px-Antarctica_%28orthographic_projection%29.svg.png"
        />

        <ContinentCard
          name="The Earth"
          text="See all the countries"
          href="/all"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Oceania_%28orthographic_projection%29.svg/1200px-Oceania_%28orthographic_projection%29.svg.png"
        />
      </Container>
    </>
  );
}

export default MainPage;
