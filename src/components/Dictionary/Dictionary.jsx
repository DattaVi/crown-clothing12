import React from "react";
import DictionaryItem from "../category-item/DictionaryItem";
import './dictionary-styles.scss'

function Dictionary(props){
    const {categories}=props;
    return(
        <div className="categories-container">
        { categories.map(({title,id,imageUrl,route})=>{
          return (
                <DictionaryItem title={title} id={id} imageUrl={imageUrl} route={route}/>
          );
        })      
  }
  </div>
    )
}

export default Dictionary;