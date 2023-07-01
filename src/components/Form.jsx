import React, {Component} from "react";
const shortid = require('shortid');

class Form extends Component {
     state = {
          name: '',
          tag: '',
          experience: 'junior',
     }

     nameInputId = shortid.generate();
     tagInputId = shortid.generate();

     handleChange = e => {
          const  {name, value} = e.currentTarget;
  
          this.setState({[name]: value});
    };
  
    handleSubmit = e => {
          e.preventDefault();

          this.props.onSubmit(this.state);
     
          this.reset();
     };

reset = () => {
     this.setState({name: '',tag: '',})
}

  render () {
     return (
          <form onSubmit={this.handleSubmit}>
               <label htmlFor={this.nameInputId}>Імʼя{' '}
                     <input type="text" 
                     name="name"
                     value={this.state.name}
                     onChange={this.handleChange}
                     id={this.nameInputId}
                     />
               </label>
               <label htmlFor={this.tagInputId}>Призвисько{' '}
                    <input type="text" 
                    name="tag"
                    value={this.state.tag}
                    onChange={this.handleChange}
                    id={this.tagInputId}
                    />  
               </label>

               <p>Ваш рівень:</p>
               <label>
                    <input type="radio" name="experience" 
                    value="junior" onChange={this.handleChange}
                    checked={this.state.experience === 'junior'}
                    /> Junior
               </label>
               <label>
                    <input type="radio" name="experience" 
                    value="middle" onChange={this.handleChange}
                    checked={this.state.experience === 'middle'}
                    /> Middle
               </label>
               <label>
                    <input type="radio" name="experience" 
                    value="senior" onChange={this.handleChange}
                    checked={this.state.experience === 'senior'}
                    /> Senior
               </label>
               <button type="submit">Відправити</button>
          </form>    
     );
  };  
};

export default Form;