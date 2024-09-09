import React from 'react'
import './form.css'
function Form() {

  return (
    <>
      <div className="ab">Form</div>
      <form>
        <table>
          <tr>
            <td><label for="name">Name</label></td>
            <td><input class="margin" type="text" id="name"></input></td>
          </tr>
          <tr>
            <td>
              <label for="e-mail">e-mail</label></td>
            <td><input class="margin" type="text" id="name"></input></td>
          </tr>
          <tr>
            <td><label for="name">Name</label></td>
            <td><input class="margin" type="text" id="e-mail"></input></td>
          </tr>
          <tr>
            <td>        <label for="Password">Password</label></td>
            <td><input class="margin" type="text" id="Password"></input></td>
          </tr>
          <tr>
            <td>   <label for="Date of Birth">Date of birth</label></td>
            <td><input class="margin" type="text" id="DateofBirth"></input></td>
          </tr>
          <tr>
            <td>  <label for="gender">Gender</label></td>
            <td><input class="margin" type="radio" name="male" />Male
              <input class="margin" type="radio" name="female" />Female
              <input class="margin" type="radio" name="others" />others<br />
            </td>
          </tr>
          <tr>
            <td>  <label for="Mobile">Mobile</label></td>
            <td><input class="margin" type="text" id="Mobile"></input></td>
          </tr>
        </table>
      </form>
    </>
  )
}

export default Form