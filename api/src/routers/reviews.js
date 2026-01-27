import express from "express";
import db from "../database_client.js";



const reviewsRouter = express.Router();

reviewsRouter.get("/",async (req,res)=>{
    try{
        const reviews = await db.select('*').from('review');
        res.json(reviews)
    }catch (error) {
        res.status(500).json({error: 'Server error'})
    }
})


reviewsRouter.post("/",async (req,res) =>{
    try{
        const reviews = await db('review').insert(req.body);
        res.status(201).json({
            reviewID: reviews[0],
            message: "You have successfully inserted a new review",
        });
    } catch (error){
        res.status(500).json({error: 'Server error'})
    }
})


reviewsRouter.get("/:id", async (req,res) =>{
    try {
        const reviews = await db('review')
        .select({
        review_id: 'review.id',
        review_title:'review.title',
        review_description: 'review.description',
        stars: 'review.stars',
        meal_id: 'meal.id',
        meal_title: 'meal.title'
        })
        .join('meal','meal.id','review.meal_id')
        .where('meal_id', req.params.id)
        
        if(!reviews){
            return res.status(404).json({ error: "review doesnt exist" });
        }
        res.json(reviews)
    } catch (error) {
        res.status(500).json({error: 'server error'})
    }
})


reviewsRouter.put('/:id', async(req,res) =>{
    try {
        const review = await db('review')
        .where({id: req.params.id})
        .update(req.body)

        if(!review){
            res.status(404).json({error: 'review doesnt exist'})
        }
        res.json(req.body)
    } catch (error) {
        res.status(500).json({error: 'server error'})
    }
})


reviewsRouter.delete('/:id',async(req,res)=>{
    try{
        const review = await db('review')
        .where({id: req.params.id})
        .delete()

        if(!review){
            res.status(404).json({error: 'review doesnt exist'})
        }
    } catch(error){
        res.status(500).json({error: 'server error'})
    }
})

export default reviewsRouter;




