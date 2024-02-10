export const calculateBmr = (sex, weight, height, age, activityLevel) => {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let bmr, bmi, category, caloriesQty;
  
    if (sex === "male") {
      bmr = 10 * weight + 6.25 * (height * 100) - 5 * age + 5;
    } else if (sex === "female") {
      bmr = 10 * weight + 6.25 * (height * 100) - 5 * age - 161;
    }
    switch (activityLevel) {
        case "Sedentary":
            bmr = bmr * 1.2;
            break;
        case "Light":
            bmr *= 1.375;
            break;
        case "Moderate":
            bmr *= 1.55;
            break;
        case "Very":
            bmr *= 1.725;
            break;
        case "Super":
            bmr *= 1.9;
            break;
        default:
            bmr *= 1.2;
            break;
    }
    
  
    bmi = (weight / (height * height)).toFixed(1);
  
    if (bmi < 18.5) {
      category = "Underweight";
      caloriesQty = bmr + 500;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal";
      caloriesQty = bmr;
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "OverWeight";
      caloriesQty = bmr - 500;
    } else if (bmi >= 30) {
      category = "Obese";
      caloriesQty = bmr - 500;
    }

    const foodGroups = [
      { name: "Sugar exchange", portions: [6, 7, 8, 9], calPerPortion: 20 },
      { name: "Fat exchanges", portions: [2, 3], calPerPortion: 45 },
      { name: "Vegetable exchange", portions: [3, 4, 5], calPerPortion: 25 },
      { name: "Fruit exchange", portions: [2, 3, 4], calPerPortion: 60 },
      { name: "Meat exchange", portions: [2, 3], calPerPortion: 55 },
      { name: "Milk exchange", portions: [2, 3, 4], calPerPortion: 120 },
      { name: "Starch exchange", portions: [6, 7, 8, 9, 10, 11], calPerPortion: 60 },
    ];
  
    let remainingCalories = caloriesQty;
  
    const foodPortions = {};
    for (const group of foodGroups) {
      let groupCalories = 0;
      while (groupCalories < remainingCalories) {
        const randomPortion = group.portions[getRandomInt(0, group.portions.length - 1)];
        const portionCalories = randomPortion * group.calPerPortion;
        groupCalories += portionCalories;
        if (!(group.name in foodPortions)) {
          foodPortions[group.name] = {
            portion: randomPortion,
            calories: portionCalories,
          };
        }
      }
    }
  
    const result = {
        bmr,
        bmi ,
        category,
        caloriesQty,
        foodPortions,
    };
  
    return result;
};
