import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import styles from "@/styles/ProjectsPage.module.css";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  // const projects = getProjects();

  return (
    <>
      <h3>Stuff I&apos;ve Built So Far</h3>

      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}