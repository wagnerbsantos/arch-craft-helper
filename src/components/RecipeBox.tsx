import { Cell, Tag, VFlow } from 'bold-ui'
import { css } from 'emotion'
import { Recipe } from '../model/model'
import { createStyles } from './RecipeTree'

export interface RecipeBoxProps {
  recipe: Recipe
  handleClick: (Recipe) => void
}

const TIERLIST = {
  1: 'normal',
  2: 'info',
  3: 'success',
  4: 'alert',
  5: 'danger',
}

export const RecipeBox = (props: RecipeBoxProps) => {
  const { recipe, handleClick } = props
  const style = createStyles()
  return (
    <Cell className={css(style.cell)}>
      <Tag
        type={TIERLIST[recipe.tier]}
        onClick={(e) => {
          handleClick(recipe)
        }}
      >
        {recipe.name}
      </Tag>
    </Cell>
  )
}
