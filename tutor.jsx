import './App.css';
// Hooks are important
// useState is a hook
import {useState, useEffect} from 'react'
function App() {
  const [place, setPlace] = useState('world')
  const [employees, setEmployees] = useState([
    {
      name: 'john',
      title: 'ceo',
      pay: 100000
    },
    {
      name: 'sarah',
      title: 'assistant',
      pay: 50000
    },
    {
      name: 'jane',
      title: 'cfo',
      pay: 150000
    }
  ])
  const [filteredEmployees, setFilteredEmployees] = useState([])
  useEffect(() => {
    // useEffect will a lot time go get your inital data from api or whatever
    // fetch('url')
    // .then(response => response.json)
    // .then(data => setEmployees(data))
    setFilteredEmployees(employees)
  }, [])
  const EmpOver60k = () => {
    setFilteredEmployees(employees.filter(each => each.pay > 60000))
  }
  const AllEmp = () => {
    setFilteredEmployees(employees)
  }
  const EmpHighestPaySort = () => {
    console.log(employees.sort((a, b) => a.pay - b.pay));
    // setFilteredEmployees(employees.sort((a, b) => a.pay - b.pay))
  }
  return (
    <>
      <div>
          <h1>Hello {place}</h1>
          <button onClick={AllEmp} >All employees</button>
          <button onClick={EmpOver60k} >Employees that make over 60k</button>
          <button onClick={EmpHighestPaySort} >higest paid</button>
          {filteredEmployees.map( each => {
            return(
              <>
                <h2>{each.name}</h2>
                <p>{each.title}</p>
                <p>{each.pay}</p>
              </>
            )
          })}
      </div>
    </>
  );
}
export default App;
// react developer tools

https://randomuser.me/