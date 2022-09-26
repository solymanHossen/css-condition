




const Search = ({searchItems}) => {
  return (
   <div >

    <input type="text" 
    className="input-search"
    placeholder='Search by name'
    onChange={(e) => searchItems(e.target.value)}  
    /> 
   </div>
  );
};

export default Search;