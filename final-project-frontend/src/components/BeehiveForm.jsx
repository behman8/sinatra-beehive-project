import React, { useState } from "react";

function BeehiveForm({ addNewBeehive }) {

    const [formData, setFormData] = useState({
        queen_name: "",
        type_of_bees: "",
        number_of_boxes: 0,
        owner_first_name: "",
        owner_last_name: "",
    });

    const handleChange = (event) => {
        setFormData((prev) => {
            return {...prev, [event.target.id]: event.target.value}
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addNewBeehive(formData)
    }
    
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Add Your Beehive</h1>
                <h3>First Name</h3>
                    <input 
                        id="owner_first_name"
                        type="text"
                        value={formData["owner_first_name"]}
                        onChange={handleChange}
                    />
                    <br/>
                <h3>Last Name</h3>
                    <input 
                        id="owner_last_name"
                        type="text"
                        value={formData["owner_last_name"]}
                        onChange={handleChange}
                    />
                    <br/>
                <h3>Queen's Name</h3>
                    <input 
                        id="queen_name"
                        type="text"
                        value={formData["queen_name"]}
                        onChange={handleChange}
                    />
                    <br/>
                <h3>Type of Bees</h3>
                    <input 
                        id="type_of_bees"
                        type="text"
                        value={formData["type_of_bees"]}
                        onChange={handleChange}
                    />
                    <br/>
                <h3>Number of Boxes</h3>
                    <input 
                        id="number_of_boxes"
                        type="text"
                        value={formData["number_of_boxes"]}
                        onChange={handleChange}
                    />
                    <br/>
                    <button id="submit-button" type="submit">Submit Beehive!</button>
            </form>
        </div>
    )
};

export default BeehiveForm;