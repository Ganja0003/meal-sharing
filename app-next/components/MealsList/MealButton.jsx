import Link from "next/link";

function MealButton({route,text}) {
  return (
    <div className="mealButtonContainer">
      <Link href={route}>
        <button className="mealButton">{text}</button>
      </Link>
    </div>
  );
}

export default MealButton;
