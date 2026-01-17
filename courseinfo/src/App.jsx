const Header = ({course}) => {
    return (
              <h1>{course}</h1>

    )
}

const Part = ({part, ex}) => {
    return (
        <p>
            {part} {ex}
        </p>
    )
}
const Content = ({parts}) => {
    return (
        <div>
            <Part part={parts[0].part} ex={parts[0].exercise} />
            <Part part={parts[1].part} ex={parts[1].exercise} />
            <Part part={parts[2].part} ex={parts[2].exercise} />
        </div>

    )
}
const Total = ({ex1, ex2, ex3}) => {
    return (
        <p>Number of exercises {ex1 + ex2 + ex3}</p>

    )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14}

  ]

  return (
    <div>
        <Header course = {course}></Header>
        <Content parts = {parts}> </Content>

        <Total ex1={parts[0].exercise} ex2={parts[1].exercise} ex3={parts[2].exercise}></Total>
    </div>
  )
}

export default App
