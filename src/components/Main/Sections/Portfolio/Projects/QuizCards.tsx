import QuizCardsCover from '@/public/projects/QuizCardsCover.webp'
import {Project} from '@/components/Main/Sections/Portfolio/Project'
import {app} from '@/shared/app'

export const QuizCards = () => {
   return (
      <Project
         title={'QuizCards – Interactive Learning Card Platform'}
         cover={QuizCardsCover}
         stack={['React', 'Type Script', 'Redux-Thunk', 'Material UI']}
         frontendLink={app.projects.QuizCards.frontend}
         githubLink={app.projects.QuizCards.github}
      >
         <>
            <p>
               QuizCards is a dynamic tool for knowledge acquisition through customizable learning cards. Designed to
               make studying engaging and effective, it allows users to create, organize, and review flashcards on
               various topics. Each deck is structured for easy recall, helping users reinforce key concepts and track
               their progress over time.
            </p>
            <br />
            <p>
               The platform supports different learning modes, such as quizzes and matching games, to enhance retention
               and make studying interactive. LearnDeck is perfect for students, professionals, or anyone looking to
               expand their knowledge efficiently in bite-sized, memorable formats.
            </p>
         </>
      </Project>
   )
}
