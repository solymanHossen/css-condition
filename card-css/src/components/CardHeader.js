
import img1 from "../Asset/images/boltIcon.svg"

const CardHeader = ({ data }) => {

  const date = new Date();
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  // const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];



  return (
    <div className='mainCard'>
      {
        data.map((d, index) => {

          console.log(index);

          const { name, originType, manual, dateUpdated, id } = d;

          const isValid=true;
          const isValid2=true

          return <div className="card-content" key={id}>
            <div className='headerFlex'>

              {index%2===0? <img src={img1} alt="icon" /> : ''}

              <p>{name}</p>
            </div>
            <div className='text-bold'>
              {originType}
            </div>
            <p><span>{manual}</span> Intents</p>
            <div className='btn-flex'>
             
            <button className={isValid?"colorbtn" : "btn"} >View</button>
            <button className={isValid2?"colorbtn2":"btn"}>Remove</button>
            </div>
            <div className='last-update'>Last Update:<span>{dateUpdated}{month}/{day}/{year}</span></div>
          </div>
        }
        )

      }

    </div>

  );
};

export default CardHeader;