import InstaAdminCover from '@/public/projects/InstaAdminCover.webp'
import {Project} from '@/components/Main/Sections/Portfolio/Project'

export const InstaAdmin = () => {
   return (
      <Project
         title={'Insta-Admin'}
         cover={InstaAdminCover}
         stack={['Next', 'Type Script', 'Graphql', 'Apollo Client', 'Styled-components']}
         projectLink={'https://inctagram-admin-psi.vercel.app'}
         githubLink={'https://github.com/nazarPryt/inctagram-admin'}
      >
         <>
            <p>
               This administration panel is designed for efficient oversight and management of user interactions within
               the Instagram-like platform. Key functionalities include the ability to block and unblock users, delete
               accounts or content, and monitor platform-wide activity to maintain a safe and positive user experience.
               Additionally, administrators can review user payments, manage subscription plans, and access insights on
               user engagement and content trends.
            </p>
            <br />
            <p>
               It's an essential toolkit for administrators to maintain a high standard of quality and security in this
               social media environment.
            </p>
         </>
      </Project>
   )
}