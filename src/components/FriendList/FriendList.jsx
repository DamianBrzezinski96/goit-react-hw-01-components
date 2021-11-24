import React from "react";
import styles from "./FriendList.module.css"
import FriendListItem from "./FriendListItem";


const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(({ id, name, avatar, isOnline }) => (
                <FriendListItem
                    key={id}
                    name={name}
                    isOnline={isOnline}
                    avatar={avatar}
                />
            ))}
        </ul>
    )
};

export default FriendList;
