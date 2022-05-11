import './App.css';

const buttonA = <button>Histórico dos clientes</button>
const buttonB = <button>Cadastrar Cliente</button>
const customer = 'Anderson Clayton'

const hasCostumer = true

const App = () => {

  const renderShowHistory = () => (
    <div>
      Clique no botão abaixo para visualizar o histórico dos clientes
      <br/>
      {buttonA}
    </div>
  )

  const renderAddCustomer = () => (
    <div>
      Clique abaixo para cadastrar o cliente
      <br/>
      {buttonB}
    </div>
  )

  const showCustomer = () => {
    if (!hasCostumer) return null

    return (
      <div>
        <h1>Nome do cliente: Anderson Clayton</h1>
      </div>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo à nossa aula =D.</p>
      {hasCostumer ? renderShowHistory() : renderAddCustomer()}
      <div>
        {showCustomer()}
      </div>
    </div>
  );
}

export default App;
