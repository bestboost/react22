import React, {Component} from "react";
const shortid = require('shortid');

class Form extends Component {
     state = {
          name: '',
          tag: '',
          experience: 'junior',
          licence: false,
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
};

      handleLicenceChange = e => {
          this.setState({ licence: e.currentTarget.checked});
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
               <label>
                    <input type="checkbox" name="licence" 
                    checked={this.state.licence} 
                    onChange={this.handleLicenceChange}
                    /> Згоден з умовами
               </label>
               <button type="submit" disabled={!this.state.licence}>
                    Відправити</button>
          </form>    
     );
  };  
};

export default Form;