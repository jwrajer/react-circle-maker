const container = document.querySelector(`#root`);

// create divs for circle, divs for square

const App = () => {

  // const [color, setColor] = React.useState(0);

  // const getColor = React.useEffect(() => {
  //   return setColor(Math.floor(Math.random()*255));
  // }, [])
  // console.log(color);

  

  return (
    <>
      <Square />
      <Square />
      <Square />
      <Circle />
      <Circle />
      <Circle />
    </>
  )
}





const colorPicker = () => {
  return Math.floor(Math.random() * 4);
}

const Square = () => {
  const square = `square ${colorPicker()}`;
  return <section className={square}></section>
}

const Circle = () => {
  const circle = `circle ${colorPicker()}`;
  return <section className={circle}></section>
}

const root = ReactDOM.createRoot(container);
root.render(<App />)