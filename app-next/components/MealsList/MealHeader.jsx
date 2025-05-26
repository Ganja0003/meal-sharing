'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
function MealHeader() {
  const pathname = usePathname();

  return (
    <div className="nav">
      <div className="title">
        <h1>Meals Project</h1>
      </div>
      <div className="navLinks">
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
