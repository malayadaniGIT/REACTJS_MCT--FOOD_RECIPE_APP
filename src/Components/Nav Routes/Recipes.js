import React, { useEffect, useState } from 'react';
import { Button, Flex, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import axios from 'axios';
import "../Css/Recipecomp.css"
import { useDispatch } from 'react-redux';
import { receipeActionCreator } from '../../Action/receipeActionCreator';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { HashLoader} from 'react-spinners';
function Recipes() {
  const [recipename, setRecipename] = useState('');
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state,setState]=useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadRecipe = () => {
    setLoading(true);
    setTimeout(() => {
      
      axios
        .get(`https://forkify-api.herokuapp.com/api/search?q=${recipename}`)
        .then((res) => {
          console.log(res.data.recipes);
          setRecipe(res.data.recipes);
          setState(recipename.toUpperCase())
          dispatch(receipeActionCreator(res.data.recipes));
          setLoading(false);
          })
        .catch(() => {
          setLoading(false);
            toast('Oops sorry this item is not found...', {
            position: 'top-center',
          });
        });
    }, 2000);
  };

  useEffect(() => {
    
    if (recipename.trim() !== '' && recipe.length > 0) {
      loadRecipe();
    }
  }, []);

  const openRecipeUrl = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div centerContent className='recipecontainer'>
    <img  src="https://www.allrecipes.com/thmb/YijhWjy7e-CfpENBNQaFIugoXQg=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_002-2400x600-1-2000-953276925ca941ee955c2bbf865dbfd4.jpg"style={{height:"100px",width:"100%"}} alt="photo" />
      <div>
        <Heading fontStyle="italic">Search Recipes With <span style={{ color: 'red' }}>Food2Fork</span></Heading>
      </div>
      <div className='searchdiv'>
        <Heading size="sm">Type Recipe Name and Search </Heading>
        <Flex className='inputbox'>
          <InputGroup w="100%" size='md'>
            <Input border="2px solid grey" w="100%" pr='4.5rem' fontSize="large" placeholder='chicken,pizza,salad etc...' onChange={(e) => {
              setRecipename(e.target.value)
            }} />
            <InputRightElement >
              <Button colorScheme='blue' h='100%' size='sm'  onClick={()=>loadRecipe()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>

      </div>

      <div className='recipesdiv'>
        <div id='recipename'>
        {state===""? <Heading size="md" color="yellowgreen" mb="10px">RECIPE LIST</Heading>: <Heading  mb="10px" size="md">RECIPE LIST FOR  {state}</Heading>}
        </div>
        <div className='recipes'>
        {loading ? (
            <div style={{marginTop:"100px"}}>
              <HashLoader color={'red'} loading={loading} size={70} />
            </div>
          ) :
         recipe.map((data) => {
            return (
              <div key={data.recipe_id} className='card'>
                <div className='cardimgdiv'>
                  <img src={data.image_url} alt="" />
                </div>

                <div className='cardtextdiv'>
                  <Heading size="md">{data.title}</Heading>
                  <Heading size="md" fontStyle="italic" color="yellow.600">{data.publisher}</Heading>
                  <hr />
                  <div className='btns'>
                    <Button size="sm" colorScheme='blue' onClick={() => {
                      navigate(`/Recipedetails/${data.recipe_id}`)
                    }}>Details</Button>
                    <Button size="sm" colorScheme='green' onClick={() => openRecipeUrl(data.source_url)}>
                      Recipe URL
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Recipes;