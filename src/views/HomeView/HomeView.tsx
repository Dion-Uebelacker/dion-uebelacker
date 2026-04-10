import React from 'react';
import {Avatar, Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, Link} from "@mui/material";
import ProfileImage from '../..//assets/Avatar.png'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinearProgress from '@mui/material/LinearProgress';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {useNavigate} from "react-router-dom";


const HomeView: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Grid container direction='column'>
      <Grid pt={2} pb={2} container direction='column' justifyContent='center' alignItems='center' gap={1}>
        <Grid>
          <Avatar
            alt="Dion Übelacker"
            src={ProfileImage}
            sx={{ width: 240, height: 240 }}
          />
        </Grid>
        <Grid>
          <Typography align="center" variant="h1" sx={{letterSpacing: 8, textTransform: 'uppercase'}}>Dion Übelacker</Typography>
        </Grid>
        <Grid>
          <Typography align="center" variant="h6" sx={{letterSpacing: 4, textTransform: 'uppercase'}}>Software Engineer</Typography>
        </Grid>
      </Grid>
      <Box sx={{height: 6, backgroundColor: '#f1f1f1'}} />
      <Grid container direction='row' sx={{ flexWrap: { xs: 'wrap', sm: 'nowrap' } }} gap={8}>
        <Grid container size={{xs: 12}} sx={{width: { sm: 300 }, flexShrink: { sm: 0 }, padding: 2}} direction='column'>
          <Grid>
            <Typography variant='h6'>Contact</Typography>
          </Grid>
          <Grid>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="+444-4444"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText
                  primary="consulting@uebelacker.it"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dion-%C3%BCbelacker-43b6b51b9/">LinkedIn</Link>}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Germany"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid>
            <Typography variant='h6'>Skills</Typography>
          </Grid>
          <Grid mt={2} pl={2}>
            <Typography>Java / Kotlin</Typography>
            <LinearProgress sx={{backgroundColor: 'lightGrey',}} variant="determinate" value={90} />
          </Grid>
          <Grid mt={2} pl={2}>
            <Typography>Spring Boot</Typography>
            <LinearProgress sx={{backgroundColor: 'lightGrey'}} variant="determinate" value={90} />
          </Grid>
          <Grid mt={2} pl={2}>
            <Typography>Javascript / Typescript</Typography>
            <LinearProgress sx={{backgroundColor: 'lightGrey',}} variant="determinate" value={90} />
          </Grid>
          <Grid mt={2} pl={2}>
            <Typography>React</Typography>
            <LinearProgress sx={{backgroundColor: 'lightGrey'}} variant="determinate" value={90} />
          </Grid>
          <Grid mt={2} pl={2}>
            <Typography>Angular 2+</Typography>
            <LinearProgress sx={{backgroundColor: 'lightGrey'}} variant="determinate" value={70} />
          </Grid>
          <Grid mt={2} pl={2}>
            <Typography>Openshift</Typography>
            <LinearProgress sx={{backgroundColor: 'lightGrey',}} variant="determinate" value={80} />
          </Grid>
          <Grid mt={2} pl={2}>
            <Typography>Azure</Typography>
            <LinearProgress sx={{backgroundColor: 'lightGrey',}} variant="determinate" value={50} />
          </Grid>
          <Grid mt={2} pl={2}>
            <Typography>Github Actions</Typography>
            <LinearProgress sx={{backgroundColor: 'lightGrey'}} variant="determinate" value={70} />
          </Grid>
          <Grid mt={2} pl={2}>
            <Typography>Kubernetes</Typography>
            <LinearProgress sx={{backgroundColor: 'lightGrey'}} variant="determinate" value={70} />
          </Grid>
          <Grid mt={3}>
            <Typography variant='h6'>Education</Typography>
          </Grid>
          <Grid mt={1} pl={2}>
            <Typography variant='subtitle1'>Bachelor of Science</Typography>
            <Typography variant='body2'>Wirtschaftsinformatik (Application Management)</Typography>
            <Typography variant='body2'>Duale Hochschule Baden-Württemberg</Typography>
          </Grid>
          <Grid mt={3}>
            <Typography variant='h6'>Certificates</Typography>
          </Grid>
          <Grid mt={1} pl={2}>
            <Typography variant='subtitle1'>Professional Scrum Master</Typography>
            <Typography variant='body2'>PSM I</Typography>
            <Typography variant='body2'>scrum.org | 2018</Typography>
          </Grid>
        </Grid>
        <Grid size={{xs: 12, md: 6}} sx={{flexGrow: { sm: 1 }, padding: 2}}>
          <Grid>
            <Typography variant='h6'>Projects</Typography>
          </Grid>
          <Grid>
            <Timeline sx={{
              '& .MuiTimelineItem-root::before': {
                content: 'none',
              }}}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h5">Lead Developer – Design Analysis Application</Typography>
                  <Typography variant="body2">Duration: 01/2022 - Present</Typography>
                  <Typography mt={2} variant="body1">Leading the development of a web-based design analysis platform for engineers, supporting Design for Reliability, Design for Robustness, Design for Security, and Design for Safety across the full development lifecycle.</Typography>
                  <Typography mt={1} variant="subtitle1">Methods & Tools</Typography>
                  <Typography variant="body1">Java, Spring Boot, React, Openshift, Github Copilot, n8n – workflow automation with AI agents</Typography>
                  <Typography mt={1} variant="subtitle1">Responsibilities</Typography>
                  <List component="ul" dense>
                    <ListItem component="li" sx={{ display: 'list-item' }} >
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Leading an intercontinental, cross-functional development team in a distributed environment" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} sx={{fontSize: '1rem'}} primary="- Owning the software architecture and continuously refining it to meet business and technical requirements" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} sx={{fontSize: '1rem'}} primary="- Defining the technical roadmap and steering implementation priorities" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} sx={{fontSize: '1rem'}} primary="- Mentoring developers and establishing strong engineering standards and best practices" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} sx={{fontSize: '1rem'}} primary="- Acting as the main technical interface for Product Owners, project managers, and clients" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} sx={{fontSize: '1rem'}} primary="- Proactively managing technical risks and driving mitigation and escalation when necessary" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} sx={{fontSize: '1rem'}} primary="- Maintaining architecture diagrams and API specifications, and organizing technical workshops and knowledge-transfer sessions" />
                    </ListItem>
                  </List>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h5">Lead Developer – Team Satisfaction Application</Typography>
                  <Typography variant="body2">Duration: 02/2020 - 01/2022</Typography>
                  <Typography mt={2} variant="body1">Led the development of a web application that enabled teams to capture feedback on relevant topics, visualize trends over time, and identify areas requiring action.</Typography>
                  <Typography mt={1} variant="subtitle1">Methods & Tools</Typography>
                  <Typography variant="body1">Kotlin, Spring Boot, React, Openshift</Typography>
                  <Typography mt={1} variant="subtitle1">Responsibilities</Typography>
                  <List component="ul" dense>
                    <ListItem component="li" sx={{ display: 'list-item' }} >
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Leading an intercontinental, cross-functional development team in a distributed environment" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Owning and continuously refining the software architecture" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Defining the technical roadmap and steering implementation priorities" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} sx={{fontSize: '1rem'}} primary="- Mentoring developers and establishing strong engineering standards and best practices" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Acting as the main technical contact for Product Owners, project managers, and stakeholders" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Proactively managing technical risks and driving mitigation and escalation when necessary" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Maintaining architecture diagrams and API specifications, and organizing technical workshops and knowledge-transfer sessions" />
                    </ListItem>
                  </List>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h5">Software Engineer – Traffic Information Platform</Typography>
                  <Typography variant="body2">Duration: 03/2019 - 02/2020</Typography>
                  <Typography mt={2} variant="body1">Worked on the development of a traffic information platform for cities, municipalities, and public institutions, enabling the delivery of personalized traffic information to drivers through mobile applications.</Typography>
                  <Typography mt={1} variant="subtitle1">Methods & Tools</Typography>
                  <Typography variant="body1">Java, Spring Boot, React, React Native, Azure, Mapbox</Typography>
                  <Typography mt={1} variant="subtitle1">Responsibilities</Typography>
                  <List component="ul" dense>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Owning and continuously refining the software architecture" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Developing backend services using Java and Spring Boot" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Implementing the web frontend with React and TypeScript" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Maintaining architecture diagrams and API specifications, and organizing technical workshops and knowledge-transfer sessions" />
                    </ListItem>
                  </List>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h5">Software Engineer - Employees Self-Service Portal</Typography>
                  <Typography variant="body2">09/2017 - 03/2019</Typography>
                  <Typography mt={2} variant="body1">Development of a portal for the automation of standard processes.</Typography>
                  <Typography mt={1} variant="subtitle1">Methods & Tools</Typography>
                  <Typography variant="body1">Kotlin | Spring Boot | Camunda | BPMN | Angular | Axon Framework</Typography>
                  <Typography mt={1} variant="subtitle1">Responsibilities</Typography>
                  <List component="ul" dense>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Evaluation and selection of technologies" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Modeling and implementation of BPMN processes with Camunda" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Planning and implementation of an event-driven System with the Axon Framework" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} sx={{fontSize: '1rem'}} primary="- Setup and support of the Continuous Delivery Pipeline" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Implementation of the backend with Spring Boot & Kotlin" />
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }}>
                      <ListItemText slotProps={{ primary: {fontSize: '1rem'}}} primary="- Implementation of the frontend with Angular2+ & Typescript" />
                    </ListItem>
                  </List>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent='center' gap={4} alignItems='center' mt={2} mb={2}>
        <Grid>
          <Link component="button" onClick={() => navigate('/imprint')}>Imprint</Link>
        </Grid>
        <Grid>
          <Link component="button"  onClick={() => navigate('/privacy')}>Privacy</Link>
        </Grid>
        <Grid>
          <Link component="button">German Version</Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomeView;
