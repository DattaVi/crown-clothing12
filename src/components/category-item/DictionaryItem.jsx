import React from "react";
import  './dictionary-item-styles.scss';
import { useNavigate } from "react-router-dom";

function DictionaryItem(props){
    const {title,id,imageUrl,route}=props;
    const navigate=useNavigate();
    const handleNavigation=()=>navigate(route);
    return (
      <div className='directory-item-container' onClick={handleNavigation}>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className='body'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    );
}

export default DictionaryItem;