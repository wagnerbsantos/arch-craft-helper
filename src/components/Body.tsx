import { Cell, Grid, HFlow } from 'bold-ui'
import { useState } from 'react'
import {
  ABBERATH_TOUCHED,
  BRINE_KING_TOUCHED,
  INNOCENCE_TOUCHED,
  KITAVA_TOUCHED,
  MANA_SIPHONER,
  NECROMANCER,
  recipeList,
  TUKOHAMA_TOUCHED,
} from '../constants/Recipe'
import { Recipe } from '../model/model'
import { NeededRecipes } from './NeededRecipes'
import { RecipeList } from './RecipeList'

export const Body = () => {
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([])
  const [ownedRecipes, setOwnedRecipes] = useState<Recipe[]>([])
  const handleClickNeeded = (newRecipe: Recipe) => {
    console.log(newRecipe)
    const index = selectedRecipes.findIndex((recipe) => recipe.id === newRecipe.id)
    console.log(index)
    console.log(selectedRecipes)
    if (index === -1) {
      setSelectedRecipes([...selectedRecipes, newRecipe])
    } else {
      console.log(...selectedRecipes.splice(index, 1))
      setSelectedRecipes(selectedRecipes.splice(index, 1))
    }
  }
  const handleClickOwned = (newRecipe: Recipe) => {
    setOwnedRecipes([...ownedRecipes, newRecipe])
  }
  return (
    <Grid>
      <Cell size={9}>
        <NeededRecipes ownedRecipes={ownedRecipes} selectedRecipes={selectedRecipes} handleClick={handleClickOwned} />
      </Cell>
      <Cell size={3}>
        <RecipeList recipeList={recipeList} id={'RecipeList'} handleClick={handleClickNeeded} />
      </Cell>
    </Grid>
  )
}
