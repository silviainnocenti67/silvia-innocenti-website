import classes from './SIButton.module.scss';

/**
 * Props for the button component.
 * @property text - The text to display on the button.
 * @property type - The type of the button (button, submit, reset).
 * @property disabled - Whether the button is disabled.
 */
type Props = {
    text: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

/**
 * Simple button component.
 * @param text text of the button.
 * @param type type of the button.
 * @param disabled whether the button is disabled.
 * @returns Button component.
 */
export default function SIButton({ text, type, disabled }: Props) {
  return (
    <button className={classes.SIButton} type={type ?? "button"} disabled={disabled}>
      {text}
    </button>
  )
}