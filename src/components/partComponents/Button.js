export default function Button(props) {
  return (
    <a className="button" rel="noreferrer" target={props.target} href={props.href}>
      {props.text}
    </a>
  );
}
