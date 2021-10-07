function TextInput({ colSize, placeholder, name, value, onChange }) {
  return (
    <div className={`input-field col ${colSize}`}>
      <input
        placeholder={placeholder}
        name={name}
        type="text"
        className="validate"
        value={value}
        onChange={onChange}
      />
      <label className="active" htmlFor="taskName">
        {name}
      </label>
    </div>
  );
}

export default TextInput;
