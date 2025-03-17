import express from "express";
import db from "../database_client.js";

// This router can be deleted once you add your own router
const mealsRouter = express.Router();


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


//week 2

mealsRouter.get("/", async (req, res) => {
  try {
    const meals = await db.select("*").from("meal");
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});



mealsRouter.post("/", async (req, res) => {
  try {
    const meals = await db("meal").insert(req.body);
    res.status(201).json({
      mealsID: meals[0],
      message: "You have successfully inserted a new meals",
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});



mealsRouter.get("/:id",async (req,res)=>{
const id = req.params.id;
try{
  const meals = await db("meal")
    .select("*")
    .where({ id: id })
    .first();
  if (!meals) {
    return res.status(404).json({ error: "meals doesnt exist" });
  }
  res.json(meals);

} catch (error) {
  res.status(500).json({ error: "Server error" });
}
})



mealsRouter.put("/:id", async (req,res)=>{
const id = req.params.id;
const updatedmeals = req.body;
try {
  const meals = await db("meal")
  .where({ id: id })
  .update(updatedmeals);

if (!meals) {
  return res.status(404).json({ error: "meals doesnt exist" });
}
res.json(updatedmeals);

} catch (error) {
  res.status(500).json({ error: "Server error" });
}
})


mealsRouter.delete("/:id", async (req,res)=>{
const id = req.params.id;
try{
  const meals = await db("meal")
  .where({ id: id })
  .del();

  if(!meals){
    return res.status(404).json({error:"meals doesnt exist"})
  }
} catch(error){
  res.status(500).json({ error: "Server error" });
}
})


export default mealsRouter;
