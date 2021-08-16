import React from "react"
import * as ROUTES from "../Constants/Routes";
import Header from "../Components/Header";
import Profile from "../Components/Profiles";
export default function SelectProfileContainer({user,setProfile})
{   
    return (
        <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src="images/misc/logo.png" alt="Knight"/>
            </Header.Frame>
        </Header>
        <Profile>
            <Profile.Title>Who's Watching?</Profile.Title>
            <Profile.User onClick={()=>setProfile({
                displayName:user.displayName,
                photoURL:user.photoURL,
            })}>
                <Profile.Picture src={user.photoURL}/>
                <Profile.Name>{user.displayName}</Profile.Name>
            </Profile.User>
        </Profile>
        </>
    )
}