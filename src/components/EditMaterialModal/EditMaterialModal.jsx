export const EditMaterialModal = ({onClose, onEdit}) => {
     return (
          <div>
               <h2>Модалка редагування матеріалів</h2>
               <button typt="button" onClick={() => {
                    onEdit();
                    onClose();
               }}>  Ось тепер точно редагуємо</button>
               <button type="button" onClick={onClose}>
                   Закрити
               </button>     
          </div>
     )
};
