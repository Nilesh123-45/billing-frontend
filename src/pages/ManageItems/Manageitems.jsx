import ItemForm from '../../components/ItemForm/ItemForm';
import ItemList from '../../components/ItemList/ItemList';
import React from 'react';
import './Manageitems.css'
const Manageitems = () => {
  return (
     <div className="items-container text-light">
    <div className="left-column"> 
      <ItemForm />
    </div>
    <div className="right-column">
      <ItemList />
    </div>
   </div>
  );
};
export default Manageitems;

// const ManageItems = () => { // <-- Renamed to ManageItems
//     return (
//         <div>
//             <h1>Manage Items Page</h1>
//         </div>
//     )
// }
// export default ManageItems; // <-- Export ManageItems
