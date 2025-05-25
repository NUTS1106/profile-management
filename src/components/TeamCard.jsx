import { useDispatch } from "react-redux";
import { setLiked, onModal } from "../store/redux/userSlice";
import styled from "styled-components";
import { AiFillLike } from "react-icons/ai";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding: 28px 28px 16px 28px;
`;

const Name = styled.h3`
  font-size: 24px;
  line-height: 0.6;
`;

const NickName = styled.span`
  font-size: 18x;
  margin-bottom: 8px;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 8px;
`;

const InfoStyle = styled.span`
  font-size: 16px;
`;

const LikedWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonIcon = styled(AiFillLike)`
  color: ${({ theme, liked }) =>
    liked == "true" ? "red" : theme.mode === "light" ? "black" : "white"};
`;

const LikeButton = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;
  border: none;
  margin-right: 2px;
`;

function TeamCard({ user }) {
  const dispatch = useDispatch();

  function onModalClick() {
    dispatch(onModal(user.id));
  }

  function onClick(e) {
    e.stopPropagation();
    dispatch(setLiked(user.id));
  }

  return (
    <Card onClick={onModalClick}>
      <Name>{user.name}</Name>
      <NickName>{user.username}</NickName>
      <Infos>
        <InfoStyle>전화번호 : {user.phone}</InfoStyle>
        <InfoStyle>회사 : {user.company}</InfoStyle>
      </Infos>
      <LikedWrapper>
        <LikeButton onClick={onClick}>
          <ButtonIcon liked={user.liked ? "true" : "false"} size="20px" />
        </LikeButton>
        <span>{user.likes}</span>
      </LikedWrapper>
    </Card>
  );
}

export default TeamCard;
