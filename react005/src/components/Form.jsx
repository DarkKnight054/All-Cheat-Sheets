import React from "react";

class Form extends React.Component {
  state = {
    regNo: "",
    studentName: "",
    description: "",
    dept: "",
    graduate: false,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]:
        e.target.name === "graduate" ? e.target.checked : e.target.value,
    });
  };

  submitHandler = (e)=>{
    e.preventDefault();
    const { regNo, studentName, description, dept, graduate } = this.state;
    console.log(regNo, studentName, description, dept, graduate);
  }
  render() {
    const { regNo, studentName, description, dept, graduate } = this.state;
    return (
      <>
        <div>IICT Student Information Form</div>
        {/* Form will be submitted as an event by invoking onSubmit method */}
        <form onSubmit={this.submitHandler}>
          <input
            name="regNo"
            type="text"
            value={regNo}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            name="studentName"
            type="text"
            value={studentName}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea
            name="description"
            value={description}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <select name="dept" value={dept} onChange={this.handleChange}>
            <option value="CSE">CSE</option>
            <option value="EEE">EEE</option>
            <option value="SWE">SWE</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            name="graduate"
            checked={graduate}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default Form;
