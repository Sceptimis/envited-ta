import styles from './RoundedButton.module.scss'

function RoundedButton(props) {
  return (
    <>
      <button
        className={`${styles.roundedButton} ${props.className}`}
        onClick={props.onClick}>
        {props.text}
      </button>
    </>
  );
}

export default RoundedButton;