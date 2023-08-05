import React, { useState } from "react";
import "./food.css";
import axios from "axios";

const FoodComponent = () => {
  const [selectedDay, setSelectedDay] = useState("monday"); // Default selected day is Monday

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [selectedOption, setSelectedOption] = useState(null);
  const handleFoodSelection = async () => {
    try {
      // Retrieve the user ID from local storage or state variable
      const userId = localStorage.getItem("userId");
      if (!userId) {
        // Handle the case where the user ID is missing
        console.error("User ID missing.");
        return;
      }

      const data = {
        userId,
        selectedDay,
        selectedMeal,
        selectedOption,
      };
      const response = await axios.post(
        "http://localhost:5000/foodselection",
        data
      );
      console.log(response.data.message); // Show success message in console or use it in your UI
    } catch (error) {
      console.error("Error saving food selection:", error);
    }
  };

  const getMealDescription = () => {
    const mealDescriptions = {
      monday: {
        breakfast: {
          description:
            "Boiled Eggs & Omelette,Bread/Jam/Butter,Tea/Coffee/Milk",

          meals: [
            // breakfast options...
            {
              name: "Breakfast Varieties",

              options: [
                {
                  name: "Idly/Wada ",
                },
                {
                  name: "Mysoor Boonda",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Upma",
                },
                {
                  name: "Uthpam",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Aloo Paratha",
                },
                {
                  name: "Sprouts/CornFlakes",
                },
              ],
            },
          ],
        },
        lunch: {
          description: "Plain Rice, Chapathi, Green Salad",
          meals: [
            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Sambar Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Veg Varieties",

              options: [
                {
                  name: "Moong Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "lal Chana",
                },
                {
                  name: "Veg Biryani",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Beerakaya Curry",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",

              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Lemon juice",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Roohafza",
                },
              ],
            },
          ],
        },

        dinner: {
          description: "Plain Rice, Chapathi, Curd",
          meals: [
            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Masala Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: " Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Dal",

              options: [
                {
                  name: "Palak Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "Dal Fry",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Massor Dal",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Egg Bhurji",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",

              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Milk",
                },
              ],
            },
            {
              name: "Vegetable Varieties",

              options: [
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Beans Tomato",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Mirchy Bhaji",
                },
              ],
            },
            {
              name: "Khichdi Varieties",

              options: [
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Khichdi Katta",
                },
              ],
            },
            {
              name: "Chinese Varieties",

              options: [
                {
                  name: "Gobhi Manchurian Wet",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Veg Noodles",
                },
              ],
            },
          ],
        },
      },
      tuesday: {
        breakfast: {
          description:
            "Boiled Eggs & Omelette,Bread/Jam/Butter,Tea/Coffee/Milk",
          meals: [
            // breakfast options...
            {
              name: "Breakfast Varieties",

              options: [
                {
                  name: "Idly/Wada ",
                },
                {
                  name: "Mysoor Boonda",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Upma",
                },
                {
                  name: "Uthpam",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Aloo Paratha",
                },
                {
                  name: "Sprouts/CornFlakes",
                },
              ],
            },
          ],
        },
        lunch: {
          description: "Plain Rice, Chapathi, Green Salad",
          meals: [
            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Sambar Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Veg Varieties",

              options: [
                {
                  name: "Moong Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "lal Chana",
                },
                {
                  name: "Veg Biryani",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Beerakaya Curry",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",

              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Lemon juice",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Roohafza",
                },
              ],
            },
          ],
        },

        dinner: {
          description: "Plain Rice, Chapathi, Curd",
          meals: [
            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Masala Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: " Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Dal",

              options: [
                {
                  name: "Palak Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "Dal Fry",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Massor Dal",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Egg Bhurji",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",
              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Milk",
                },
              ],
            },
            {
              name: "Vegetable Varieties",

              options: [
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Beans Tomato",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Mirchy Bhaji",
                },
              ],
            },
            {
              name: "Khichdi Varieties",

              options: [
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Khichdi Katta",
                },
              ],
            },
            {
              name: "Chinese Varieties",

              options: [
                {
                  name: "Gobhi Manchurian Wet",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Veg Noodles",
                },
              ],
            },
          ],
        },
      },
      wednesday: {
        breakfast: {
          description:
            "Boiled Eggs & Omelette,Bread/Jam/Butter,Tea/Coffee/Milk",
          meals: [
            // breakfast options...
            {
              name: "Breakfast Varieties",

              options: [
                {
                  name: "Idly/Wada ",
                },
                {
                  name: "Mysoor Boonda",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Upma",
                },
                {
                  name: "Uthpam",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Aloo Paratha",
                },
                {
                  name: "Sprouts/CornFlakes",
                },
              ],
            },
          ],
        },
        lunch: {
          description: "Plain Rice, Chapathi, Green Salad",
          meals: [
            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Sambar Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Veg Varieties",

              options: [
                {
                  name: "Moong Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "lal Chana",
                },
                {
                  name: "Veg Biryani",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Beerakaya Curry",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",

              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Lemon juice",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Roohafza",
                },
              ],
            },
          ],
        },

        dinner: {
          description: "Plain Rice, Chapathi, Curd",
          meals: [
            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Masala Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: " Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Dal",

              options: [
                {
                  name: "Palak Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "Dal Fry",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Massor Dal",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Egg Bhurji",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",

              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Milk",
                },
              ],
            },
            {
              name: "Vegetable Varieties",

              options: [
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Beans Tomato",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Mirchy Bhaji",
                },
              ],
            },
            {
              name: "Khichdi Varieties",

              options: [
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Khichdi Katta",
                },
              ],
            },
            {
              name: "Chinese Varieties",

              options: [
                {
                  name: "Gobhi Manchurian Wet",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Veg Noodles",
                },
              ],
            },
          ],
        },
      },
      thursday: {
        breakfast: {
          description:
            "Boiled Eggs & Omelette,Bread/Jam/Butter,Tea/Coffee/Milk",
          meals: [
            // breakfast options...
            {
              name: "Breakfast Varieties",

              options: [
                {
                  name: "Idly/Wada ",
                },
                {
                  name: "Mysoor Boonda",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Upma",
                },
                {
                  name: "Uthpam",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Aloo Paratha",
                },
                {
                  name: "Sprouts/CornFlakes",
                },
              ],
            },
          ],
        },
        lunch: {
          description: "Plain Rice, Chapathi, Green Salad",
          meals: [
            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Sambar Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Veg Varieties",

              options: [
                {
                  name: "Moong Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "lal Chana",
                },
                {
                  name: "Veg Biryani",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Beerakaya Curry",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",

              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Lemon juice",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Roohafza",
                },
              ],
            },
          ],
        },

        dinner: {
          description: "Plain Rice, Chapathi, Curd",
          meals: [
            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Masala Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: " Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Dal",

              options: [
                {
                  name: "Palak Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "Dal Fry",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Massor Dal",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Egg Bhurji",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",

              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Milk",
                },
              ],
            },
            {
              name: "Vegetable Varieties",

              options: [
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Beans Tomato",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Mirchy Bhaji",
                },
              ],
            },
            {
              name: "Khichdi Varieties",

              options: [
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Khichdi Katta",
                },
              ],
            },
            {
              name: "Chinese Varieties",

              options: [
                {
                  name: "Gobhi Manchurian Wet",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Veg Noodles",
                },
              ],
            },
          ],
        },
      },
      friday: {
        breakfast: {
          description:
            "Boiled Eggs & Omelette,Bread/Jam/Butter,Tea/Coffee/Milk",
          meals: [
            // breakfast options...
            {
              name: "Breakfast Varieties",

              options: [
                {
                  name: "Idly/Wada ",
                },
                {
                  name: "Mysoor Boonda",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Upma",
                },
                {
                  name: "Uthpam",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Aloo Paratha",
                },
                {
                  name: "Sprouts/CornFlakes",
                },
              ],
            },
          ],
        },
        lunch: {
          description: "Plain Rice, Chapathi, Green Salad",
          meals: [
            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Sambar Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Veg Varieties",

              options: [
                {
                  name: "Moong Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "lal Chana",
                },
                {
                  name: "Veg Biryani",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Beerakaya Curry",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",

              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Lemon juice",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Roohafza",
                },
              ],
            },
          ],
        },

        dinner: {
          description: "Plain Rice, Chapathi, Curd",
          meals: [
            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Masala Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: " Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Dal",

              options: [
                {
                  name: "Palak Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "Dal Fry",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Massor Dal",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Egg Bhurji",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",

              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Milk",
                },
              ],
            },
            {
              name: "Vegetable Varieties",

              options: [
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Beans Tomato",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Mirchy Bhaji",
                },
              ],
            },
            {
              name: "Khichdi Varieties",

              options: [
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Khichdi Katta",
                },
              ],
            },
            {
              name: "Chinese Varieties",

              options: [
                {
                  name: "Gobhi Manchurian Wet",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Veg Noodles",
                },
              ],
            },
          ],
        },
      },
      saturday: {
        breakfast: {
          description:
            "Boiled Eggs & Omelette,Bread/Jam/Butter,Tea/Coffee/Milk",
          meals: [
            // breakfast options...
            {
              name: "Breakfast Varieties",

              options: [
                {
                  name: "Idly/Wada ",
                },
                {
                  name: "Mysoor Boonda",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Upma",
                },
                {
                  name: "Uthpam",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Aloo Paratha",
                },
                {
                  name: "Sprouts/CornFlakes",
                },
              ],
            },
          ],
        },
        lunch: {
          description: "Plain Rice, Chapathi, Green Salad",
          meals: [
            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Sambar Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Veg Varieties",

              options: [
                {
                  name: "Moong Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "lal Chana",
                },
                {
                  name: "Veg Biryani",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Beerakaya Curry",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",

              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Lemon juice",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Roohafza",
                },
              ],
            },
          ],
        },

        dinner: {
          description: "Plain Rice, Chapathi, Curd",
          meals: [
            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Masala Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: " Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Dal",

              options: [
                {
                  name: "Palak Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "Dal Fry",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Massor Dal",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Egg Bhurji",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",

              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Milk",
                },
              ],
            },
            {
              name: "Vegetable Varieties",

              options: [
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Beans Tomato",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Mirchy Bhaji",
                },
              ],
            },
            {
              name: "Khichdi Varieties",

              options: [
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Khichdi Katta",
                },
              ],
            },
            {
              name: "Chinese Varieties",

              options: [
                {
                  name: "Gobhi Manchurian Wet",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Veg Noodles",
                },
              ],
            },
          ],
        },
      },
      sunday: {
        breakfast: {
          description:
            "Boiled Eggs & Omelette,Bread/Jam/Butter,Tea/Coffee/Milk",
          meals: [
            // breakfast options...
            {
              name: "Breakfast Varieties",

              options: [
                {
                  name: "Idly/Wada ",
                },
                {
                  name: "Mysoor Boonda",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Upma",
                },
                {
                  name: "Uthpam",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Aloo Paratha",
                },
                {
                  name: "Sprouts/CornFlakes",
                },
              ],
            },
          ],
        },
        lunch: {
          description: "Plain Rice, Chapathi, Green Salad",
          meals: [
            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Sambar Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Veg Varieties",

              options: [
                {
                  name: "Moong Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "lal Chana",
                },
                {
                  name: "Veg Biryani",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Beerakaya Curry",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",

              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Lemon juice",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Roohafza",
                },
              ],
            },
          ],
        },

        dinner: {
          description: "Plain Rice, Chapathi, Curd",
          meals: [
            {
              name: "Rice Varieties",

              options: [
                {
                  name: "Masala Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: " Rice",
                },
                {
                  name: "Lemon Rice",
                },
              ],
            },

            {
              name: "Dal",

              options: [
                {
                  name: "Palak Dal",
                },
                {
                  name: "Dal Thadka",
                },
                {
                  name: "Dal Fry",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Massor Dal",
                },
              ],
            },
            {
              name: "NonVeg Varieties",

              options: [
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Egg Bhurji",
                },
              ],
            },
            {
              name: "Sides",

              options: [
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Chatney",
                },
              ],
            },
            {
              name: "Sweet Varieties",
              options: [
                {
                  name: "Semiya kheer",
                },
                {
                  name: "Suji Ka Halwa",
                },
                {
                  name: "Fruit Custurd",
                },
                {
                  name: "Jibe Gaja",
                },
              ],
            },
            {
              name: "Drink Varieties",

              options: [
                {
                  name: "Butter Milk",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Mango Juice",
                },
                {
                  name: "Milk",
                },
              ],
            },
            {
              name: "Vegetable Varieties",

              options: [
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Beans Tomato",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Mirchy Bhaji",
                },
              ],
            },
            {
              name: "Khichdi Varieties",

              options: [
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Khichdi Katta",
                },
              ],
            },
            {
              name: "Chinese Varieties",

              options: [
                {
                  name: "Gobhi Manchurian Wet",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Veg Noodles",
                },
              ],
            },
          ],
        },
      },

      // Add descriptions for other days...
    };
    return mealDescriptions[selectedDay][selectedMeal];
  };

  const mealDescription = getMealDescription();
  const handleRiceOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <section id="food" className="food">
      <h2 className="head">Food Menu</h2>
      {/* Add the dropdown list */}
      <div className="day-dropdown">
        <label htmlFor="day">Select a day:</label>
        <select
          id="day"
          name="day"
          value={selectedDay}
          onChange={handleDayChange}
        >
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
          {/* Add options for other days */}
        </select>
      </div>

      <div className="food__buttons">
        <button
          className={selectedMeal === "breakfast" ? "active" : ""}
          onClick={() => setSelectedMeal("breakfast")}
        >
          Breakfast
        </button>
        <button
          className={selectedMeal === "lunch" ? "active" : ""}
          onClick={() => setSelectedMeal("lunch")}
        >
          Lunch
        </button>
        <button
          className={selectedMeal === "dinner" ? "active" : ""}
          onClick={() => setSelectedMeal("dinner")}
        >
          Dinner
        </button>
      </div>

      {mealDescription && (
        <div className="food-description">
          <h3>
            {selectedMeal.charAt(0).toUpperCase() + selectedMeal.slice(1)} Meals
          </h3>
          <p>{mealDescription.description}</p>

          <div className="meal-cards">
            {mealDescription.meals.map((meal, index) => (
              <div
                className={`meal-card ${
                  selectedMeal === "breakfast" ? "active" : ""
                }`}
                key={index}
              >
                <div className="meal-card__info">
                  <h4>{meal.name}</h4>

                  {selectedMeal === "lunch" &&
                  (meal.name === "Rice Varieties" ||
                    meal.name === "NonVeg Varieties" ||
                    meal.name === "Veg Varieties" ||
                    meal.name === "Drink Varieties" ||
                    meal.name === "Sweet Varieties" ||
                    meal.name === "Sides") ? (
                    <div className="options-buttons">
                      <h5 style={{ color: "GrayText", marginBottom: "5px" }}>
                        Choose among them
                      </h5>
                      {meal.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`option-button ${
                            selectedOption === option.name ? "active" : ""
                          }`}
                          onClick={() => handleRiceOptionChange(option.name)}
                        >
                          {option.name}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p>{meal.description}</p>
                  )}

                  {selectedMeal === "dinner" &&
                  (meal.name === "Rice Varieties" ||
                    meal.name === "Dal" ||
                    meal.name === "NonVeg Varieties" ||
                    meal.name === "Veg Varieties" ||
                    meal.name === "Drink Varieties" ||
                    meal.name === "Sweet Varieties" ||
                    meal.name === "Sides" ||
                    meal.name === "Vegetable Varieties" ||
                    meal.name === "Khichdi Varieties" ||
                    meal.name === "Chinese Varieties") ? (
                    <div className="options-buttons">
                      <h5 style={{ color: "GrayText", marginBottom: "5px" }}>
                        Choose among them
                      </h5>
                      {meal.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`option-button ${
                            selectedOption === option.name ? "active" : ""
                          }`}
                          onClick={() => {
                            handleRiceOptionChange(option.name);
                            handleFoodSelection();
                          }}
                        >
                          {option.name}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p>{meal.description}</p>
                  )}

                  {selectedMeal === "breakfast" &&
                  meal.name === "Breakfast Varieties" ? (
                    <div className="options-buttons">
                      <h5 style={{ color: "GrayText", marginBottom: "5px" }}>
                        Choose among them
                      </h5>
                      {meal.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`option-button ${
                            selectedOption === option.name ? "active" : ""
                          }`}
                          onClick={() => handleRiceOptionChange(option.name)}
                        >
                          {option.name}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p>{meal.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FoodComponent;
