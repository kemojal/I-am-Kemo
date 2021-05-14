import React from 'react'
import styled from 'styled-components';

import SectionTitle from '../SectionTitle'
import ProjectCard from '../ProjectCard'
const ProjectsSection  = styled.section`
    width: 100vw;
    padding: 0 2rem;
    padding-top: 50px;
    /* height: 600px; */
`
const MyProjects = () => {
    return (
        <ProjectsSection>
            <SectionTitle />
            <ProjectCard />
        </ProjectsSection>
    )
}

export default MyProjects
