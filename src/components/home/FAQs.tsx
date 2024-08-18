import Question from "./Question";

const FAQs = () => {
  const faqsData: {
    id: number;
    question: string;
    answer: string;
  }[] = [
    {
      id: 1,
      question:
        "Which subjects are considered in the process of Department Change?",
      answer:
        "In the online academic sessions, 7 theory subjects were considered for DepC but in the offline sessions all subjects other than EAA are considered.",
    },
    {
      id: 2,
      question:
        "What should I do if my allotted mentor does not respond to my queries?",
      answer:
        " You can mail your grievance along with your and your mentors details to us at info.swgiitkgp@gmail.com.",
    },
    {
      id: 3,
      question:
        "What is an additional subject, and what are the rules regarding an additional subject?",
      answer:
        "Additional subjects are the subjects, not covered in the regular curriculum requirement, which the students can choose from 3rd year onwards to explore their interests. Students with CGPA greater than or equal to 7.50 without any backlog are allowed to choose additional subject(s) (maximum 5 per semester). The grades obtained in the additional subjects do not contribute to the SGPA/CGPA of a student.",
    },
    {
      id: 4,
      question: "Where can I get details about scholarships?",
      answer:
        "You may see the Academic Information on the Resources page of this site.",
    },
    {
      id: 5,
      question: "What is a breadth subject",
      answer:
        "A portion of the curriculum includes breadth subjects. There is a curriculum that is specific to each department. However, breadth is a required component of the curriculum that is typically unconnected to the parent department, and your GPA in breadth counts toward your overall GPA.",
    },
    {
      id: 6,
      question:
        "Where can I get details about the future prospects of each department?",
      answer:
        "You can look at our Know Your Department blogs in the blogs page of this website to read the answers to Frequently Asked Questions about your respective departments.",
    },
    {
      id: 7,
      question:
        "Can BTech students sit for CDC internships again next year after converting to dual degree?",
      answer:
        "No, students cannot for CDC internship twice. You will have to get an off-campus internship for the compulsory internship in 4th year.",
    },
  ];

  return (
    <section className="grid place-content-center px-4 py-20 pb-40 lg:px-12 xl:px-32">
      <h2 className="text-secondary text-center text-6xl font-semibold">
        Frequently Asked Questions
      </h2>

      <div className="mt-20 grid gap-5">
        {faqsData.map((faq) => {
          return (
            <Question key={faq.id} question={faq.question} answer={faq.answer} />
          );
        })}
      </div>
    </section>
  );
};
export default FAQs;
