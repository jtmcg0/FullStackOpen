
const Course = ({ course }) => {

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />

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
  
//  return (
//    <div>
//      <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises} />
//      <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises} />
//      <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises} />
//    </div>
  )
}

export default Course