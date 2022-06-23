import { useContext } from "react";
import DataContext from "./DataContext";
import ListLine from "./ListLine";

function List() {
  const { animals } = useContext(DataContext);

  return (
    <div classNameName="col-7">
      <div className="card">
        <div className="card-header">
          <h2>List</h2>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {
            animals.map(a => <ListLine key={a.id} animal={a}></ListLine>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default List;


