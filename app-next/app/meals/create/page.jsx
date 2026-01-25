'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function CreateMeal(){
   const router = useRouter()

   const [formData,setFormData] = useState({
      title:'',
      description:'',
      location:'',
      when:'',
      max_reservations:'',
      price:'',
      created_date: new Date().toISOString().split('T')[0],
      image_url:'',
   })


   function handleChange(e) {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      })
   }

   async function handleSubmit(e) {
      e.preventDefault()
      
      const response = await fetch('http://127.0.0.1:3001/api/meals',{
         method: 'POST',
         headers: {
            'Content-Type':'application/json',
         },
         body: JSON.stringify({
            ...formData,
            image_url: formData.image_url.startsWith("http") ? formData.image_url : "http://127.0.0.1:3000/default.jpg",
         }),
      }) 
      const data = await response.json();
      console.log(data)
      if(response.ok && data.mealsID){
         alert(data.message)
         router.push(`/meals/${data.mealsID}`)
      }
   }

console.log(formData)
    return(
        <>
           <div className="createMeal">

            
                    
            <form className='createMealForm' onSubmit={handleSubmit}>
                <h2>Create a meal</h2>
                <div className="createMealDivs">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name='title' value={formData.title} onChange={handleChange} required/>
                </div>

                <div className="createMealDivs">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name='description' value={formData.description} onChange={handleChange} required/>
                 </div>

                 <div className="createMealDivs">
                    <label htmlFor="location">Location: </label>
                    <input type="text" name='location' value={formData.location} onChange={handleChange} required/>
                 </div>

                 <div className="createMealDivs">
                   <label htmlFor="when">When: </label>
                    <input type="date" name='when' value={formData.when} onChange={handleChange} min={new Date().toISOString().split('T')[0]} required/> 
                 </div>

                 <div className="createMealDivs">
                    <label htmlFor="max_reservations">Max Reservations: </label>
                    <input type="number" name='max_reservations' value={formData.max_reservations} onChange={handleChange} required/>
                 </div>

                 <div className="createMealDivs">
                    <label htmlFor="price">Price: </label>
                    <input type="number" name='price' value={formData.price} onChange={handleChange} required/>
                 </div>

                 <div className="createMealDivs">
                    <label htmlFor="image_url">Image URL: </label>
                    <input type="text" name='image_url' value={formData.image_url} onChange={handleChange} required/>
                 </div>

                 <button type='submit' className='createMealButton'>Submit</button>

            </form>
            </div>
        </>
    )
}