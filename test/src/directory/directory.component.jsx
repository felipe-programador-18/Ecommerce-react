
import CategoryItem from "../component/category-item/category-item.component"
const Directory = ({categories}) => {

    return (<div className="directory-container" >
       
    {categories.map((category) => (  
       <CategoryItem key={category.id} category ={category} />
    ))}
      
  </div>)
}

export default Directory