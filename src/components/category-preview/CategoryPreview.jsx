import './category-preview-styles.scss'
import { Link, Outlet } from "react-router-dom";
import ProductCard from '../productcard/ProductCard'

const CategoryPreview=({title,products})=>{
    return (
        <div className='category-preview-container'>
            <h2>
            <Link to={`/shop/${title}`}>
                    <span className='title'>{title.toUpperCase()}</span>
                </Link>
            </h2>
            <div className='preview'>
                {products.filter((_,idx)=>idx<4).map((product)=>(<ProductCard key={product.id} product={product}/>))
                }
            </div>
        </div>
    )
}

export default CategoryPreview;