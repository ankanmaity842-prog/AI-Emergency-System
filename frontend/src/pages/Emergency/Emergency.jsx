import { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import EmergencyCard from "../../components/EmergencyCard/EmergencyCard";

import EmergencyMap from "../../components/EmergencyMap/EmergencyMap";
import NearbyAssistance from "../../components/NearbyAssistance/NearbyAssistance";

import { createEmergency } from "../../services/emergency";

import "./Emergency.css";


const Emergency = () => {

  const [formData, setFormData] = useState({
    category: "medical",
    description: "",
    requirements: "",
  });


  const [location, setLocation] = useState(null);

  const [loading, setLoading] = useState(false);

  const [locationLoading, setLocationLoading] =
    useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");


  // --------------------------------
  // Handle form changes
  // --------------------------------

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // --------------------------------
  // Get current GPS location
  // --------------------------------

  const getCurrentLocation = () => {

    setError("");

    if (!navigator.geolocation) {

      setError(
        "GPS location is not supported by your browser."
      );

      return;

    }


    setLocationLoading(true);


    navigator.geolocation.getCurrentPosition(

      (position) => {

        const latitude =
          position.coords.latitude;

        const longitude =
          position.coords.longitude;


        setLocation({
          latitude,
          longitude,
        });


        setLocationLoading(false);

      },


      (geoError) => {

        console.error(
          "Location error:",
          geoError
        );


        setLocationLoading(false);


        if (geoError.code === 1) {

          setError(
            "Location permission was denied. Please allow location access."
          );

        } else {

          setError(
            "Unable to get your current location."
          );

        }

      },


      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }

    );

  };


  // --------------------------------
  // Submit emergency
  // --------------------------------

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setSuccess("");

    setError("");


    try {

      /*
       * If GPS has not been obtained yet,
       * automatically request it.
       */

      let currentLocation = location;


      if (!currentLocation) {

        if (!navigator.geolocation) {

          throw new Error(
            "GPS location is not supported."
          );

        }


        currentLocation =
          await new Promise(
            (resolve, reject) => {

              navigator.geolocation.getCurrentPosition(

                (position) => {

                  resolve({
                    latitude:
                      position.coords.latitude,

                    longitude:
                      position.coords.longitude,
                  });

                },

                () => {

                  reject(
                    new Error(
                      "Unable to obtain your location."
                    )
                  );

                },

                {
                  enableHighAccuracy: true,
                  timeout: 10000,
                  maximumAge: 0,
                }

              );

            }
          );


        setLocation(currentLocation);

      }


      // --------------------------------
      // Prepare backend request
      // --------------------------------

      const emergencyData = {

        message:
          formData.description,

        category:
          formData.category,

        language:
          "auto",

        latitude:
          currentLocation.latitude,

        longitude:
          currentLocation.longitude,

        requirements:
          formData.requirements,

      };


      console.log(
        "Emergency request:",
        emergencyData
      );


      // --------------------------------
      // Send to backend
      // --------------------------------

      const response =
        await createEmergency(
          emergencyData
        );


      console.log(
        "Emergency created:",
        response
      );


      setSuccess(
        "Emergency reported successfully. Help is being coordinated."
      );


      // Clear form

      setFormData({
        category: "medical",
        description: "",
        requirements: "",
      });


    } catch (err) {

      console.error(
        "Emergency submission failed:",
        err
      );


      setError(
        err?.response?.data?.detail ||
        err?.message ||
        "Unable to create emergency."
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="page-layout">

      <div className="page-body">

        <Sidebar />


        <main className="page-content emergency-page">

          <div className="emergency-header">

            <div>

              <h1>
                Emergency Assistance
              </h1>

              <p className="page-description">

                Report an emergency and get
                nearby assistance using your
                current location.

              </p>

            </div>


            {/* Emergency Now */}

            <button
              type="button"
              className="emergency-now-button"
              onClick={getCurrentLocation}
              disabled={locationLoading}
            >

              {locationLoading
                ? "Getting Location..."
                : "🚨 Emergency Now"}

            </button>

          </div>


          {/* Success */}

          {success && (

            <div className="success-message">

              {success}

            </div>

          )}


          {/* Error */}

          {error && (

            <div className="error-message">

              {error}

            </div>

          )}


          <div className="emergency-container">


            {/* -------------------------------- */}
            {/* Emergency Form */}
            {/* -------------------------------- */}

            <form
              className="emergency-form"
              onSubmit={handleSubmit}
            >


              {/* Emergency Type */}

              <div className="form-group">

                <label>
                  Emergency Type
                </label>


                <select
                  name="category"
                  value={
                    formData.category
                  }
                  onChange={
                    handleChange
                  }
                >

                  <option value="medical">
                    Medical Emergency
                  </option>

                  <option value="accident">
                    Accident
                  </option>

                  <option value="fire">
                    Fire
                  </option>

                  <option value="flood">
                    Flood
                  </option>

                  <option value="disaster">
                    Natural Disaster
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>


              {/* Description */}

              <div className="form-group">

                <label>
                  Short Description
                </label>


                <textarea
                  name="description"
                  value={
                    formData.description
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Describe the emergency..."
                  maxLength={1000}
                  required
                />

              </div>


              {/* Requirements */}

              <div className="form-group">

                <label>
                  Requirements
                </label>


                <textarea
                  name="requirements"
                  value={
                    formData.requirements
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Example: Ambulance, hospital, shelter..."
                />

              </div>


              {/* GPS status */}

              <div className="location-status">

                {location ? (

                  <>

                    <span>
                      📍 Location detected
                    </span>

                    <small>

                      {location.latitude.toFixed(6)},
                      {" "}
                      {location.longitude.toFixed(6)}

                    </small>

                  </>

                ) : (

                  <span>
                    📍 Location will be detected
                    when emergency is submitted
                  </span>

                )}

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="emergency-submit"
                disabled={loading}
              >

                {loading
                  ? "Sending Emergency..."
                  : "🚨 Report Emergency"}

              </button>

            </form>


            {/* -------------------------------- */}
            {/* Existing Emergency Card */}
            {/* -------------------------------- */}

            <EmergencyCard />

          </div>


          {/* -------------------------------- */}
          {/* Map */}
          {/* -------------------------------- */}

          {location && (

            <section className="emergency-map-section">

              <div className="section-header">

                <h2>
                  Your Emergency Location
                </h2>

                <p>
                  Nearby emergency services
                  are shown below.
                </p>

              </div>


              <EmergencyMap
                latitude={
                  location.latitude
                }
                longitude={
                  location.longitude
                }
              />

            </section>

          )}


          {/* -------------------------------- */}
          {/* Nearby Assistance */}
          {/* -------------------------------- */}

          {location && (

            <NearbyAssistance
              latitude={
                location.latitude
              }
              longitude={
                location.longitude
              }
            />

          )}

        </main>

      </div>

    </div>

  );

};


export default Emergency;