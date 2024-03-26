import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css"

const FriendList = ({ friends }) => {
    return (
        <ul className={s.list}>
            {friends.map((user) => {
                return (<li key={user.id}> <FriendListItem user={user} /> </li>)
            })}
</ul>)
};


export default FriendList;