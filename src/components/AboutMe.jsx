function AboutMe() {
  return (
    <div className="bg-white text-gray-900 text-center items-center justify-center px-5 sm:px-10 md:px-36 py-10 md:py-20">
      <h1>About me</h1>
      <p className="mb-5">
        I`m a software developer and DevOps engineer with a passion for building
        scalable systems and automating workflows. Over the years, I`ve worked
        on a variety of projects, from full-stack web applications to cloud
        infrastructure automation.
      </p>
      <h3>My expertise includes:</h3>
      <p className="mb-5">
        <ul>
          <li>- Frontend Development: React.js, Tailwind CSS, JavaScript</li>
          <li>- Backend Development: Node.js, Express.js, Python, REST APIs</li>
          <li>- Databases: MongoDB, PostgreSQL, MySQL</li>
          <li>- Cloud Platforms: AWS</li>
          <li>- DevOps Tools: Docker, Kubernetes, Jenkins, Terraform</li>
          <li>- DevOps: Docker, Kubernetes, AWS, Terraform, CI/CD pipelines</li>
          <li>- Automation: Ansible, Jenkins, Terraform</li>
          <li>- Monitoring: Prometheus, Grafana, ELK Stack</li>
        </ul>
      </p>
      I`m always learning and exploring new technologies to improve my skills
      and deliver better solutions.
      <div className="mt-10">
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
  );
}

export default AboutMe;
