import ShopV1Cover from '@/public/projects/Shop-v1Cover.webp'
import {Project} from '@/components/Main/Sections/Portfolio/Project'
import {app} from '@/shared/app'

export const ShopV1 = () => {
   return (
      <Project
         title={'ShopV1'}
         subTitle={'FullStack Application'}
         cover={ShopV1Cover}
         stack={['React', 'Type Script', 'Redux-Toolkit', 'Stripe', 'Material-Ui']}
         bakEndStack={[
            'Express',
            'Type Script',
            'Mongo-DB/Mongoose',
            'Cloudinary',
            'JWT-authentication',
            'Nodemailer',
            'Zod-validators',
         ]}
         frontendLink={app.projects.ShopV1.frontend}
         githubLink={app.projects.ShopV1.github}
      >
         <>
            <p>
               The first version of my full-stack e-commerce application that allows users to browse products, add items
               to their cart, and securely complete purchases using <strong>Stripe</strong> integration. The application
               features user authentication, a responsive design for seamless browsing on all devices, also admin
               dashboard for managing inventory, adding new items, viewing orders, and user data. Built with performance
               and scalability in mind, it integrates a backend API for handling business logic and a dynamic frontend
               for an engaging user experience.
            </p>
            <br />
            <p>
               The backend is hosted on my own VPS server, ensuring control over deployment, scalability, and data
               security.
            </p>
         </>
      </Project>
   )
}
