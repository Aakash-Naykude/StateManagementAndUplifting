import "../styles/list.css";
export const GroceryList = ({
  inplist,
  title,
  status,
  id,
  handleDelete,
  handleToggle,
}) => {
  console.log(inplist);
  return (
    <div className="groceryList">
      <h3>{title}</h3>
      <button onClick={() => handleToggle(id)}>
        {status ? "purchased" : "Not purchased yet"}
      </button>
      <button onClick={() => handleDelete(id)}>Delete this item</button>
    </div>
  );
};
