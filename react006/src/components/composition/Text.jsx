export default function Text({ addEmoji, addBracket }) {
  let text = addEmoji ? addEmoji("I Love Allah", "💘") : "I love Allah";
  if (addBracket) text = addBracket(text);

  return <div>{text}</div>;
}
