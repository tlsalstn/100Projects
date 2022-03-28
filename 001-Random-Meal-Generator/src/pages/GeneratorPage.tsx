import React, { useCallback, useContext, useEffect } from "react"
import styled from "styled-components"
import { Meal, MealContext } from "../contexts/MealContext"

const StyledButton = styled.button`
  padding: 8px 32px;
  border: 0;
  border-radius: 6px;
  background: #00c40b;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
  }
  &:disabled {
    background: #666;
    color: #333;
  }
`

const GeneratorLayout = styled.div`
  width: 100%;
  height: 100%;
  background: #25b893;
  overflow: auto;
`

const GeneratorContainer = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  max-width: 800px;
  width: 80%;
`

const GeneratorTop = styled.div`
  margin: 0 0 20px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`

const GeneratorHeader = styled.div`
  margin: 0 0 20px;
  border-bottom: 1px solid #000;
  padding: 15px 0;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`

const GeneratorTitle = styled.a`
  margin: 0;
  color: #000;
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const GeneratorSubTitle = styled.p`
  margin: 10px 0 0 15px;
`

const GeneratorBody = styled.div`
  display: flex;
  justify-content: space-between;
`

const GeneratorContentLeft = styled.div`
  width: 40%;
`

const GeneratorThumbnail = styled.img`
  width: 100%;
`

const GeneratorContentRight = styled.div`
  width: 58%;
`

const GeneratorTag = styled.div`
  margin: 0 2px;
  border-radius: 100px;
  padding: 6px 12px;
  width: fit-content;
  background: #0fdb4d;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`

const GeneratorTagList = styled.div`
  margin: 0 0 8px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  & > ${GeneratorTag} {
    &:first-child {
      margin-left: 0;
    }
  }
`

const GeneratorIngredientList = styled.ul`
  padding-inline-start: 20px;
`

const GeneratorLoading = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

function GeneratorPage() {
  const { isLoading, meal, generateRandomMeal } = useContext(MealContext)

  useEffect(() => {
    generate()
  }, [])

  const generate = useCallback(() => {
    if (isLoading) return
    if (generateRandomMeal) generateRandomMeal()
  }, [generateRandomMeal])

  return (
    <GeneratorLayout>
      <GeneratorContainer>
        <GeneratorTop>
          <StyledButton onClick={generate} disabled={isLoading}>
            Generate Another One
          </StyledButton>
        </GeneratorTop>
        {isLoading ? (
          <GeneratorLoading>Loading...</GeneratorLoading>
        ) : (
          <>
            <GeneratorHeader>
              <GeneratorTitle href={meal.strYoutube} target={"_blank"} title={"Video Recipe"}>
                {meal.strMeal}
              </GeneratorTitle>
              <GeneratorSubTitle>(ID: {meal.idMeal})</GeneratorSubTitle>
            </GeneratorHeader>
            <GeneratorBody>
              <GeneratorContentLeft>
                <GeneratorThumbnail src={meal.strMealThumb} alt={`${meal.strMeal} Thumbnail`} />
                <GeneratorIngredientList>
                  {Object.keys(meal)
                    .filter((key) => key.includes("strIngredient"))
                    .map((key) => {
                      const ingredient = meal[key as keyof Meal]
                      if (!ingredient) return

                      const idx = (key as keyof Meal).split("strIngredient")[1]
                      const measure = meal[`strMeasure${idx}` as keyof Meal]
                      return (
                        <li>
                          <b>{ingredient}</b>: {measure}
                        </li>
                      )
                    })}
                </GeneratorIngredientList>
              </GeneratorContentLeft>
              <GeneratorContentRight>
                {meal.strTags && (
                  <GeneratorTagList>
                    {meal.strTags.split(",").map((tag) => (
                      <GeneratorTag>{tag}</GeneratorTag>
                    ))}
                  </GeneratorTagList>
                )}
                {meal.strInstructions}
              </GeneratorContentRight>
            </GeneratorBody>
          </>
        )}
      </GeneratorContainer>
    </GeneratorLayout>
  )
}

export default GeneratorPage
