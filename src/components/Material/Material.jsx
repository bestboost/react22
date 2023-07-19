import { Component } from "react";
import { EditMaterialModal} from '../EditMaterialModal/EditMaterialModal';

export class Material extends Component {
     state = {
          isOpenModal: false,
     };

     openModal = () => this.setState({isOpenModal: true});
     closeModal = () => this.setState({isOpenModal: false});

     render() {
          const {item, onDelete, onUpdate} = this.props;
          const {isOpenModal} = this.state;

               return (
                    <div>     
                         <p>
                              <b>Назва:</b> {item.title}
                              </p>
                         <p>
                              <b>Посилання:</b> {item.link}
                         </p> 
                         <button type="button"
                              onClick={() => onDelete(item.id)}>
                              Видалити
                         </button>   
                         <button type="button" onClick={this.openModal}>
                              Редагувати
                         </button>  
                         {isOpenModal && <EditMaterialModal 
                              onClose={this.closeModal}
                              onEdit={() => onUpdate({id: item.id, title: Date.now()})} 
                         />}
                    </div>
               );
          };
     };

 