import React from "react"
import { Spinner,LockBody,Picture, ReleaseBody } from "./Styles/Loading";
export default function Loading({src,...restProps})
{
    return (
        <Spinner>
            <LockBody/>
            <Picture src={`images/users/${src}.png`}/>
        </Spinner>
    );
}
Loading.ReleaseBody=function LoadingReleaseBody()
{
    return <ReleaseBody/>
}
Loading.ReleaseBody=function LoadingReleaseBody()
{
    return <ReleaseBody/>
}
