import Link from "next/link";
import styles from "@/styles/AboutPage.module.css";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <h1>About Me</h1>

      <p className={styles.intro}>
        Hello! I&apos;m <strong>Ahsanul Habib</strong>, an undergraduate student in
        Computer Science and Engineering at the{" "}
        <strong>Rajshahi University of Engineering & Technology (RUET)</strong>.
        I enjoy building scalable web applications, exploring artificial
        intelligence, and solving problems through software engineering.
      </p>

      <section className={styles.section}>
        <h2>Education</h2>

        <ul>
          <li>
            <strong>B.Sc. in Computer Science & Engineering</strong>, Rajshahi
            University of Engineering & Technology (RUET)
            <br />
            June 2022 – Present
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Areas of Interest</h2>

        <ul>
          <li>Full-stack web development.</li>
          <li>Artificial Intelligence and LLM applications.</li>
          <li>Software engineering and system design.</li>
          <li>Competitive programming and problem solving.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Technical Skills</h2>

        <ul>
          <li>
            <strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS.
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js, REST APIs.
          </li>
          <li>
            <strong>Databases:</strong> MongoDB, PostgreSQL, Mongoose.
          </li>
          <li>
            <strong>Other:</strong> LangChain, Git, Authentication, UI/UX.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Training & Certifications</h2>

        <ul>
          <li>
            <strong>
              ITEE Fundamental Information Technology Engineer (FE) Examination
            </strong>{" "}
            — Passed in April 2026.{" "}
            <Link
              href="https://bditec.gov.bd/wp-content/uploads/2026/06/ITEE-Exam-Result-April-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.orangeLink}
            >
              View Result
            </Link>

            <ul>
              <li>
                Passed the internationally recognized Fundamental Information
                Technology Engineer (FE) Examination.
              </li>
              <li>
                Covered algorithms, databases, networking, operating systems,
                software engineering, and information security.
              </li>
            </ul>
          </li>

          <li>
            <strong>Learn With Sumit Reactive Accelerator Course</strong>{" "}
            <Link
              href="https://learnwithsumit.com/certificates/verify/LWSCTXN-LZA4X2Y9"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.orangeLink}
            >
              View Report Card
            </Link>

            <ul>
              <li>Completed with an A+ grade (91.92%).</li>
              <li>Awarded Star Performer.</li>
              <li>Received a Job Recommendation Letter.</li>
              <li>Strengthened expertise in React and Next.js development.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Professional Experience</h2>

        <ul>
          <li>
            <strong>Frontend Development Intern</strong>, Excite AI (Feb 2024 –
            Jun 2024)

            <ul>
              <li>
                Converted WordPress themes into dynamic React applications.
              </li>
              <li>
                Developed reusable components and improved frontend performance.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Achievements & Activities</h2>

        <ul>
          <li>
            Secured <strong>5th place</strong> in the RUET Intra-University
            Programming Contest.
          </li>

          <li>
            Executive Member of <strong>RUET Career Forum</strong>, organizing
            career events and workshops.
          </li>

          <li>
            Participated in multiple hackathons and software development
            competitions.
          </li>
        </ul>
      </section>
    </>
  );
}