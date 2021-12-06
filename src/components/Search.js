
import React from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";
  import "@reach/combobox/styles.css"

  function Search({lat,lng, handleCity,lanlngAPI}) {
    const {
        //is this ready to go?
      ready,
      //current value being typed
      value,
      //suggestions getting back and the data itself
      suggestions: { status, data },
      //function to set the value
      setValue,
      //function to clear out suggestions
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
          //This will request places close to the the lat and lon you gave
        location: { lat: () => lat, lng: () => lng },
        radius: 100 * 1000,
      },
    });
  
    return (
      <div className="search">
        <Combobox onSelect={async (address) => {
          //sets valuie to whatever you click on
            setValue(address, false)
            //then clears all other selctions
            clearSuggestions()
            //Will try to run this. If it can not it will give an error
            try{
                const results = await getGeocode({address});
                //this pulls the lat, lng from getGeocode
                const {lat, lng} = await getLatLng(results[0])
                //sends infor back to handleCity
                handleCity({lat,lng, lanlngAPI})
            }catch(error){
                console.log("error")
            }
        }}>
          <ComboboxInput
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
            }}
            //If not ready disable box
            disabled={!ready}
            placeholder="Search your location"
            className="input"
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" &&
              //maps over all suggestions and returns id and description
                data.map(({ id, description }) => (
                  <ComboboxOption key={id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    );
  }


  export default Search






// function Search({ handleCity, setCity }) {

//     return (
//         <>
//             <form onSubmit={handleCity}>
//                 <h3>Search Your Weather</h3>
//                 <input onChange={(e) => setCity(e.target.value)}
//                     type="text" id="input" name="search" placeholder="City Name..." />
//                 <button className="button" type="submit">Find</button>
//             </form>
//         </>
//     )


// }

// export default Search;