import React from 'react';

const FormsInput = () => {
  return (
    <>
      <form className="form-inline" action="/action_page.php">
        <div className="form-group">
          <label htmlFor="email" className="mr-sm-2">
            Email address:
          </label>
          <input
            type="email"
            className="form-control mb-2 mr-sm-2"
            placeholder="Enter email"
            id="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pwd" className="mr-sm-2">
            Password:
          </label>
          <input
            type="password"
            className="form-control mb-2 mr-sm-2"
            placeholder="Enter password"
            id="pwd"
          />
        </div>

        <div className="form-check mb-2 mr-sm-2">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" /> Remember me
          </label>
        </div>

        <button type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      </form>

      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">List1</li>
        <li className="list-group-item">List2</li>
        <li className="list-group-item">List3</li>
        <li className="list-group-item">List4</li>
      </ul>
     
    </>
  );
};

export default FormsInput;
