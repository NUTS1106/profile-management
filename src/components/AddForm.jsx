import { useState } from "react";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { addUser } from "../store/redux/userSlice";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 100%;
  background-color: ${({ theme }) => theme.formBackground};
  flex-shrink: 0;
  border-right: 3px ${({ theme }) => theme.border} solid;
`;

const Form = styled.form`
  height: auto;
  width: 280px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.formBackground};
  gap: 10px;
`;

const Button = styled.button`
  height: 28px;
  background-color: ${({ theme }) => theme.buttonBackground};
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.buttonText};
  margin-top: 12px;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  appearance: none;
  margin-top: 8px;
  height: 26px;
  border: none;
  background-color: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 4px;
  height: 26px;
  padding-left: 4px;
`;

const SkillWrapper = styled.div``;

const CheckboxWrapper = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`;

const Checkbox = styled.input`
  position: relative;
  margin-left: 2px;
  appearance: none;
  border: 1px solid ${({ theme }) => theme.text};
  width: 14px;
  height: 14px;
  border-radius: 2px;

  &:checked {
    &::before {
      content: "";
      width: 10px;
      height: 10px;
      position: absolute;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.buttonBackground};
    }
    padding: 1px;
    border-color: ${({ theme }) => theme.buttonBackground};
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 2px;
`;

const Option = styled.option`
  color: ${({ theme }) => theme.text};
`;

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "Node.js",
  "Express",
  "MongoDB",
  "Vue",
  "TypeScript",
  "SCSS",
  "Figma",
  "Photoshop",
  "UI Design",
  "Agile",
  "Scrum",
  "Commu",
];
function AddForm() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    address: "",
    company: "",
    email: "",
    name: "",
    phone: "",
    position: "",
    skills: [],
    username: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onCheckChange = (e) => {
    const skill = e.target.value;
    setUser((prev) => {
      const newSkills = prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill];
      return {
        ...prev,
        skills: newSkills,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name: user.name,
      address: user.address,
      company: user.company,
      email: user.email,
      phone: user.phone,
      position: user.position,
      username: user.username,
      skills: user.skills,
      likes: 0,
      liked: false,
    };

    dispatch(addUser(newUser));
    setUser({
      address: "",
      company: "",
      email: "",
      name: "",
      phone: "",
      position: "",
      skills: [],
      username: "",
    });
  };

  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
        <Input
          name="name"
          labelName="이름"
          user={user}
          setUser={setUser}
          type="text"
        ></Input>
        <Input
          name="username"
          labelName="닉네임"
          user={user}
          setUser={setUser}
          type="text"
        ></Input>
        <Input
          name="phone"
          labelName="전화번호"
          user={user}
          setUser={setUser}
          type="tel"
        ></Input>
        <Input
          name="email"
          labelName="이메일"
          user={user}
          setUser={setUser}
          type="email"
        ></Input>
        <SelectWrapper>
          <label>포지션</label>
          <Select value={user.position} name="position" onChange={onChange}>
            <Option value="">포지션을 선택해주세요</Option>
            <Option value="Frontend Developer">Frontend</Option>
            <Option value="Backend Developer">Backend</Option>
            <Option value="Fullstack Developer">Fullstack</Option>
            <Option value="Product Manager">Product Manager</Option>
            <Option value="UX Designer">UX Designer</Option>
          </Select>
        </SelectWrapper>
        <SkillWrapper>
          <label>스킬</label>
          <CheckboxWrapper>
            {skills.map((skill, index) => (
              <CheckboxLabel key={skill}>
                {skill}
                <Checkbox
                  type="checkbox"
                  value={skill}
                  checked={user.skills.includes(skill)}
                  onChange={onCheckChange}
                ></Checkbox>
              </CheckboxLabel>
            ))}
          </CheckboxWrapper>
        </SkillWrapper>
        <Input
          name="address"
          labelName="주소"
          user={user}
          setUser={setUser}
          type="text"
        ></Input>
        <Input
          name="company"
          labelName="회사"
          user={user}
          setUser={setUser}
          type="text"
        ></Input>
        <Button>추가</Button>
      </Form>
    </FormWrapper>
  );
}

export default AddForm;
