import express from "express";
import db from "../database_client.js";

// This router can be deleted once you add your own router
const mealsRouter = express.Router();

mealsRouter.get("/", (req, res) => {
  res.json({ message: "Hello meals router" });
});


//future-meals Router
mealsRouter.get("/future-meals", async (req, res) => {
  try{
    const result = await db.raw("SELECT * FROM meal WHERE `when` > NOW();");
    const futureMeals = result[0]; 
    res.json(futureMeals);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


//past-meals Router
mealsRouter.get("/past-meals", async (req, res) => {
  try{
    const result = await db.raw("SELECT * FROM meal WHERE `when` < NOW();");
    const pastMeals = result[0]; 
    res.json(pastMeals);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


//all-meals Router
mealsRouter.get("/all-meals", async (req, res) => {
  try{
    const result = await db.raw("SELECT * FROM meal;");
    const allMeals = result[0]; 
    res.json(allMeals);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


//first-meals Router
mealsRouter.get("/first-meals", async (req, res) => {
  try {
    const result = await db.raw("SELECT * FROM meal ORDER BY id ASC LIMIT 1;");
    const firstMeal = result[0][0];

    if (!firstMeal) {
      return res.status(404).json({ error: "No meals available" });
    }
    res.json(firstMeal);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


//last-meals Router
mealsRouter.get("/last-meals", async (req, res) => {
  try {
    const result = await db.raw("SELECT * FROM meal ORDER BY id DESC LIMIT 1;");
    const lastMeal = result[0][0];

    if (!lastMeal) {
      return res.status(404).json({ error: "No meals available" });
    }
    res.json(lastMeal);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


export default mealsRouter;
