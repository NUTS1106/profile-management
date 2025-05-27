import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { offModal } from "../store/redux/userSlice";

const ModalWrapper = styled.div`
  animation: fadeIn 0.1s ease-in forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled.div`
  width: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.formBackground};
  border: 2px solid
    ${({ theme }) =>
      theme.mode == "light" ? theme.buttonBackground : theme.border};
`;

const Name = styled.h3`
  font-size: 32px;
  line-height: 18px;
`;

const NickName = styled.span`
  font-size: 18px;
  margin-bottom: 12px;
`;

const Infos = styled.span`
  font-size: 20px;
  margin-bottom: 1px;
`;

const Skills = styled.div`
  font-size: 20px;
  margin-bottom: 1px;
`;

const LI = styled.li`
  list-style: none;
`;

const UL = styled.ul`
  font-size: 18px;
`;

function TeamModal({ index }) {
  const users = useSelector((state) => state.users.userlist[index]);
  const dispatch = useDispatch();

  function offModalClick() {
    dispatch(offModal());
  }

  return (
    <ModalWrapper onClick={offModalClick}>
      <ModalContent>
        <Name>{users.name}</Name>
        <NickName>{users.username}</NickName>
        <Infos>전화번호 : {users.phone}</Infos>
        <Infos>email : {users.email}</Infos>
        <Infos>포지션 : {users.position}</Infos>
        <Skills>
          <Infos>스킬</Infos>
          <UL>
            {users.skills.map((skill, index) => (
              <LI key={index}>{skill}</LI>
            ))}
          </UL>
        </Skills>
        <Infos>주소 : {users.address}</Infos>
        <Infos>회사 : {users.company}</Infos>
      </ModalContent>
    </ModalWrapper>
  );
}

export default TeamModal;
