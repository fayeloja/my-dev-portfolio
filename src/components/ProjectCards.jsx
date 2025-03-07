import { projectdatabase } from "../constants";

function ProjectCards() {
  return (
    <>
      {projectdatabase.map((project) => {
        return (
          <div
            key={project.id}
            className="
                    max-w-sm sm:max-w-md md:max-w-lg 
                    lg:max-w-xl bg-white 
                    rounded-4xl shadow-md text-gray-900 p-5 
                    md:p-10 mb-10
                "
          >
            <h2 className="mb-5">{project.projectcategory}</h2>
            <img
              src={project.imgsource}
              className="w-full h-auto md:h-90 
                    md:w-auto object-cover 
                    md:p-5 border 
                    hover:shadow-lg
                    hover:animate-pulse
                    duration-75
                    ease-in-out
                    border-gray-900 
                    rounded-2xl md:rounded-4xl"
              alt={project.projectname}
            />
            <div className="flex flex-col mt-4">
              <h2>{project.projectname}</h2>
              <div className="flex flex-wrap">
                <h3>Tech Stack: </h3>
                <p>{project.techstack}</p>
              </div>
              <p className="text-gray-600 mt-2 justify-center tracking-wider">
                {project.shortdescription}
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <a
                href={project.demolink}
                className="
                bg-amber-400 
                hover:bg-amber-700 
                transition 
                border-2
                border-gray-800
                text-gray-900 
                font-bold 
                rounded-4xl 
                px-5 
                py-2 
                justify-center 
                text-base
                md:text-4xl
                
              "
              >
                Live Demo
              </a>
              <a
                href={project.githublink}
                className=" bg-amber-400 
                hover:bg-amber-700 
                transition 
                border-2
                border-gray-800
                text-gray-900 
                font-bold 
                rounded-4xl 
                px-15 
                py-2 
                text-base
                md:text-4xl
                
                justify-center"
              >
                GitHub
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectCards;
