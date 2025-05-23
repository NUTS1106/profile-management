import { useContext, useState } from "react";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { addUser } from "../store/redux/userSlice";
import { ThemeContext } from "../hooks/useDarkMode";

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
  "Communication",
];
function AddForm() {
  const { isDark } = useContext(ThemeContext);
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
    <form onSubmit={onSubmit}>
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
      <label>
        포지션
        <select value={user.position} name="position" onChange={onChange}>
          <option value="">선택하세요</option>
          <option value="Frontend Developer">Frontend</option>
          <option value="Backend Developer">Backend</option>
          <option value="Fullstack Developer">Fullstack</option>
          <option value="UX Designer">UX Designer</option>
          <option value="Product Manager">Product Manager</option>
        </select>
      </label>
      <label>
        스킬
        {skills.map((skill) => (
          <label key={skill}>
            {skill}
            <input
              type="checkbox"
              value={skill}
              checked={user.skills.includes(skill)}
              onChange={onCheckChange}
            ></input>
          </label>
        ))}
      </label>
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
      <button>제출</button>

      <h1>{isDark ? "true" : "false"}</h1>
    </form>
  );
}

export default AddForm;
