export const Foo = ({ bar, list = [] }: { bar: boolean; list: string[] }) => {
  return (
    <div>
      This is a test and bar is {bar ? "true" : "False"} <br></br>
      and the list is
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
};
