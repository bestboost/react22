import React from "react";

const Filter = ({value, onChange}) => {
   return   <label> Філтр за імʼям
              <input type="text" value={value} 
              onChange={onChange}/>
            </label>
};

export default Filter;

