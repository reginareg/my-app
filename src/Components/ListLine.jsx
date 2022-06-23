import { useContext } from "react";
import DataContext from "./DataContext";

function ListLine({ animal }) {

    const {setDeleteAnimal, setModalAnimal} = useContext(DataContext);

    const remove = () => {
        setDeleteAnimal(animal);
    }

    const edit = () => {
        setModalAnimal(animal);
    }

  return (
    <li className="list-group-item">
      <div className="one-animal">
        <div className="one-animal-content">
          <b>{animal.animal}</b>
          <span>weight {animal.weight}kg</span>
        </div>
        <div className="one-animal_buttons"></div>
        <button type="button" className="btn btn-outline-danger mr-3" onClick={remove}>
          Delete
        </button>
        <button type="button" className="btn btn-outline-warning mr-3" onClick={edit}>
          Edit
        </button>
      </div>
    </li>
  );
}

export default ListLine;
