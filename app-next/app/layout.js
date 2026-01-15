import "./globals.css";
import MealHeader from "@/components/MealsList/MealHeader";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Meal-Sharing"
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="pageContainer">
            <MealHeader/>
            <main className="contentWrap">
                
            {children}
            </main>
            
            <Footer/>

        </div>
        
      </body>
    </html>
  );
}
