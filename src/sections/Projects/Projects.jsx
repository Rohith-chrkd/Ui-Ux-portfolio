import  styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://www.figma.com/design/lwMZ1ZkNDc5yPNQmNhXyRY/Service-App?node-id=0-1&t=4roN3WNn1nScAlUj-1"
          h3="Household Service Management"
          p="Service App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://www.figma.com/design/pvYTamdn9hfmQqVcFunKEI/Dental-hospital?node-id=0-1&t=e6QTocj4g4m9SS9e-1"
          h3="Dental Hospital Management"
          p="Denta Soft"
        />
        <ProjectCard
          src={hipsster}
          link="https://www.figma.com/design/3I2AtlopdwHs2VH8UUEeXP/Cement-Website?node-id=0-1&t=UJe7626IVYZhSaAc-1"
          h3="Cement Wholsale Website"
          p="Cement Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://www.figma.com/design/7FKvKTMknjCjeoIL8CgPBI/Attendence-Management?node-id=0-1&t=8B6bk0kEGPiRTOvg-1"
          h3="INIZIO"
          p="Employee Attendance App"
        />
      </div>
    </section>
  );
}

export default Projects;