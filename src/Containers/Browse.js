import {React,useState,useContext,useEffect} from 'react'
import Fuse from "fuse.js"
import { FirebaseContext } from '../Context/firebase';
import SelectProfileContainer from './Profiles';
import Loading from '../Components/Loading';
import Header from '../Components/Header';
import * as ROUTES from "../Constants/Routes"
import Cards from '../Components/Cards';
import FooterContainer from './Footer';
import Player from '../Components/Player';
function BrowseContainer({slides}) {
    const [category, setCategory] = useState("series")
    const [profile,setProfile]=useState({})
    const [loading,setLoading]=useState(true);
    const {firebase}=useContext(FirebaseContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [slideRows,setSlideRows]=useState([]);
    const user=firebase.auth().currentUser ||{};
    useEffect(()=>{
        console.log(profile);
        setTimeout(()=>{ 
            setLoading(false);
        },3000);
    },[profile.displayName]);
    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides,category]);
    useEffect(()=>{
        const fuse=new Fuse(slideRows,{keys:["data.description","data.title","data.genre"]});
        const result=fuse.search(searchTerm).map(({item})=>item);
        if (slideRows.length>0 && searchTerm.length>3 && result.length>0)
        {
            setSlideRows(result);
        } 
        else
        {
            setSlideRows(slides[category]);
        }
    },[searchTerm])
    return profile.displayName? (
            <>
            {loading? <Loading src={user.photoURL}/> : <Loading.ReleaseBody/>}
            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src="images/misc/logo.png" alt="Netflix" />
                        <Header.TextLink active={category==="series"?"true":"false"} onClick={()=>setCategory("series")}>Series</Header.TextLink>
                        <Header.TextLink active={category==="flims"?"true":"false"} onClick={()=>setCategory("films")}>Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group> 
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                        City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                        futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                            <Player>
                                <Player.Button/>
                                <Player.Video src="/videos/bunny.mp4"/>
                            </Player>
                </Header.Feature>
                </Header>
                <Cards.Group>
                {slideRows.map((slideItem) => (
                    <Cards key={`${category}-${slideItem.title.toLowerCase()}`}>
                    <Cards.Title>{slideItem.title}</Cards.Title>
                    <Cards.Entities>
                        {slideItem.data.map((item) => (
                        <Cards.Item key={item.docId} item={item}>
                            <Cards.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                            <Cards.Meta>
                                <Cards.SubTitle>{item.title}</Cards.SubTitle>
                                <Cards.Text>{item.description}</Cards.Text>
                            </Cards.Meta>
                        </Cards.Item>
                    ))}
                    </Cards.Entities>
                    <Cards.Feature category={category}>
                            <Player>
                                <Player.Button/>
                                <Player.Video src="/videos/bunny.mp4"/>
                            </Player>
                    </Cards.Feature>
                    </Cards>    
                ))}
                </Cards.Group>
                <FooterContainer/>
            </>
            ):(<SelectProfileContainer user={user} setProfile={setProfile}/>)
}   

export default BrowseContainer
