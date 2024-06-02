import './category-styles.scss';
import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../productcard/ProductCard';
import { useSelector } from 'react-redux';
import { selectCategoryMap } from '../../store/category/categorySelector';

function Category() {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoryMap);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (categoriesMap && categoriesMap[category]) {
            setProducts(categoriesMap[category]);
        } else {
            setProducts([]);
        }
    }, [category, categoriesMap]);

    if (!categoriesMap || !categoriesMap[category]) {
        return <div>Loading...</div>;
    }

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products && products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </Fragment>
    );
}

export default Category;
