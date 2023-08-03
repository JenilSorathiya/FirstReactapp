export default function Form(){
    return(
      <>
      <form>
          <table>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td><input type="text" placeholder="Enter Name"></input></td>
            </tr>
            <tr>
              <td>Mobile No.</td>
              <td>:</td>
              <td><input type="text" placeholder="Enter Mobile no."></input></td>
            </tr>
            <tr>
              <td>Age</td>
              <td>:</td>
              <td><input type="text" placeholder="Enter Age"></input></td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>:</td>
              <td><input type="radio" value="male" placeholder="Enter Gender"></input>Male</td>
            </tr>
            <tr>
              <td>Submit</td>
              <td>:</td>
              <td><input type="submit"></input></td>
            </tr>
          </table>
        </form>
        </>
    );
  }