import React from "react";
import Search from "./Search";
import WeatherReport from "./WeatherReport";
import FavCities from "./FavCities";
import { Container, Row, Col } from "react-bootstrap";

export default function SideBar ({ weather, handleCity, setCity, lat, lng , handleSubmit, setFavCity}){
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Search 
                        setZoom={setZoom}
                        lat={lat}
                        lng={lng}
                        handleCity={handleCity}
                        setCity={setCity}
                        className="search" />
                    </Col>
                    <Col >
                        <FavCities className="favCities" setFavCity={setFavCity}/>
                    </Col>
                </Row>
            </Container>
            <Container className="weatherReport">
                <WeatherReport weather={weather} handleSubmit={handleSubmit}/>
            </Container>
        </>
    )
}