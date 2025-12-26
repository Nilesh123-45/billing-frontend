// import {AppContext} from '../../context/AppContext.jsx';
// import { deleteItem } from '../../Service/ItemService.js';
// import toast from 'react-hot-toast';

// const ItemList=()=>{
//     const{itemsData,setItemsData}=useContext(AppContext);
//     const[searchTerm,setSearchTerm]=useState("");
//     const filteredItems=itemsData.filter((item)=>{

//         return item.name.toLowerCase().includes(searchTerm.toLowerCase());
//     });

//     const removeItem= async (itemId)=>{
//         try{
//                const response= await deleteItem(itemId); 
//                 if(response.status===204){
//                     const updatedItems=itemsData.filter(item=> item.itemId !== itemId);
//                     setItemsData (updatedItems);
//                     toast.success("Item deleted successfully");
//                 }else{
//                     toast.error("Failed to delete item");
//                 }
//         }catch(error){
//             console.error(error);
//             toast.error("Failed to delete item");
//         }
//     }

//     return(
//         <div className="category-list" style={{height:'100vh',msOverflowY:'auto',overflowX:'hidden'}}>
            

//             <div className="row pe-2">
//                 <div className="input-group mb-3">
//                     <input type="text"
//                      id="keyword" 
//                      placeholder='Search by keyword' 
//                      className="form-control"
//                      onChange={(e)=> setSearchTerm(e.target.value)}
//                      value={searchTerm}
//                      />
//                      <span className="input-group-text bg-warning">
//                         <i className="bi bi-search"></i>
//                      </span>
//                 </div>
//             </div>
//             <div className="row g-3 pe-2">
//                 {filteredItems.map((item,index)=>{
//                     <div className="col-12" key={index}>
//                         <div className="card p-3 bg-dark">
//                             <div className="d-flex align-items-center">
//                                 <div className="item-image">
//                                     <img src={item.imgUrl} alt={item.name}  />
//                                 </div>
//                                 <div className="flex-grow-1">
//                                     <h6 className="mb-1 text-white">{item.name}</h6>
//                                     <p className="mb-0 text-white">
//                                         Category: {item.category.name} 
//                                     </p>
//                                     <span className="mb-0 text-blok badge rounded-pill text-bg-warning ">
//                                         &#8377; {item.price}
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <button className="btn btn-danger btn-sm" onClick={()=>removeItem(item.itemId)}>
//                                         <i className="bi bi-trash"></i>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 })}
//             </div>
//         </div>
//     )
// }
// export default ItemList;
import React, { useContext, useState } from "react"; // 1. Added React and useState
import { AppContext } from '../../context/AppContext.jsx';
import { deleteItem } from '../../Service/ItemService.js';
import toast from 'react-hot-toast';
import './ItemList.css'; // Assuming you have some CSS for styling

const ItemList = () => {
    // 2. Get 'categories' from context to find names
    const { itemsData, setItemsData, categories } = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState("");

    // 3. Made the filter "safe" by checking (itemsData || [])
    const filteredItems = (itemsData || []).filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const removeItem = async (itemId) => {
        try {
            const response = await deleteItem(itemId);
            if (response.status === 204) {
                const updatedItems = itemsData.filter(item => item.itemId !== itemId);
                setItemsData(updatedItems);
                toast.success("Item deleted successfully");
            } else {
                toast.error("Failed to delete item");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete item");
        }
    }

    return (
        // 4. Removed the layout-breaking height:100vh style
        <div className="category-list" style={{ msOverflowY: 'auto', overflowX: 'hidden' }}>

            <div className="row pe-2">
                <div className="input-group mb-3">
                    <input type="text"
                        id="keyword"
                        placeholder='Search by keyword'
                        className="form-control"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                    <span className="input-group-text bg-warning">
                        <i className="bi bi-search"></i>
                    </span>
                </div>
            </div>
            <div className="row g-3 pe-2">
                {filteredItems.map((item) => {
                    // 5. Find the category name using the item's categoryId
                    const category = (categories || []).find(cat => cat.categoryId === item.categoryId);

                    return (
                        // 6. Use the unique item.itemId for the key
                        <div className="col-12" key={item.itemId}>
                            <div className="card p-3 bg-dark">
                                <div className="d-flex align-items-center">
                                    <div>
                                        {/* Added basic styling for the image */}
                                        <img src={item.imgUrl} alt={item.name}  className="item-image" />
                                    </div>
                                    {/* 7. Fixed typo 'flex-frow-1' to 'flex-grow-1' */}
                                    <div className="flex-grow-1 item-text-content">
                                        <h6 className="mb-1 text-white">{item.name}</h6>
                                        <p className="mb-0 text-white">
                                            {/* 8. Use the category name we found */}
                                            Category: {category ? category.name : '...'}
                                        </p>
                                        <span className="mb-0 text-dark badge rounded-pill text-bg-warning ">
                                            &#8377; {item.price}
                                        </span>
                                    </div>
                                    <div>
                                        <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.itemId)}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ItemList;