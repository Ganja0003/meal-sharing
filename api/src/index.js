import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mealsRouter from "./routers/meals.js";
import reservationsRouter from "./routers/reservations.js";
import reviewsRouter from "./routers/reviews.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
const apiRouter = express.Router();

app.get('/', (req,res) => {
  res.send(`
    <h1>Welcome to the backend API</h1>
    <ul>
    <li><a href="/api/meals">Meals</a></li>
    <li><a href="/api/reservations">Reservertions</a></li>
    <li><a href="/api/reviews">Reviews</a></li>
  </ul>
  `)
})

// This nested router example can also be replaced with your own sub-router
apiRouter.use("/meals", mealsRouter);
apiRouter.use("/reservations", reservationsRouter);
apiRouter.use("/reviews",reviewsRouter)



app.use("/api", apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});


