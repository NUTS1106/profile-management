import styled from "styled-components";

const InputCom = styled.input`
  border-radius: 4px;
  font-size: 14px;
  margin-top: 8px;
  padding-left: 6px;
  background-color: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  height: 26px;
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.focusedBorder};
    border-width: 1.5px;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

function Input({ name, labelName, user, setUser, type }) {
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <InputDiv>
      <Label>{labelName}</Label>
      <InputCom
        type={type}
        name={name}
        value={user[name]}
        onChange={onChange}
        required
      ></InputCom>
    </InputDiv>
  );
}

export default Input;
