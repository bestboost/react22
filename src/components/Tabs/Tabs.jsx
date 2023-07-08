import React, {PureComponent} from "react";

class Tabs extends PureComponent {
   state = {
     activeTabIdx: 0,
   };

//    shouldComponentUpdate(nextProps, nextState) {
//      return nextState.activeTabIdx !== this.state.activeTabIdx;
//    };

   setAciveTabIdx = idx => {
     this.setState({activeTabIdx: idx});
   };

     render () {
          console.log(`Re-render @ ${Date.now()}`);

          const { activeTabIdx } = this.state;
          const { items } = this.props;
          const activeTab = items[activeTabIdx];

          return (
           <>
           <div>
               {items.map((item, idx) => (
                    <button type="button"
                    key={item.label}
                    onClick={() => this.setAciveTabIdx(idx)}
                    >
                         {item.label}
                    </button>
               ))}
           </div>
           <div>
               <h2>{activeTab.label}</h2>
               <p>{activeTab.content}</p>
           </div>
           </>
          );
     };
};

export default Tabs;