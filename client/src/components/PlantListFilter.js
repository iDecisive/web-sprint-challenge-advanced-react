import React, {useState, useEffect} from 'react';

let PlantListFilter = props => {

    //Props

    let {plantData, setPlantData} = props;

    //State

    let [filter, setFilter] = useState('Any');

    //Functions

    let filterChange = event => {

        setFilter(event.target.value);
        console.log('Filter set to ' + event.target.value);

    }

    useEffect(() => {

        let newPlantData = plantData.filter(item => item.light === filter);

        setPlantData(newPlantData);

    },[filter]);

    return (

        <div id='plant-filter'>

            <p>Sunlight Preference</p>
            
            <select onChange={filterChange}>

                <option>any</option>
                <option>direct</option>
                <option>indirect</option>
                <option>low</option>

            </select>
        
        </div>

    );

}

export default PlantListFilter;