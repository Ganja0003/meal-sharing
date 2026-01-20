export default function CreateMeal(){


    return(
        <>
           <div className="createMeal">

            
                    
            <form className='createMealForm'>
                <h2>Create a meal</h2>
                <div className="createMealTitle createMealDivs">
                    <label htmlFor="title">Title: </label>
                    <input type="text" />
                </div>

                <div className="createMealDescription createMealDivs">
                    <label htmlFor="description">Description: </label>
                    <input type="text" />
                 </div>

                 <div className="createMealLocation createMealDivs">
                    <label htmlFor="location">Location: </label>
                    <input type="text" id='location'/>
                 </div>

                 <div className="createMealWhen createMealDivs">
                   <label htmlFor="when">When: </label>
                    <input type="date" id='when'/> 
                 </div>

                 <div className="createMealMax_reservations createMealDivs">
                    <label htmlFor="max_reservations">Max Reservations: </label>
                    <input type="number" id='max_reservations'/>
                 </div>

                 <div className="createMealPrice createMealDivs">
                    <label htmlFor="price">Price: </label>
                    <input type="number" id='price'/>
                 </div>

                 <div className="createMealCreated_date createMealDivs">
                   <label htmlFor="created_date">Created Date: </label>
                    <input type="date" id='created_date'/> 
                 </div>

                 <div className="createMealImage_url createMealDivs">
                    <label htmlFor="image_url">Image URL: </label>
                    <input type="text" id='image_url'/>
                 </div>

            </form>
            </div>
        </>
    )
}