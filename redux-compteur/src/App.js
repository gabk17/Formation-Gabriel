import Counter from './components/Counter'
import ReduxForm from './components/ReduxForm'
import moment from 'moment'

function App() {
  
  const submit = values => {
    const aDate = values.date
    console.log(aDate);
    console.log(JSON.stringify(aDate));
    console.log(JSON.stringify(moment(aDate).format()));
    console.log(JSON.stringify(moment(aDate).format('dddd')));
  }

  return (
    <div className="App">
      <Counter /> <br/>
      <ReduxForm onSubmit={submit} />
    </div>
  );
}

export default App;
