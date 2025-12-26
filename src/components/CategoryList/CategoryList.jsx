
// import './CategoryList.css';
// import { useContext } from "react";
// import { AppContext } from "../../context/AppContext.jsx";

// const CategoryList = () => {
//     const { categories } = useContext(AppContext);
//     console.log("Categories data:", categories);

//     //  // ✅ Show spinner while loading
//     // if (!categories) return (
//     //     <div className="spinner-container">
//     //         <div className="spinner"></div>
//     //     </div>
//     // );

//     return (
//         // 1. REMOVED the 'height: 100vh' style to fix the page layout
//         <div className="category-list">
//             <div className="row pe-2">
//                 <div className="col-12 mb-3">
//                     {/* You can put your search bar component here later */}
                    // <input
                    // type="text"
                    // className="form-control" // This is a Bootstrap class
                    // placeholder="Search categories..."
                    // />
//                     Search Bar
//                 </div>
//             </div>

//             {/* 2. Added a new container for our custom list */}
//             <div className="list-container pe-2">
//                 {categories && categories.map((category) => (
//                     <div key={category.categoryId} className="category-item-card">
                
                    
//                     {/* 3. FIX: Use the unique 'categoryId' for the key
//                      4. Use our new CSS class "category-item-card" instead of "col-12" and "card" */}
                    
//                         <div className="d-flex align-items-center">
                            
//                             {/* 5. Use our new CSS class "category-thumbnail" */}
//                             <img
//                                   src={category.imgUrl} 
//                                  alt={category.name}
//                                  className="category-thumbnail"
//                                  />

//                             {/* 7. This div makes the name take up the middle space */}
//                             <div className="flex-grow-1 mx-3">
//                                 <h5 className="mb-0 text-white">{category.name}</h5>
//                                 <p className="mb-0 text-white">{category.description}</p>{/*earlier i used category.item but that does not render well */}

//                             </div>

//                             {/* 8. The delete button */}
//                             <div>
//                                 <button className="btn btn-sm btn-danger">
//                                     <i className="bi bi-trash"></i>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default CategoryList;

import './CategoryList.css'
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext.jsx";
import { deleteCategory } from '../../Service/CategoryService.js';
import { toast } from 'react-hot-toast';


const CategoryList=()=>{

    const {categories,setCategories} =useContext(AppContext);
    console.log("Categories data:", categories);
    const [searchTerm,setSearchTerm]=useState('');
const filteredCategories=categories.filter(category=>
category.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const deleteByCategoryId= async (categoryId)=>{
    try{
        const response= await deleteCategory(categoryId);
        if(response.status===204){
                 const updatedCategories=categories.filter(category => category.categoryId !== categoryId)
                 setCategories(updatedCategories);
                 //display a toast message
                 toast.success("Category deleted successfully");
        }else{
            //display error toast message
            toast.error("Failed to delete category");
        }
       }catch(error){
        console.error(error);
        toast.error("Failed to delete category");
       }
  }
    return(
        <div className="category-list" style={{height:'100vh',msOverflowY:'auto',overflowX:'hidden'}}>
            

            <div className="row pe-2">
                <div className="input-group mb-3">
                    <input type="text"
                     id="keyword" 
                     placeholder='Search by keyword' 
                     className="form-control"
                     onChange={(e)=> setSearchTerm(e.target.value)}
                     value={searchTerm}
                     />
                     <span className="input-group-text bg-warning">
                        <i className="bi bi-search"></i>
                     </span>
                </div>
            </div>
            <div className="row g-3 pe-2">
                {filteredCategories&& filteredCategories.map((category) => (
                    <div  key={category.categoryId} className="col-12">
                        <div className="card p-3" style={{backgroundColor:category.bgColor}}>
                            {/* // You would get 'category.themeName' from the DB instead of 'category.bgColor'
                        <div className={`card p-3 ${category.themeName}`}> */}
                         <div className="d-flex align-items-center">
                            <div style={{marginRight:'15px'}}>
                                 <img
                                  src={category.imgUrl} 
                                 alt={category.name}
                                 className="category-thumbnail"
                                 />
                            </div>
                            <div className="flex-grow-1">
                                <h5 className="mb-0 text-white">{category.name}</h5>
                                <p className="mb-0 text-white">{category.description} | {category.items} Items</p>
                            </div>
                            <div>
                                <button className="btn btn-sm btn-danger"
                                onClick={()=> deleteByCategoryId(category.categoryId)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                          </div>
                      </div>
                  </div>
                ))}
            </div>
        </div>

    )

}
export default CategoryList;
