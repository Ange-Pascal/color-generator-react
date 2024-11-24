import SingleColor from './SingleColor';
import {nanoid} from "nanoid"

export default function ColorList({ colors }) {
  return (
    <section>
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
}
