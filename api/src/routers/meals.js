import express from "express";
import db from "../database_client.js";

// This router can be deleted once you add your own router
const mealsRouter = express.Router();

mealsRouter.get("/", async (req, res) => {
  try {
    let mealsQuery = db.select("*").from("meal");

    //maxPrice
    if (req.query.maxPrice){
      mealsQuery = mealsQuery.where("price", "<" , Number(req.query.maxPrice))
    }


    //availableReservations
    if (req.query.availableReservations === "true") {
    mealsQuery = db('meal')
    .select('meal.id','title','description','location','max_reservations')
    .leftJoin("reservation", "meal.id", "reservation.meal_id")
    .sum("reservation.number_of_guests as total_guests")
    .groupBy("meal.id")
    .havingRaw("max_reservations > coalesce(SUM(reservation.number_of_guests),0)");

    }else if(req.query.availableReservations === 'false'){
      mealsQuery = db('meal')
      .select('meal.id','title','description','location','max_reservations')
      .leftJoin('reservation','meal.id','reservation.meal_id')
      .sum('reservation.number_of_guests as total_guests')
      .groupBy('meal.id')
      .havingRaw('max_reservations <= coalesce(SUM(reservation.number_of_guests),0)')
    }
        

    //title 
    if (req.query.title) {
      mealsQuery = mealsQuery.where("title", "like", `%${req.query.title}%`);
    }


    //dateAfter
    if (req.query.dateAfter) {
      mealsQuery = mealsQuery.where("when", ">", req.query.dateAfter);
    }


    //dateBefore
    if (req.query.dateBefore){
      mealsQuery = mealsQuery.where("when", "<", req.query.dataBefore);
    }
  

    //limit
    if (req.query.limit){
      mealsQuery = mealsQuery.limit(Number(req.query.limit));
    }


    //sortKey & sortDir 
    if(req.query.sortKey){
      const allowedKeys = ['when', 'price', 'max_reservations']
      if(allowedKeys.includes(req.query.sortKey)){
        const direction = req.query.sortDir === 'desc' ? 'desc' : 'asc'
        mealsQuery = mealsQuery.orderBy(req.query.sortKey,direction)
      }
    }

    
    const meals = await mealsQuery;
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
