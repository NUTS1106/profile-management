import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { offModal } from "../store/redux/userSlice";

const ModalWrapper = styled.div`
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
  background-color: white;
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
        <h3>이름 : {users.name}</h3>
        <span>닉네임 : {users.username}</span>
        <span>전화번호 : {users.phone}</span>
        <span>email : {users.email}</span>
        <span>포지션 : {users.position}</span>
        <span>
          스킬 :{" "}
          {users.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </span>
        <span>주소 : {users.address}</span>
        <span>회사 : {users.company}</span>
      </ModalContent>
    </ModalWrapper>
  );
}

export default TeamModal;
