const RadioButton = (props) => {
  //Creates radio buttons from prop values
  const { label, name, checked, onChange } = props;
  return (
    <label>
      <input type="radio" name={name} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};
export default RadioButton;
