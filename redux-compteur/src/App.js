import Counter from './components/Counter'
import ReduxForm from './components/ReduxForm'

function App() {
  const submit = values => {
    // print the form values to the console
    console.log(values)
  }
  return (
    <div className="App">
      <Counter /> <br/>
      <ReduxForm onSubmit={submit} />
    </div>
  );
}

export default App;
