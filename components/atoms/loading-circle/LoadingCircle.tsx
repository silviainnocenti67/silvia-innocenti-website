import classes from './LoadingCircle.module.scss'

type Props = {}

export default function LoadingCircle({}: Props) {
  return (
    <div className={classes.loadingCircle}></div>
  )
}