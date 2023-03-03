import React, {useState} from 'react'
const User = () => {
    const [firstName, setFirstName] = useState<string>("Bar Shirom")
    const [dob, setDob] = useState<Date>(new Date("1991-08-11"))

    function CalculateAge() {
      while (!dob) {
        const input = prompt("Please enter your date of birth in the format MM/DD/YYYY:")
    
        if (input) {
          const date = new Date(input)
    
          if (isNaN(date.getTime())) {
            alert("Invalid date format, please try again.")
          } else {
            setDob(date)
          }
        }
      }
    }

    
  const changeDob = () => {
    let date = null

      while (!date) {
        const input = prompt("Please enter your new date of birth in the format MM/DD/YYYY:")

        if (input) {
          const newDate = new Date(input)

          if (isNaN(newDate.getTime())) {
            alert("Invalid date format, please try again.")
          } else {
            date = newDate
          }
        }
      }

      setDob(date)
    
  }

  // Calculate age based on current date
  const now = new Date()
  const ageInMs = now.getTime() - (dob?.getTime() ?? now.getTime())
  const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25)
    

    function handleChangeName() {
        const newName = prompt("Please enter new name")
        if (!newName) {
          setFirstName("Please enter new name")
        } else {
          setFirstName(newName)
        }
      }

  return (
    <div className="user">
      <p>Name: {firstName}</p>
      <button onClick={handleChangeName}>Change Name</button>
      <p>Age: {ageInYears.toFixed(1)} years</p>
      <button onClick={changeDob}>Change Date of Birth</button>
      </div>
  )
  
}


export default User
