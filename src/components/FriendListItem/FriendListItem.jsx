import s from "./FriendListItem.module.css"

const FriendListItem = ({ user: { avatar, name, isOnline } }) => {

    return (
        <div className={s.box}>
        <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            {isOnline ? <p className={s.online}>Online</p> : <p className={s.offline}>Offline</p>}
        </div>
    )
 }

export default FriendListItem