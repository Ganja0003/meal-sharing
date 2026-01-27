import express from "express";
import db from "../database_client.js";

const reservationsRouter = express.Router();

reservationsRouter.get("/test", (req, res) => {
    res.json({ message: "Hello reservations router" });
});



reservationsRouter.get("/", async (req, res) => {
    try {
      const reservation = await db.select("*").from("reservation");
      res.json(reservation);
    } catch (err) {
  console.log(err);
  res.status(500).json({ error: err.message });
}
  });



reservationsRouter.post("/", async (req, res) => {
    try {
      const reservation = await db("reservation").insert(req.body);
      res.status(201).json({
        reservationID: reservation[0],
        message: "You have successfully inserted a new reservation",
      });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });



reservationsRouter.get("/:id",async (req,res)=>{
  const id = req.params.id;
  try{
    const reservation = await db("reservation")
      .select("*")
      .where({ id: id })
      .first();
    if (!reservation) {
      return res.status(404).json({ error: "reservation doesnt exist" });
    }
    res.json(reservation);

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
})



reservationsRouter.put("/:id", async (req,res)=>{
  const id = req.params.id;
  const updatedReservation = req.body;
  try {
    const reservation = await db("reservation")
    .where({ id: id })
    .update(updatedReservation);

  if (!reservation) {
    return res.status(404).json({ error: "reservation doesnt exist" });
  }
  res.json(updatedReservation);

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }

})


reservationsRouter.delete("/:id", async (req,res)=>{
  const id = req.params.id;
  try{
    const reservation = await db("reservation")
    .where({ id: id })
    .del();

    if(!reservation){
      return res.status(404).json({error:"reservation doesnt exist"})
    }
  } catch(error){
    res.status(500).json({ error: "Server error" });
  }
})




export default reservationsRouter;