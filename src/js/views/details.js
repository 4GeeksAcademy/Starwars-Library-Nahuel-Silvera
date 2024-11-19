import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);

        if (params.resource && params.uid) {
            actions.getDetails(params.resource, params.uid);
        }

        return () => {
            actions.removeCurrentItem();
        };
    }, [params.resource, params.uid]);

    // Mostrar detalles de un vehiculo
    const renderVehicleDetails = () => {
        const vehicle = store.currentItem.properties;
        return (
            <div className="details">
                <p><strong>Capacidad de carga:</strong> {vehicle.cargo_capacity} t</p>
                <p><strong>Precio:</strong> {vehicle.cost_in_credits}</p>
                <p><strong>Tamaño:</strong> {vehicle.length}</p>
                <p><strong>Fabricante:</strong> {vehicle.manufacturer}</p>
                <p><strong>Modelo:</strong> {vehicle.model}</p>
                <p><strong>Pasajeros:</strong> {vehicle.passengers}</p>
            </div>
        );
    };

    // Mostrar detalles de un planeta
    const renderPlanetDetails = () => {
        const planet = store.currentItem.properties;
        return (
            <div className="details">
                <p><strong>Clima:</strong> {planet.climate}</p>
                <p><strong>Diámetro:</strong> {planet.diameter} km</p>
                <p><strong>Población:</strong> {new Intl.NumberFormat().format(planet.population)}</p>
                <p><strong>Tipo de terreno:</strong> {planet.terrain}</p>
                <p><strong>Tipo de gravedad:</strong> {planet.gravity}</p>
            </div>
        );
    };

    // Mostrar detalles de un personaje
    const renderPersonDetails = () => {
        const person = store.currentItem.properties;
        return (
            <div className="details">
                <p><strong>Nacimiento:</strong> {person.birth_year}</p>
                <p><strong>Género:</strong> {person.gender}</p>
                <p><strong>Altura:</strong> {person.height} cm</p>
                <p><strong>Color de piel:</strong> {person.skin_color}</p>
                <p><strong>Color de ojos:</strong> {person.eye_color}</p>
            </div>
        );
    };

    return (
        <div className="container d-flex justify-content-center pt-5">
            {store.currentItem && (
                <React.Fragment>
                    <div className="animated-card mb-3 border-0" style={{ maxWidth: "700px", maxHeight: "800px", borderRadius: "15px" }}>
                        <div className="row g-0 d-flex align-items-center" style={{ backgroundColor: "#0C0E14", borderRadius: "15px" }}>
                            <div className="col-md-4">
                                <img 
                                    src={`https://starwars-visualguide.com/assets/img/${params.resource === "people" ? "characters" : params.resource}/${params.uid}.jpg`}
                                    className="card-img-top"
                                    alt="Character"
                                    style={{ borderRadius: "15px", width: "100%", height: "auto" }}
                                />
                            </div>

                            <div className="col-md-8">
                                <div className="card-body text-white">
                                    <h1 className="card-title"><strong>{store.currentItem.properties.name}</strong></h1>
                                    
                                    {params.resource === "people" && renderPersonDetails()}
                                    {params.resource === "vehicles" && renderVehicleDetails()}
                                    {params.resource === "planets" && renderPlanetDetails()}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Debug code */}
                    {console.log("Current Item Properties:", store.currentItem.properties)}

                </React.Fragment>
            )}
        </div>
    );
};
