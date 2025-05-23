//redux를 이용해서 팀원 프로필 관리하기위해 createSlice를 이용해서 slice 만들기
import { createSlice } from '@reduxjs/toolkit';


export const userSlice=createSlice({
    name:'users',
    initialState:{
        userlist:[],
        modaled:null
    },
    reducers:{
        setUsers:(state, action)=>{
            state.userlist=action.payload;
        },
        setLiked:(state, action)=>{
            const targetId=state.userlist.findIndex((u) => u.id === action.payload)
            state.userlist[targetId].liked=!state.userlist[targetId].liked
            state.userlist[targetId].liked?state.userlist[targetId].likes++:state.userlist[targetId].likes--
        },
        onModal:(state, action)=>{
            state.modaled=state.userlist.findIndex((u) => u.id === action.payload)
        },
        offModal:(state, action)=>{
            state.modaled=null
        },
        addUser:(state, action)=>{
            state.userlist.push(action.payload)
        }
    }
})

export const {setUsers, setLiked, onModal, offModal, addUser}=userSlice.actions
export default userSlice.reducer;