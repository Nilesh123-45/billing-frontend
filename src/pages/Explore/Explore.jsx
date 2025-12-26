import React from 'react';
import './Explore.css';
import { AppContext } from '../../context/AppContext.jsx';
import { useContext } from 'react';
import DisplayCategory from '../../components/DisplayCategory/DisplayCategory.jsx';
import DisplayItems from '../../components/DisplayItems/DisplayItems.jsx';
import CustomerForm from '../../components/CustomerForm/CustomerForm.jsx';
import CartItems from '../../components/CartItems/CartItems.jsx';
import CartSummary from '../../components/CartSummary/CartSummary.jsx';
import { useState } from 'react';
const Explore = () => {
  const {categories}=useContext(AppContext);

  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");



  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="explore-container text-light" >
      <div className="left-column">
        <div className="first-row">
          <DisplayCategory 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}/>
        </div>
        <hr className="horizontal-line" />
        <div className="second-row">
          <DisplayItems  selectedCategory={selectedCategory}/>
        </div>
      </div>

      <div className="right-column">
        <div className="customer-form-container" /*style={{height:'15%'}}*/>
          <CustomerForm  
          customerName={customerName}
          setCustomerName={setCustomerName}
          mobileNumber={mobileNumber}
          setMobileNumber={setMobileNumber}
          />
        </div>
        {/* <hr className="my-3 text-light" /> */}
        <hr className="horizontal-line" />
        <div className="cart-items-container" /* style={{height:'55%', overflowY:'auto'}}*/>
        <CartItems />
        </div>
        <hr className="horizontal-line" />
       <div className="cart-summary-container">
          <CartSummary 
             customerName={customerName}
             setCustomerName={setCustomerName}
            mobileNumber={mobileNumber}
           setMobileNumber={setMobileNumber}
          />
        </div>

      </div>
    </div>

  );
};
export default Explore;
