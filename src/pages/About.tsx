import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Trophy, Briefcase, GraduationCap } from 'lucide-react';
import { useSelector } from 'react-redux';
import useFetchData from '../hooks/UseFetchdata';

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const { getResume } = useFetchData()
  const { resume } = useSelector(state => state.data)

  useEffect(() => {
    if (!resume) {
      getResume()
    }
  }, [])



  return (
    <div className="min-h-screen   bg-gray-50 dark:bg-gray-900 pt-10 dark:text-white">
      <div className=" mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex sticky top-10 items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="flex container m-auto flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-6">
              About Me
              <span className="block text-blue-600">Full-Stack Developer</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              With over 5 years of experience in web development, I specialize in building scalable applications
              using modern technologies. My passion lies in creating efficient, user-friendly solutions that
              solve real-world problems.
            </p>
            <a target='blank' href={resume?.location} className=" hidden sm:inline-flex cursor-pointer items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
              <Download size={20} />
              Download Resume
            </a>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800"
              alt="About Me"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Experience Section */}
        {/* <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  title: 'Senior Full-Stack Developer',
                  company: 'Tech Solutions Inc.',
                  period: '2021 - Present',
                  description: 'Leading development of enterprise applications using React and Node.js.',
                },
                {
                  title: 'Full-Stack Developer',
                  company: 'Digital Innovations',
                  period: '2019 - 2021',
                  description: 'Developed and maintained multiple client projects using modern web technologies.',
                },
              ].map((job, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4">
                  <h3 className="font-semibold text-xl">{job.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                  <p className="text-sm text-blue-600">{job.period}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{job.description}</p>
                </div>
              ))}
            </div>
          </div> */}

        {/* Education */}
        <div className="bg-white container m-auto dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                degree: 'Bachelor of Computer Science',
                school: 'Ranchi University',
                period: '2022 - 2025',
                description: 'Major in Computer Science with focus on Web Technologies.',
              },
              {
                degree: '12 th',
                school: 'NPU University',
                period: '2020 - 2022',
                description: 'Specialized in Math, Physics, Chemistry',
              },
            ].map((edu, index) => (
              <div key={index} className="border-l-2 border-blue-600 pl-4">
                <h3 className="font-semibold text-xl">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
                <p className="text-sm text-blue-600">{edu.period}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white container m-auto dark:bg-gray-800 p-8 rounded-xl shadow-lg ">
        <div className="flex items-center gap-4 mb-6">
          <Trophy className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold">Achievements</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "52 Weeks of Code Challenge",
              year: "2025",
              description: "Committed to solving DSA problems consistently for an entire year."
            },
            {
              title: "LeetCode Weekly Contest Participation",
              year: "2024",
              description: "Consistently participated in LeetCode and GeeksforGeeks contests, solving competitive problems."
            },
            {
              title: "Built an E-commerce Platform",
              year: "2024",
              description: "Developed a full-stack e-commerce app using Next.js, integrating Razorpay for payments."
            },
            {
              title: "AWS Lambda Server Development",
              year: "2025",
              description: "Designed a serverless backend using AWS Lambda, MongoDB, and S3 for file storage."
            },
            {
              title: "Browser Extension Developer",
              year: "2025",
              description: "Built a LeetCode automation extension to log problem submissions in an Excel sheet."
            },
            {
              title: "Open Source Contributor",
              year: "2024",
              description: "Contributed to open-source projects, improving codebases and adding features."
            },
            {
              title: "UI/UX Enthusiast",
              year: "2025",
              description: "Actively learning and applying UI/UX principles in real-world projects."
            }
          ].map((achievement, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="font-semibold text-2xl text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
              <p className="text-blue-500 mb-4">{achievement.year}</p>
              <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;