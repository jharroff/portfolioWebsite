function ProjectShowcaseBox({data}) {

  return (
    <>
      <div class="titleDiv">
        <h1>This is the project id {data.title}</h1>
        <p>{data.description}</p>
      </div>
    </>
  )
}

export default ProjectShowcaseBox
