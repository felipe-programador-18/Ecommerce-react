
import './category-item.styles.scss'

const CategoryItem = ({category}) => {
  
  const {imageUrl,title} = category 
   console.log('testing here ', imageUrl)
    return (
    <div className="category-container" style={{
        backgroundImage: `url(${imageUrl})`
    }}>

       <div className="background-image"  />
       <div className="category-body-container" >
        <h2>{title} </h2>
        <p>Shop now</p>
    </div>  
    </div>   

  )

}

export default CategoryItem