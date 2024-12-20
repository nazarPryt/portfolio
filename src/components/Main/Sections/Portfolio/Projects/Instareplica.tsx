import instareplicaCover from '@/public/projects/instareplicaCover.webp'
import {Project} from '@/components/Main/Sections/Portfolio/Project'
import {app} from '@/shared/app'

export const Instareplica = () => {
   return (
      <Project
         title={app.projects.Instareplica.name}
         cover={instareplicaCover}
         stack={['Next', 'Type Script', 'RTK Query', 'Web Socket', 'Styled-components']}
         frontendLink={app.projects.Instareplica.frontend}
         githubLink={app.projects.Instareplica.github}
      >
         <>
            <p>
               This project recreates a social media experience, enabling users to connect, share, and interact with a
               dynamic photo-sharing platform. Key features include user registration, photo uploading, and profile
               customization, alongside a chat system for real-time messaging. Users can follow and subscribe to each
               other, and a notification system keeps them updated on interactions, new posts, and messages.
            </p>
            <br />
            <p>
               Built with a modern tech stack, this project incorporates responsive design for optimal usability on
               mobile and desktop, real-time updates, and intuitive navigation. The backend manages efficient data
               handling and secure storage, supporting a smooth and interactive experience that mirrors today’s social
               media standards.
            </p>
         </>
      </Project>
   )
}
