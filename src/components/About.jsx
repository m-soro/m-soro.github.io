import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("background");

  // Certification badges
  const certifications = [
    {
      title: "Salesforce Certified Administrator",
      image:
        "https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/z_other/sys-admin-logo.png?raw=true",
      link: "https://trailhead.salesforce.com/en/credentials/administrator",
    },
    {
      title: "Salesforce Certified Platform Developer I",
      image:
        "https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/z_other/pd1-logo.png?raw=true",
      link: "https://trailhead.salesforce.com/en/credentials/platformdeveloperi",
    },
  ];

  // Dynamic subheadings based on active tab
  const subheadings = {
    background:
      "A certified Salesforce developer with a passion for creating elegant solutions to complex problems.",
    story:
      "From hospitality professional to software developer — my story of transformation and growth.",
  };

  return (
    <section
      id="about"
      className="py-32 px-6 text-white parallax min-h-[90vh] flex items-center relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #0a0a0a, #0f0f1e, #0a0a0a)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade-up"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 w-80 h-80 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto z-10 w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-300">
            {subheadings[activeTab]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Profile Image Column */}
          <div className="md:col-span-1">
            <div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 overflow-hidden shadow-xl"
              data-aos="fade-up"
            >
              <div className="relative">
                <img
                  src="https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/z_profilePics/me002.jpg?raw=true"
                  alt="Mark Soro, in his U.S. Citizenhip ceremony"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-20"></div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm italic text-center">
                  In my U.S. citizenship oath taking ceremony
                </p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-2">
            <div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 p-8"
              data-aos="fade-up"
            >
              {/* Tab Navigation */}
              <div className="flex mb-6 border-b border-gray-700">
                <button
                  className={`pb-3 px-4 font-medium transition-colors ${
                    activeTab === "background"
                      ? "text-purple-400 border-b-2 border-purple-400"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("background")}
                >
                  Professional Background
                </button>
                <button
                  className={`pb-3 px-4 font-medium transition-colors ${
                    activeTab === "story"
                      ? "text-purple-400 border-b-2 border-purple-400"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("story")}
                >
                  My Story
                </button>
              </div>

              {/* Tab Content */}
              <div className="space-y-4 text-gray-300 leading-relaxed">
                {activeTab === "background" && (
                  <>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-indigo-300">
                          Salesforce Development
                        </h4>
                        <p className="mb-4">
                          I specialize in building scalable applications using
                          Apex, Lightning Web Components, and modern integration
                          techniques. My experience includes developing for
                          high-compliance federal environments, where I've
                          created solutions that automate workflows and enhance
                          user experiences for millions of users.
                        </p>

                        {/* Certification badges without label and card */}
                        <div className="flex flex-wrap gap-4 my-4 items-center">
                          {certifications.map((cert, index) => (
                            <a
                              key={index}
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transform transition-transform hover:scale-105"
                              title={cert.title}
                            >
                              <img
                                src={cert.image}
                                alt={cert.title}
                                className="h-16 w-16 object-contain"
                              />
                            </a>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-indigo-300">
                          Full-Stack Development
                        </h4>
                        <p>
                          Beyond Salesforce, I'm proficient in the MERN stack
                          (MongoDB, Express, React, Node.js) and Python. This
                          versatility allows me to approach problems from
                          multiple angles and build comprehensive solutions that
                          bridge different technologies.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-indigo-300">
                          Professional Approach
                        </h4>
                        <p>
                          I thrive in Agile environments and excel at
                          collaborating with cross-functional teams. My
                          experience includes CI/CD using tools like Flosum,
                          managing deployments across environments, and
                          resolving complex integration challenges. I am
                          experienced at translating business requirements into
                          technical solutions that deliver measurable value.
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "story" && (
                  <>
                    <p>
                      Hey there! I'm a passionate developer with a background in
                      both Salesforce and full-stack web development. In 2023, I
                      completed an intensive Software Engineering Certificate
                      Program at Per Scholas, which transformed my approach to
                      building digital solutions.
                    </p>
                    <p>
                      Before diving into this program, I spent considerable time
                      self-studying and working on personal projects, building a
                      foundation that would later help me excel in more complex
                      development environments.
                    </p>
                    <p>
                      A major milestone in my journey was becoming a U.S.
                      citizen in 2023. Having arrived from the Philippines with
                      just one contact person, earning my citizenship was a
                      profound moment that reflected years of determination and
                      hard work. As a first-generation American, I deeply
                      appreciate the opportunities this country has provided.
                    </p>
                    <p>
                      What defines me professionally is my persistence and
                      optimism. I approach challenges with enthusiasm and a
                      commitment to finding elegant solutions, no matter how
                      complex the problem might seem initially.
                    </p>
                    <p>
                      When I'm not coding, you can find me exploring the vibrant
                      DC area with my partner, where I enjoy the perfect blend
                      of cultural experiences and professional opportunities.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
