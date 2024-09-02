
const Course = ({ course }) => {

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

    </div>
  )
}

const Header = ({ name }) => {

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Part = (props) => {

  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )

}


const Content = ({parts}) => {

  return (
    parts.map((part) => 
    <Part key = {part.id} part = {part.name} exercises = {part.exercises} />
    )  
  )
}

const Total = ({parts}) => {

  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0)
  
  return (
    <div>
      Total exercises in course: {totalExercises}
    </div>
  )
}

export default Course