import React, { useEffect, useState } from 'react';
import { Button, Heading } from '@chakra-ui/react';
import axios from 'axios';
import "../Css/Details.css";
import { useSelector } from 'react-redux';
import { GridLoader} from 'react-spinners';
import { useNavigate, useParams } from 'react-router-dom';

function Recipedetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const storeddata = useSelector((store) => store.recipedata);

  useEffect(() => {
    axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
      .then((res) => {
        setIngredients(res.data.recipe.ingredients);
        console.log(res.data.recipe.ingredients);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  const selectedRecipe = storeddata.find((recipe) => recipe.recipe_id === id);
  console.log(selectedRecipe);
  const { title, publisher, source_url, image_url, publisher_url } = selectedRecipe;

  return (
    <div className='detailsdiv'>
      {loading ? (
        <div className='spinner'>
          <GridLoader color={'orange'} loading={loading} size={50} />
        </div>
      ) : (
        <div className='imgdiv'>
          <Button className='backbtn' onClick={() => navigate("/Recipes")} colorScheme=''>Back</Button>
          <img src={image_url} alt={title} />
        </div>
      )}
      {!loading && (
        <div className='rightsidedetailsdiv'>
          <div className='headings'>
            <Heading>{title}</Heading>
            <Heading size="md" fontStyle="italic" color='yellow.500'>Provided By {publisher}</Heading>
          </div>
          <div className='btn'>
            <Button colorScheme='blue' onClick={() => window.open(publisher_url, '_blank')}>Publisher Webpage</Button>
            <Button colorScheme='green' onClick={() => window.open(source_url, '_blank')}>Recipe URL</Button>
          </div>
          <div className='ingridiantdiv'>
            <Heading size="lg">Ingredients :</Heading>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li className='list' key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recipedetails;
