import s from './Spinner.module.scss'

export type SpinnerProps = {fullScreen?: boolean; size?: number}

export const Spinner = ({fullScreen = false, size = 56}: SpinnerProps) => {
   const containerStyle = {
      height: fullScreen ? '100vh' : '100%',
   }

   const style = {
      height: size,
      width: size,
   }
   return (
      <div className={s.wrapper} style={containerStyle}>
         <span className={s.loader} style={style} />
      </div>
   )
}
