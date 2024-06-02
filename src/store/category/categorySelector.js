import {createSelector} from 'reselect';

const selectCategoryReducer=(state)=>state.categories;

export const selectCategories=createSelector(
[selectCategoryReducer],
(categoriesSlice)=>categoriesSlice.categoriesMap
);

export const selectCategoryMap=createSelector(
    [selectCategories],
    (categories)=>categories.reduce((acc,category)=>{
        const {title,items}=category;
        acc[title.toLowerCase()]=items;
        return acc;
    },{})
);


// export const selectCategoryMap=(state)=>{
//      return state.categories.categoriesMap.reduce((acc,category)=>{
//     const {title,items}=category;
//     acc[title.toLowerCase()]=items;
//     return acc;
//   },{});
// };