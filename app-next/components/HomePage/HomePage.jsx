"use client";
import HYFLogo from "@/assets/hyf.svg";
import Image from "next/image";
import "./HomePage.css";
import { useState } from "react";
import { useEffect } from "react";
import MealsList from "../MealsList/MealsList";


// Feel free to replace the content of this component with your own
function HomePage() {
  return <MealsList/>
}

export default HomePage;