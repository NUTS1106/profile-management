import TeamCard from "../components/TeamCard";
import { useSelector } from "react-redux";
import TeamModal from "../components/TeamModal";
import AddForm from "../components/AddForm";
import { useContext, useState } from "react";
import { ThemeContext } from "../hooks/useDarkMode";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  height: 100dvh;
  width: 100vw;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 12px;
  padding: 12px;
`;

const LI = styled.li`
  list-style: none;
`;

const ULWrapper = styled.div``;

const Button = styled.button`
  width: 160px;
  height: 24px;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.buttonBackground};
  border-radius: 6px;
  color: black;
`;

const ButtonWrapper = styled.div`
  text-align: right;
  padding-bottom: 20px;
  padding-right: 20px;
`;

function Home() {
  const users = useSelector((state) => state.users);
  const { toggleIsDark, isDark } = useContext(ThemeContext);
  return (
    <HomeWrapper>
      <AddForm></AddForm>
      <ContentWrapper>
        <ULWrapper>
          <UL>
            {users.userlist.map((user, index) => (
              <LI key={user.id}>
                <TeamCard user={user} />
              </LI>
            ))}
          </UL>
          {users.modaled != null ? (
            <TeamModal index={users.modaled}></TeamModal>
          ) : null}
        </ULWrapper>
        <ButtonWrapper>
          <Button onClick={toggleIsDark}>
            {isDark ? "라이트 모드" : "다크 모드"}
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
    </HomeWrapper>
  );
}

export default Home;
