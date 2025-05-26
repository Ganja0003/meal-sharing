import MealsList from "@/components/MealsList/MealsList";
import MealButton from "@/components/MealsList/MealButton";

export default function mealsPage() {
  return (
    <>
      
      <MealsList />
      <MealButton text='return' route='/'/>
    </>
  );
}
