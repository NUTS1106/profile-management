import TeamCard from "../components/TeamCard";
import { useSelector } from "react-redux";
import TeamModal from "../components/TeamModal";
import AddForm from "../components/AddForm";
import { useContext, useState } from "react";
import { ThemeContext } from "../hooks/useDarkMode";
import styled from "styled-components";

const HomeWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
`;

function Home() {
  useState();
  const users = useSelector((state) => state.users);
  const { isDark, setIsDark } = useContext(ThemeContext);
  const onClick = () => {
    localStorage.setItem("isDark", !isDark);
    setIsDark((prev) => !prev);
  };
  return (
    <HomeWrapper>
      <button onClick={onClick}>toggle</button>
      <ul>
        {users.userlist.map((user, index) => (
          <li key={user.id}>
            <TeamCard user={user} />
          </li>
        ))}
      </ul>
      {users.modaled != null ? (
        <TeamModal index={users.modaled}></TeamModal>
      ) : null}
      <AddForm></AddForm>
    </HomeWrapper>
  );
}

export default Home;
