import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  constructor() {
    super();
    this.getStudents();
  }
  state = {
    studenti: []
  };
  getStudents() {
    fetch(`https://private-92c5b-oticek.apiary-mock.com/questions`)
      .then(data => data.json())
      .then(studenti => {
        this.setState({ studenti: studenti.students });
      });
  }

  render() {
    let StudentNames = this.state.studenti.map(Student => (
      <body>
        {Student.name} - {Student.kamaradi}
      </body>
    ));
    return <div> {StudentNames}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
