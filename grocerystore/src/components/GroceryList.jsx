import "../styles/list.css";
export const GroceryList = ({
  inplist,
  title,
  status,
  id,
  handleDelete,
  handleToggle,
  image
}) => {
  console.log(image);
  return (
    <div className="groceryList">
        <img src={image}/>
      <h3>{title}</h3>
      <button onClick={() => handleToggle(id)}>
        {status ? "purchased" : "Not purchased yet"}
      </button>
      <button onClick={() => handleDelete(id)}>Delete this item</button>
    </div>
  );
};
