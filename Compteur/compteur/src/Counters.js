import Counter from './Counter';

const Counters = ({counters, onDelete}) => {
  return (
    <>
      {counters.map((counter) => (<Counter key={`counters-list-${counter.id}`} a_counter={counter} onDelete={onDelete} />))}
    </>
  )
}

export default Counters;
