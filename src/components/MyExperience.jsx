import { experienceList } from "../constants";

function MyExperience() {
  return (
    <div className="p-10 sm:px-20 text-gray-900 border-gray-900">
      <h1 className="py-10 text-center">My Experience</h1>
      {experienceList.map((exp) => (
        <div
          key={exp.id}
          className="flex flex-col bg-gray-900 text-white border-2 border-gray-400 rounded-3xl p-5 hover:bg-gray-700 shadow-gray-300 shadow-md hover:border-gray-900 mb-5"
        >
          <div className="flex justify-between font-extrabold">
            <div className="flex flex-row gap-5">
              <div>
                <img
                  src={exp.companyLogo}
                  alt={`${exp.companyName} logo`}
                  className="h-15 w-full"
                />
              </div>
              <div>{exp.companyName}</div>
            </div>
            <div>{exp.yearDuration}</div>
          </div>
          <div>
            <p className="mt-5 text-lg lg:text-2xl text-gray-300">
              {exp.jobDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
// The MyExperience component renders a list of experiences with their details.
export default MyExperience;
