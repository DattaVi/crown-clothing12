import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoryMap } from "../../store/category/categorySelector";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

function CategoriesPreview() {
    const categoriesMap = useSelector(selectCategoryMap);
    console.log('CategoriesMap in component:', categoriesMap); // Add this line

    if (!categoriesMap || Object.keys(categoriesMap).length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (<CategoryPreview key={title} title={title} products={products} />);
                })
            }
        </Fragment>
    );
}

export default CategoriesPreview;
