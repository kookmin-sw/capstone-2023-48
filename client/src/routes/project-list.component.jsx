import ProjectForm from '../components/project-form/project-form.component';
import NewProjectForm from '../components/new-project-form/newProjectForm.component';
import {useContext, useEffect, useState} from 'react';
import { ProjectContext } from '../contexts/project.context';
import './project-list.style.scss';
import {useCookies} from "react-cookie";
import {getProjectList} from "../action/project-action";

const ProjectList = () => {
  const [cookies, setCookies] = useCookies();
  const { projectList } = useContext(ProjectContext);
  const { setProjectList } = useContext(ProjectContext);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    (async function () {
      if (cookies.w_auth) {
        const response = await getProjectList(cookies.user_id);
        if (response.data.length) {
          setProjectList(response.data);
        }
      }
    })();
  }, [cookies, refresh]);

  const [newProjectFormVisible,setNewProjectFormVisible] = useState(false);
  
  //set newProjectFormVisible true when new-project-btn clicked
  //set newProjectFormVisible false when close-btn clicked in newProjectForm
  const toggleFormVisible = () => {
    setNewProjectFormVisible(!newProjectFormVisible);
  }
  
  return (
    <div className='project-body'>
      <div className='project-slider'>
        { newProjectFormVisible && 
           <NewProjectForm onClose={toggleFormVisible} setRefresh={() => setRefresh(refresh + 1)}/>
        }
        <button className='new-project-btn' onClick={toggleFormVisible}>
          +프로젝트 추가
        </button>
        {projectList.map((project) => (
          <ProjectForm key={project.id} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

