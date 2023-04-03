import axios from "axios";
import { useEffect, useState } from "react";

function Listcountry() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,flag")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center my-4">LIST COUNTRY</h1>
        </div>
      </div>
      <div className="row">
        {countries.map((country, index) => (
          <div key={index} className="col-md-6 col-lg-6 mb-4">
            <div className="card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={country.flag}
                    className="card-img-top img-fluid"
                    alt="flag"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{country.name}</h5>
                    <p className="card-text">{country.region}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listcountry;
