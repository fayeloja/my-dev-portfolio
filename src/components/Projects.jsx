import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <div
      className="bg-gray-900 text-white px-3 py-5 md:px-15 md:py-30"
      id="works"
    >
      <h1 className="text-center">My Projects</h1>
      <p className="mt-5 text-center">
        Discover the projects I have been able to develop, manage, and deploy
        over the course of my experience as a software developer and DevOps
        engineer.
      </p>
      <div
        className="grid grid-cols-1 
          place-items-center md:grid-cols-2 
          my-10
          md:gap-8
        "
      >
        <ProjectCards />
      </div>
    </div>
  );
}

export default Projects;
