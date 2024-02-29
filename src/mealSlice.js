import { createSlice } from '@reduxjs/toolkit'

export const mealSlice = createSlice({
  name: 'meal',
  initialState: {
    value: null,
  },
  reducers: {
    setDinner: (state) => {
      state.value = "dinner"
    },
    setLunch: (state) => {
      state.value = "lunch"
    },
    setBreakfast: (state) => {
      state.value= "breakfast"
    },
  },
})

export const { setBreakfast, setLunch, setDinner } = mealSlice.actions

export const selectMeal = (state) => state.meal.value

export default mealSlice.reducer