import instareplicaCover from '../../../../../../public/projects/instareplicaCover.png'
import {Project} from '@/components/Main/Sections/Portfolio/Project'

export const Instareplica = () => {
   return (
      <Project title={'Instareplica'} cover={instareplicaCover} stack={['Next', 'Type Script', 'Web Socket']}>
         <>
            <p>
               A next-gen social media platform blending the best features of popular apps. Share photos, videos, and
               stories with interactive features like live streaming and polls. Prioritizes privacy and security while
               fostering authentic connections worldwide.'
            </p>
            <p>
               A next-gen social <strong>media platform</strong> blending the best features of popular apps. Share
               photos, videos, and stories with interactive features like live streaming and polls. Prioritizes privacy
               and security while fostering authentic connections worldwide.'
            </p>
            <p>
               A next-gen social media platform blending the best features of popular apps. Share photos, videos, and
               stories with interactive features like live streaming and polls. Prioritizes privacy and security while
               fostering authentic connections worldwide.'
            </p>
         </>
      </Project>
   )
}
