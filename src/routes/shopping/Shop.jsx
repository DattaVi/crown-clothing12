import { Route, Routes } from 'react-router-dom';
import './shop-styles.scss';
import CategoriesPreview from '../../components/categories-preview/CategoriesPreview';
import Category from '../../components/category/Category';
import { setCategoriesMap } from '../../store/category/categoryReducer';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase.utils';
import { useDispatch } from 'react-redux';

function Shop() {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            try {
                const categoryMap = await getCategoriesAndDocuments();
                console.log('Fetched category map:', categoryMap); // Add this line
                dispatch(setCategoriesMap(categoryMap));
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        getCategoriesMap();
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop;
