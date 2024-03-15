export default function Button(props) {
  return (
    <a className="button" rel="noreferrer" target="_blank" href={props.href}>
      {props.text}
    </a>
  );
}
