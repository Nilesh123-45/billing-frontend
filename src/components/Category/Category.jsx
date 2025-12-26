import './Category.css';

const Category =({categoryName,imgUrl,numberOfItems,bgColor,isSelected,onClick})=>{
    return(
       <div className="d-flex align-items-center rounded gap-1 p-3 position-relative category-hover "
       style={{backgroundColor: bgColor,cursor:'pointer'}}
         onClick={onClick}
       >
        {/* <div style={{position:'relative',marginRight:'15px'}}> */}
        <div className="category-icon-wrapper">
            <img src={imgUrl} alt={categoryName} className="category-icon" />
        </div>
        <div>
            <h6 className='text-dark mb-0'>{categoryName}</h6>
            <p className="text-white mb-0">{numberOfItems} Items</p>
        </div>
        {isSelected && <div className="active-category"></div>}
       </div>
    )
}
export default Category;

