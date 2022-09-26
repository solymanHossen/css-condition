
import img1 from "../Asset/images/boltIcon.svg"

const CardHeader = ({ data }) => {

  // const date = new Date();
  // const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  // const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
console.log(data);


  return (
    <div className='mainCard'>
      {
        data.map((d, index) => {

          console.log(index);

          const { name, originType, dateUpdated,intents, id } = d;
          let today = new Date(dateUpdated)
          today.toDateString();
          
          const [month, day, year] = [today.getMonth(), today.getDate(), today.getFullYear()];
       

          console.log(today)

          const isValid=true;
          const isValid2=true

          return <div className="card-content" key={id}>
            <div className='headerFlex'>

              {originType==='automated'? <img src={img1} alt="icon" /> : ''}

              <p>{name}</p>
            </div>
            <div className='text-bold'>
              {originType}
            </div>
            <p> Intents: <span>{intents}</span></p>
            <div className='btn-flex'>
             
            <button className={isValid?"colorbtn" : "btn"} >View</button>
            <button className={isValid2?"colorbtn2":"btn"}>Remove</button>
            </div>
            <div className='last-update'>Last Update:<span>{month}/{day}/{year}</span></div>
          </div>
        }
        )

      }

    </div>

  );
};

export default CardHeader;