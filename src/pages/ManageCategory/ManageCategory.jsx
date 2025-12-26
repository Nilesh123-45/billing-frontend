import './Managecategory.css';
import CategoryForm from '../../components/CategoryForm/CategoryForm.jsx';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';

const ManageCategory = () => {
  return (
  <div className="category-container text-light">
    <div className="left-column">
       <CategoryForm/>
    </div>
    <div className="right-column">
      <CategoryList/>

    </div>
   </div>

  )
}
export default ManageCategory;

// import React from 'react';

// // Renamed component to PascalCase
// const ManageCategory = () => {
//     return (
//         <div>
//             <h1>Manage Category Page</h1>
//         </div>
//     )

// }
// export default ManageCategory;
