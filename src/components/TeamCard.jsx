//팀 카드 컴포넌트
//user 객체를 prop으로 받아서 렌더링
import { useDispatch, useSelector } from 'react-redux'
import './TeamCard.css'
import { setLiked, onModal } from '../store/redux/userSlice'


function TeamCard({user}){
    const dispatch=useDispatch()

    function onModalClick(){
        dispatch(onModal(user.id))
    }

    function onClick(e){
        e.stopPropagation();
        dispatch(setLiked(user.id))
    }

    return (
        <div onClick={onModalClick}>
            <h3>이름 : {user.name}</h3>
            <span>닉네임 : {user.username}</span>
            <span>전화번호 : {user.phone}</span>
            <button onClick={onClick}>좋아요</button>
            <span>{user.likes}</span>
        </div>
    )
}

export default TeamCard