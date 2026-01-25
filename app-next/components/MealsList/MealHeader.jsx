'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from 'lucide-react';
import { useState } from "react";
function MealHeader() {
  const pathname = usePathname();
  const [menuOpen,setMenuOpen] = useState(false)

  function togglevisibility(){
    setMenuOpen((prev) => !prev)
  }

  return (
    <div className="nav">
      <div className="title">
        <h1>Meals Project</h1>
      </div>
      <Menu className='menuIcon' onClick={togglevisibility}/>
      <div className={`navLinks ${menuOpen ? 'show':'hide'}`}>
        <Link href="/" className={pathname === "/" ? 'activeLink' : ""}>
          Home
        </Link>
        <Link
          href="/meals"
          className={pathname === "/meals" ? 'activeLink' : ""}
        >
          Meals
        </Link>
        <Link
          href="/meals/create"
          className={pathname === "/meals/create" ? 'activeLink' : ""}
        >
          Create Meal
        </Link>
        <Link
          href="/#footer"
          className={pathname === "/#footer" ? 'activeLink' : ""}
        >
          Contact
        </Link>
        
      </div>
    </div>
  );
}

export default MealHeader;
