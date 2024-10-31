import uiKitCove from '@/public/projects/uiKitCover.webp'
import {Project} from '@/components/Main/Sections/Portfolio/Project'
import {NpmIcon} from '@/icons/NpmIcon'
import Link from 'next/link'
import {app} from '@/shared/app'

export const UiKit = () => {
   return (
      <Project
         title={'Ui-kit'}
         cover={uiKitCove}
         stack={['Type Script', 'Storybook', 'Styled-components', 'Radix', 'NPM']}
         frontendLink={app.projects.uiKit.frontend}
         githubLink={app.projects.uiKit.github}
         npmLink={app.projects.uiKit.npm}
      >
         <>
            <p>
               The shared UI Kit for <strong>Instareplica</strong> and <strong>InstaAdmin</strong> utilizes TypeScript
               for reliable component development, Storybook for interactive documentation, Styled-components for
               themeable styling, and Radix UI for accessible design primitives. The kit is structured for modularity,
               allowing for reusable components with a strong emphasis on maintainability. It supports flexible theming,
               enabling both light and dark modes and easy customization for distinct brand identities, ensuring a
               cohesive user experience across both applications. Additionally, the UI Kit is published to{' '}
               <Link href={app.projects.uiKit.npm} aria-label='NPM Link' target='_blank'>
                  <NpmIcon />
               </Link>{' '}
               with CI/CD, facilitating seamless updates and integration into projects
            </p>
         </>
      </Project>
   )
}
