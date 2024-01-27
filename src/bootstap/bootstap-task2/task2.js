
import InsertCard from "./card1";

const MultipleCard = () => {
    const array=[
        {
          name:"panda",
           color:"black&white",
            age:"5"
        },
        {
          name:"teddy",
          color:"black&white",
        age:"3"
        },
        {
          name:"bear",
          color:"black&white",
            age:"2"
        },
        {
            name:"panda",
             color:"black&white",
              age:"5"
          },
          {
            name:"teddy",
            color:"black&white",
          age:"3"
          },
          {
            name:"bear",
            color:"black&white",
              age:"2"
          },
          {
            name:"panda",
             color:"black&white",
              age:"5"
          },
          {
            name:"teddy",
            color:"black&white",
          age:"3"
          },
          {
            name:"bear",
            color:"black&white",
              age:"2"
          },
          {
            name:"panda",
             color:"black&white",
              age:"5"
          },
          {
            name:"teddy",
            color:"black&white",
          age:"3"
          },
          {
            name:"bear",
            color:"black&white",
              age:"2"
          }

      ]
      const renderCard = (item, index) => (
        <div key={index} className="col-sm-4">
          <InsertCard name={item.name} profile={item} />
        </div>
      );
    
      const renderRows = () => {
        const rows = [];
    
        for (let i = 0; i < array.length; i += 3) {
          const rowItems = array.slice(i, i + 3);
    
          const row = (
            <div key={i / 3} className="row">
              {rowItems.map((item, index) => renderCard(item, i + index))}
            </div>
          );
    
          rows.push(row);
        }
    
        return rows;
      };
    
      return (
        <div className="container mt-5">
          {renderRows()}
        </div>
      );
    };
    
    export default MultipleCard;