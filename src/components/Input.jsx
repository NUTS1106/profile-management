function Input({ name, labelName, user, setUser, type }) {
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <label>
      {labelName}
      <input
        type={type}
        name={name}
        value={user[name]}
        onChange={onChange}
      ></input>
    </label>
  );
}

export default Input;
