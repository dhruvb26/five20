"use server";
import { NextRequest } from "next/server";
const { Configuration, OpenAIApi } = require("openai");

export async function analyticsCompletion(req: NextRequest) {
  const data = {
    weekly_transactions: [
      {
        date: "2024-03-25",
        sales: [
          { item: "Margherita Pizza", quantity_sold: 20 },
          { item: "Spaghetti Carbonara", quantity_sold: 16 },
          { item: "Tiramisu", quantity_sold: 10 },
          { item: "Bruschetta", quantity_sold: 24 },
          { item: "Fettuccine Alfredo", quantity_sold: 14 },
          { item: "Caprese Salad", quantity_sold: 18 },
          { item: "Grilled Polenta", quantity_sold: 12 },
        ],
        ingredients_used: [
          { ingredient: "flour", quantity: 10 },
          { ingredient: "tomatoes", quantity: 14 },
          { ingredient: "mozzarella", quantity: 18 },
          { ingredient: "basil", quantity: 5 },
          { ingredient: "spaghetti", quantity: 8 },
          { ingredient: "pancetta", quantity: 4 },
          { ingredient: "eggs", quantity: 8 },
          { ingredient: "parmesan", quantity: 10 },
          { ingredient: "heavy cream", quantity: 7 },
          { ingredient: "bread", quantity: 12 },
          { ingredient: "polenta", quantity: 6 },
          { ingredient: "mascarpone", quantity: 5 },
          { ingredient: "espresso", quantity: 2 },
          { ingredient: "ladyfingers", quantity: 20 },
          { ingredient: "egg yolks", quantity: 10 },
          { ingredient: "cocoa powder", quantity: 1 },
        ],
      },
      {
        date: "2024-03-26",
        sales: [
          { item: "Lasagna", quantity_sold: 16 },
          { item: "Risotto with Mushrooms", quantity_sold: 14 },
          { item: "Penne alla Vodka", quantity_sold: 18 },
          { item: "Chicken Parmesan", quantity_sold: 12 },
          { item: "Osso Buco", quantity_sold: 10 },
          { item: "Gnocchi with Pesto", quantity_sold: 20 },
          { item: "Calamari Fritti", quantity_sold: 22 },
        ],
        ingredients_used: [
          { ingredient: "lasagna noodles", quantity: 8 },
          { ingredient: "ground beef", quantity: 8 },
          { ingredient: "tomato sauce", quantity: 9 },
          { ingredient: "arborio rice", quantity: 7 },
          { ingredient: "mushrooms", quantity: 7 },
          { ingredient: "chicken broth", quantity: 7 },
          { ingredient: "onion", quantity: 7 },
          { ingredient: "penne", quantity: 9 },
          { ingredient: "vodka", quantity: 1.8 },
          { ingredient: "chicken breast", quantity: 6 },
          { ingredient: "breadcrumbs", quantity: 6 },
          { ingredient: "veal shanks", quantity: 5 },
          { ingredient: "carrot", quantity: 2.5 },
          { ingredient: "celery", quantity: 2.5 },
          { ingredient: "white wine", quantity: 2.5 },
          { ingredient: "gnocchi", quantity: 10 },
          { ingredient: "basil", quantity: 10 },
          { ingredient: "pine nuts", quantity: 2 },
          { ingredient: "garlic", quantity: 5 },
          { ingredient: "olive oil", quantity: 2 },
          { ingredient: "calamari", quantity: 11 },
          { ingredient: "lemon", quantity: 5.5 },
          { ingredient: "marinara sauce", quantity: 2.2 },
        ],
      },
      {
        date: "2024-03-27",
        sales: [
          { item: "Margherita Pizza", quantity_sold: 20 },
          { item: "Spaghetti Carbonara", quantity_sold: 16 },
          { item: "Tiramisu", quantity_sold: 10 },
          { item: "Bruschetta", quantity_sold: 24 },
          { item: "Fettuccine Alfredo", quantity_sold: 14 },
          { item: "Caprese Salad", quantity_sold: 18 },
          { item: "Grilled Polenta", quantity_sold: 12 },
        ],
        ingredients_used: [
          { ingredient: "flour", quantity: 10 },
          { ingredient: "tomatoes", quantity: 14 },
          { ingredient: "mozzarella", quantity: 18 },
          { ingredient: "basil", quantity: 5 },
          { ingredient: "spaghetti", quantity: 8 },
          { ingredient: "pancetta", quantity: 4 },
          { ingredient: "eggs", quantity: 8 },
          { ingredient: "parmesan", quantity: 10 },
          { ingredient: "heavy cream", quantity: 7 },
          { ingredient: "bread", quantity: 12 },
          { ingredient: "polenta", quantity: 6 },
          { ingredient: "mascarpone", quantity: 5 },
          { ingredient: "espresso", quantity: 2 },
          { ingredient: "ladyfingers", quantity: 20 },
          { ingredient: "egg yolks", quantity: 10 },
          { ingredient: "cocoa powder", quantity: 1 },
        ],
      },
      {
        date: "2024-03-28",
        sales: [
          { item: "Lasagna", quantity_sold: 16 },
          { item: "Risotto with Mushrooms", quantity_sold: 14 },
          { item: "Penne alla Vodka", quantity_sold: 18 },
          { item: "Chicken Parmesan", quantity_sold: 12 },
          { item: "Osso Buco", quantity_sold: 10 },
          { item: "Gnocchi with Pesto", quantity_sold: 20 },
          { item: "Calamari Fritti", quantity_sold: 22 },
        ],
        ingredients_used: [
          { ingredient: "lasagna noodles", quantity: 8 },
          { ingredient: "ground beef", quantity: 8 },
          { ingredient: "tomato sauce", quantity: 9 },
          { ingredient: "arborio rice", quantity: 7 },
          { ingredient: "mushrooms", quantity: 7 },
          { ingredient: "chicken broth", quantity: 7 },
          { ingredient: "onion", quantity: 7 },
          { ingredient: "penne", quantity: 9 },
          { ingredient: "vodka", quantity: 1.8 },
          { ingredient: "chicken breast", quantity: 6 },
          { ingredient: "breadcrumbs", quantity: 6 },
          { ingredient: "veal shanks", quantity: 5 },
          { ingredient: "carrot", quantity: 2.5 },
          { ingredient: "celery", quantity: 2.5 },
          { ingredient: "white wine", quantity: 2.5 },
          { ingredient: "gnocchi", quantity: 10 },
          { ingredient: "basil", quantity: 10 },
          { ingredient: "pine nuts", quantity: 2 },
          { ingredient: "garlic", quantity: 5 },
          { ingredient: "olive oil", quantity: 2 },
          { ingredient: "calamari", quantity: 11 },
          { ingredient: "lemon", quantity: 5.5 },
          { ingredient: "marinara sauce", quantity: 2.2 },
        ],
      },
      {
        date: "2024-03-29",
        sales: [
          { item: "Margherita Pizza", quantity_sold: 22 },
          { item: "Spaghetti Carbonara", quantity_sold: 20 },
          { item: "Tiramisu", quantity_sold: 15 },
          { item: "Bruschetta", quantity_sold: 25 },
          { item: "Fettuccine Alfredo", quantity_sold: 16 },
          { item: "Caprese Salad", quantity_sold: 20 },
          { item: "Zuppa Toscana", quantity_sold: 18 },
        ],
        ingredients_used: [
          { ingredient: "flour", quantity: 11 },
          { ingredient: "tomatoes", quantity: 20 },
          { ingredient: "mozzarella", quantity: 20 },
          { ingredient: "basil", quantity: 10 },
          { ingredient: "spaghetti", quantity: 10 },
          { ingredient: "pancetta", quantity: 5 },
          { ingredient: "eggs", quantity: 10 },
          { ingredient: "parmesan", quantity: 16 },
          { ingredient: "heavy cream", quantity: 8 },
          { ingredient: "bread", quantity: 12.5 },
          { ingredient: "mascarpone", quantity: 7.5 },
          { ingredient: "espresso", quantity: 3 },
          { ingredient: "ladyfingers", quantity: 30 },
          { ingredient: "egg yolks", quantity: 15 },
          { ingredient: "cocoa powder", quantity: 1.5 },
          { ingredient: "sausage", quantity: 9 },
          { ingredient: "potatoes", quantity: 9 },
          { ingredient: "kale", quantity: 4.5 },
          { ingredient: "chicken broth", quantity: 9 },
          { ingredient: "heavy cream", quantity: 4.5 },
        ],
      },
    ],
    updated_inventory: [
      {
        ingredient: "flour",
        quantity: 79,
        unit: "lbs",
        shelf_life_days: null,
        perishable: false,
      },
      {
        ingredient: "tomatoes",
        quantity: 2,
        unit: "lbs",
        shelf_life_days: 2,
        perishable: true,
      },
      {
        ingredient: "mozzarella",
        quantity: 2,
        unit: "lbs",
        shelf_life_days: 15,
        perishable: true,
      },
      {
        ingredient: "basil",
        quantity: -10,
        unit: "lbs",
        shelf_life_days: 0,
        perishable: true,
      },
      {
        ingredient: "spaghetti",
        quantity: 22,
        unit: "lbs",
        shelf_life_days: null,
        perishable: false,
      },
      {
        ingredient: "pancetta",
        quantity: 11,
        unit: "lbs",
        shelf_life_days: 25,
        perishable: true,
      },
      {
        ingredient: "eggs",
        quantity: 82,
        unit: "count",
        shelf_life_days: 16,
        perishable: true,
      },
      {
        ingredient: "parmesan",
        quantity: -11,
        unit: "lbs",
        shelf_life_days: 55,
        perishable: true,
      },
      {
        ingredient: "lasagna noodles",
        quantity: 14,
        unit: "lbs",
        shelf_life_days: null,
        perishable: false,
      },
      {
        ingredient: "ground beef",
        quantity: 24,
        unit: "lbs",
        shelf_life_days: 3,
        perishable: true,
      },
      {
        ingredient: "tomato sauce",
        quantity: 32,
        unit: "lbs",
        shelf_life_days: 2,
        perishable: true,
      },
      {
        ingredient: "arborio rice",
        quantity: 6,
        unit: "lbs",
        shelf_life_days: null,
        perishable: false,
      },
      {
        ingredient: "mushrooms",
        quantity: 11,
        unit: "lbs",
        shelf_life_days: 5,
        perishable: true,
      },
      {
        ingredient: "chicken broth",
        quantity: 16,
        unit: "liters",
        shelf_life_days: 0,
        perishable: true,
      },
      {
        ingredient: "onion",
        quantity: 1,
        unit: "lbs",
        shelf_life_days: 25,
        perishable: true,
      },
      {
        ingredient: "penne",
        quantity: 17,
        unit: "lbs",
        shelf_life_days: null,
        perishable: false,
      },
      {
        ingredient: "vodka",
        quantity: 1.4,
        unit: "liters",
        shelf_life_days: null,
        perishable: false,
      },
      {
        ingredient: "heavy cream",
        quantity: 5,
        unit: "liters",
        shelf_life_days: 10,
        perishable: true,
      },
      {
        ingredient: "chicken breast",
        quantity: 28,
        unit: "lbs",
        shelf_life_days: 0,
        perishable: true,
      },
      {
        ingredient: "breadcrumbs",
        quantity: -2,
        unit: "lbs",
        shelf_life_days: null,
        perishable: false,
      },
      {
        ingredient: "mascarpone",
        quantity: 2.5,
        unit: "lbs",
        shelf_life_days: 9,
        perishable: true,
      },
      {
        ingredient: "espresso",
        quantity: 5,
        unit: "liters",
        shelf_life_days: null,
        perishable: false,
      },
      {
        ingredient: "ladyfingers",
        quantity: 150,
        unit: "count",
        shelf_life_days: 55,
        perishable: true,
      },
      {
        ingredient: "egg yolks",
        quantity: 25,
        unit: "count",
        shelf_life_days: 16,
        perishable: true,
      },
      {
        ingredient: "cocoa powder",
        quantity: 2.5,
        unit: "lbs",
        shelf_life_days: null,
        perishable: false,
      },
      {
        ingredient: "bread",
        quantity: 5.5,
        unit: "loaves",
        shelf_life_days: 0,
        perishable: true,
      },
      {
        ingredient: "garlic",
        quantity: -5,
        unit: "lbs",
        shelf_life_days: 55,
        perishable: true,
      },
      {
        ingredient: "olive oil",
        quantity: 6,
        unit: "liters",
        shelf_life_days: null,
        perishable: false,
      },
      {
        ingredient: "balsamic vinegar",
        quantity: 5,
        unit: "liters",
        shelf_life_days: null,
        perishable: false,
      },
      {
        ingredient: "polenta",
        quantity: 14,
        unit: "lbs",
        shelf_life_days: null,
        perishable: false,
      },
      {
        ingredient: "veal shanks",
        quantity: 20,
        unit: "lbs",
        shelf_life_days: 1,
        perishable: true,
      },
      {
        ingredient: "carrot",
        quantity: 5,
        unit: "lbs",
        shelf_life_days: 25,
        perishable: true,
      },
      {
        ingredient: "celery",
        quantity: 5,
        unit: "lbs",
        shelf_life_days: 25,
        perishable: true,
      },
      {
        ingredient: "white wine",
        quantity: 0,
        unit: "liters",
        shelf_life_days: null,
        perishable: false,
      },
      {
        ingredient: "gnocchi",
        quantity: 0,
        unit: "lbs",
        shelf_life_days: 25,
        perishable: true,
      },
      {
        ingredient: "pine nuts",
        quantity: -2,
        unit: "lbs",
        shelf_life_days: 85,
        perishable: true,
      },
      {
        ingredient: "calamari",
        quantity: -2,
        unit: "lbs",
        shelf_life_days: 2,
        perishable: true,
      },
      {
        ingredient: "lemon",
        quantity: -1,
        unit: "lbs",
        shelf_life_days: 15,
        perishable: true,
      },
      {
        ingredient: "marinara sauce",
        quantity: 5.6,
        unit: "liters",
        shelf_life_days: 2,
        perishable: true,
      },
      {
        ingredient: "sausage",
        quantity: 11,
        unit: "lbs",
        shelf_life_days: 2,
        perishable: true,
      },
      {
        ingredient: "potatoes",
        quantity: 21,
        unit: "lbs",
        shelf_life_days: 55,
        perishable: true,
      },
      {
        ingredient: "kale",
        quantity: 10.5,
        unit: "lbs",
        shelf_life_days: 2,
        perishable: true,
      },
    ],
  };
  const prompt = `
    As a seasoned data analyst, you're given a rich dataset detailing a restaurant's daily operations, captured in JSON format. This data encompasses daily sales figures, comprehensive details on menu items, including pricing and ingredients, as well as a current inventory snapshot indicating the shelf life of both perishable and non-perishable ingredients.
    \`\`\`
    ${JSON.stringify(data, null, 2)}
    \`\`\`
    
    Your expertise is required to analyze this dataset with the following aims:
    
    Ingredient Usage Forecast: Provide a concise, 50-word prediction on ingredient demand for the next three days, focusing on managing perishables to reduce waste. Highlight key ingredients to prioritize for usage.
    
    Surplus Identification & Promotion: Identify up to three perishable ingredients in surplus, nearing their shelf life end. Strictly mention that they have to sell it and don't suggest any promotion of dishes.
    
    Replenishment Recommendations:
        - Urgent: List all the ingredients that are negative or 0 in quantity and tell them that they immediately need to purchase it.
        - List up to three ingredients predicted to run low, considering their usage rate and shelf life. Recommend timely procurement of these ingredients, focusing on perishables essential for popular menu items.
    
    Data Overview:
    - Transactions Data: Contains sales transactions by date, including quantities sold per menu item.
    - Menu Data: Details on menu items, their pricing, and required ingredients.
    - Inventory Data: Current levels of each ingredient, noting perishability and shelf life.
    
    Expected Deliverables:
    - Forecast Insight: A brief forecast pinpointing ingredients for focused usage, buying, or selling to optimize inventory and minimize waste.
    - Surplus Actions: Up to three key perishable items identified as surplus, with suggestions to sell them. Strictly mention that they have to sell it and don't suggest any promotion of dishes.
    - Replenishment Actions: Up to three ingredients flagged for imminent replenishment, with advice on the optimal buying timeframe to ensure menu readiness and ingredient freshness.
    
    Your insights will guide the restaurant in making strategic decisions for inventory management and marketing, aiming for a perfect balance between meeting demand and reducing waste. Keep the total output under 150 words for clarity and direct application in operational strategies.
    `;
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  return { answer: response.data.choices[0].message.content };
}
