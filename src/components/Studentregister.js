import React, { useState } from 'react'

const Studentregister = () => {
    const [studentn, setStudentn]=useState("")
    const [age, setAge]=useState("")
    const [course, setCourse]=useState("science")
    const [consent, setConsent]=useState("")

    const handlenamechange=(e)=>{
        setStudentn(e.target.value)
    }
    const handleagechange=(e)=>{
        setAge(e.target.value)
    }
    const handlecoursechange=(e)=>{
        setCourse(e.target.value)
    }
    const handleconsentchange=(e)=>{
        setConsent(e.target.value)
    }

    const handlesubmit=(e)=>{
        e.preventDafault();
    }

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <h2> Student Registration Form</h2>
            <div>
            <   label> Name</label>
                <input type="text" value={studentn} onChange={handlenamechange}> </input>
            </div>

            <div>
                <label> Age</label>
                <input type="number" value={age} onChange={handleagechange}></input>
            </div>

            <div>
                <label> Course</label>
                <select value={course} onChange={handlecoursechange}>
                    <option value="Science"> Science</option>
                    <option value="Math">Math</option>
                </select> 
            </div>

            <div>
                <label> Consent</label>
                <input type="checkbox" checked={consent} onChange={handleconsentchange}></input>
            </div>
            <button type="submit"></button>
        </form>
    </div>
  )
}

export default Studentregister