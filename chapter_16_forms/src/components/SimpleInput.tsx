import {FC} from "react";
import {SimpleInputC} from "../types";

const SimpleInput: FC<SimpleInputC> = (props) => {
  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
