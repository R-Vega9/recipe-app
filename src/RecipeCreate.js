import React, { useState } from "react";
import {createRecipes} from "./App"

function RecipeCreate({createRecipes}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  const [formData, setFormData] = useState({...initialFormState});
  
  const handleChange = ({ target })=>{
    setFormData({
      ...formData,
      [target.name]: target.value
    });
    console.log(formData)
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipes(formData);
    setFormData({ ...initialFormState });
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
              <input
                id="name"
                type="text"
                name="name"
                onChange = {handleChange}
                value={formData.name}
                placeholder="Name"
              />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange = {handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
              <input
                id="photo"
                type="url"
                name="photo"
                pattern="https?://.+"
                onChange = {handleChange}
                value={formData.photo}
                placeholder="URL"
              />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
              <textarea
                id="ingredients"
                type="textarea"
                name="ingredients"
                onChange = {handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
              />
              </label>
            </td>
            <td>
              <label hmtlFor="preparation">
              <textarea
                id="preparation"
                type="textarea"
                name="preparation"
                onChange = {handleChange}
                value={formData.preparation}
                placeholder="Preparation"
              />
                </label>
            </td>
            <td>
              <button type="submit" >Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
