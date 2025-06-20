import myPortrait from "../assets/images/my-portrait.png";

function AboutMe() {
  return (
    <div
      className="bg-white text-gray-900 px-3 py-5 md:px-15 md:py-30"
      id="resume"
    >
      <div className="flex flex-col md:flex-row gap-5">
        <div>
          <img
            className="w-full h-auto md:h-160 md:w-600 rounded-2xl shadow-lg hover:animate-pulse hover:duration-75"
            src={myPortrait}
            alt="My portrait"
          />
        </div>
        <div>
          <p className="text-orange-700 mb-5"> A little about me...</p>
          <h2 className="mb-5">FATAI AYELOJA</h2>
          <p className="text-justify">
            I build scalable digital products with React, Tailwind CSS, Docker,
            and AWS — while leading operations at Ajrena Foods Ltd. and driving
            innovation in agriculture through a 15-hectare outgrower scheme and
            a planned agritech superapp. With a background in business ops,
            design, and cloud engineering, I combine tech, strategy, and purpose
            to create solutions that work — in the field and on the web.
          </p>
          <span className="text-orange-800">My expertise includes:</span>
          <p className="mb-5">
            <ul>
              <li>
                - Frontend Development: Reactjs, Tailwind CSS, Typescript,
                JavaScript, HTML, CSS, Bootstrap, Material UI
              </li>
              <li>- Backend Development: Node.js, Express.js, REST APIs</li>
              <li>- Databases: MongoDB, PostgreSQL, MySQL</li>
              <li>- Cloud Platforms: AWS</li>
              <li>- DevOps Tools: Docker, Kubernetes, Jenkins, Terraform</li>
              <li>
                - DevOps: Docker, Kubernetes, AWS, Terraform, CI/CD pipelines
              </li>
              <li>- Automation: Ansible, Jenkins, Terraform</li>
              <li>- Monitoring: Prometheus, Grafana</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <div>
          <a
            href="#"
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
            See My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
