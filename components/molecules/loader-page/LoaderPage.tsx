import LoadingCircle from "@/components/atoms/loading-circle/LoadingCircle";
import classes from "./LoaderPage.module.scss"

export default function LoaderPage() {
    return (
    <div className={classes.loadingContainer}>
      <LoadingCircle />
    </div>
  )
}