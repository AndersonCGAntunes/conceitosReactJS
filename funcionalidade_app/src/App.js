import './App.css';

const customer = [
  {
    id: 1,
    name: 'Anderson Clayton',
    skills: ['HTML', 'React', 'Node', 'Webpack']
  },
  {
    id: 2,
    name: 'José Antônio',
    skills: ['Lua', 'Java', 'Go', 'CSS']
  },
  {
    id: 3,
    name: 'Maria Priscila',
    skills: ['Cobol', 'C sharp', 'Python', 'Linguagem C']
  },
  {
    id: 4,
    name: 'Alcindo Nogueira',
    skills: ['Ruby', 'C++', 'Visual Basic', 'PHP']
  }
]

const App = () => {

  const renderCustomer = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{paddingLeft: '30px'}} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo à nossa aula =D.</p>
      <div>
        <ul>
          {customer.map(renderCustomer)}
        </ul>
      </div>
    </div>
  );
}

export default App;
