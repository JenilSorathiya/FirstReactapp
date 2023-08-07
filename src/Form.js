export default function Form(props){
    return(
      <>
      <form>
          <table>
            <tr>
              <td>{props.name}</td>
              <td>:</td>
              <td><input type="text" placeholder="Enter Name"></input></td>
            </tr>
            <tr>
              <td>Mobile No.{props.mobile}</td>
              <td>:</td>
              <td><input type="text" placeholder="Enter Mobile no."></input></td>
            </tr>
            <tr>
              <td>Age{props.age}</td>
              <td>:</td>
              <td><input type="text" placeholder="Enter Age"></input></td>
            </tr>
            <tr>
              <td>Gender{props.gender}</td>
              <td>:</td>
              <td><input type="radio" value="male" placeholder="Enter Gender"></input>Male</td>
            </tr>
            <tr>
              <td>Submit{props.submit}</td>
              <td>:</td>
              <td><input type="submit"></input></td>
            </tr>
          </table>
        </form>
        </>
    );
  }