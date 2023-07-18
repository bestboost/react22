export const Materials = ({items, onDelete}) => {
     return (
          <ul>
               {items.map(item => (
                    <li key={item.id}>
                         <p>
                              <b>Назва</b> {item.title}
                         </p>
                         <p>
                              <b>Посилання</b> {item.link}
                         </p> 
                         <button type="button"
                         onClick={() => onDelete(item.id)}>
                              Видалити</button>                                   
                     
                    </li>
                     
               ))}
          </ul>
     );
}