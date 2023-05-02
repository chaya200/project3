import "./UserVacationList.css";
import { IconButton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Vacation from "../../Models/Vacation";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import Pagination from '@mui/material/Pagination';
import { useNavigate } from "react-router";
import React from "react";
import { Pagination } from "@mui/material";
import { setSourceMapRange } from "typescript";
import User from "../../Models/User";



function UserVacationList(): JSX.Element {
    const navigate= useNavigate();
    const[vacations,setVacations]=useState<Vacation[]>([]);
    // const[myVacationList,setMyVacations]=useState<Vacation[]>([]);
    const[currentUser,setUser]=useState<User>();
    // const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(10);

    const pageCount = Math.ceil(vacations.length / 10);
    // const [page, setPage] = React.useState(1);

    const [active,setActive]=useState(false)
    const followedList=[21,30,8];//מערך עזר לרשימת נעקבים
    // useEffect(()=>{
    //     localStorage.setItem('vacations', JSON.stringify(vacations));
    // },[vacations]);

    //take the id of the current user from the local storage
    //const itemsPerPage=10;
        useEffect(()=>{    
            localStorage.setItem('vacations', JSON.stringify(vacations));
  
            // setLoading(true);
            let storageVacation = JSON.parse(localStorage.vacations);
            // console.log(storageVacation.length);
            if(storageVacation.length > 0){
             setVacations(storageVacation);
            }else{
                axios.get(`http://localhost:3003/admin/vacation/all`)
                .then(response=>setVacations(response.data));
                console.log("123");
                console.log(vacations);

            }
            // get current user
            const currentUserID= (JSON.parse(localStorage.getItem('user')||""));
            if(currentUserID){
                axios.get(`http://localhost:3003/user/single/${currentUserID}`)
                .then(response=>setUser(response.data[0]));
                console.log(currentUser);
                // followedList.push(currentUser?.followed_list);
            }


            // setLoading(false);
        },[currentPage, currentUser, vacations]);

        // const followedList= JSON.parse(currentUser.followed_list);

        const sortedVacations=vacations.sort((objA,objB)=>new Date(objB.start_date).getTime()-new Date(objA.start_date).getTime());
        // Get currCards
        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        const currentCards = sortedVacations.slice(indexOfFirstCard, indexOfLastCard);

        // Change page
        const paginate = (pageNumber:any) => setCurrentPage(pageNumber);
        // console.log(cardsPerPage, movieCard.length, paginate);

        const handleChange = (event:any, value:any) => {
            setCurrentPage(value);
        };
        // const v=[];
        // for(let i=0;i<currentUser.followed_list.length;i++){
        //     if(i%2!=0){
        //         v.push(currentUser[i]);
        //     }
        // }
        const setIcons=(currentVac:Vacation,isActive=false)=>{
            // let v=document.createElement("div");
            followedList.map((list)=>{
                if(currentVac.id===list){
                isActive=true;
                return isActive;
                }
            })
            // return isActive;
            if(isActive){
                return(<IconButton className="btn" aria-label="favorite"  color="error" size="large" onClick={()=>{
                    //ברגע הסרת הלייק נמחק את המזהה של החופשה ממערך החופשות האהובות
                    followedList.filter((item)=>{return item!==currentVac.id});
                    //remove one follow from the amount of followers
                    currentVac.amountOfFollowers-=1;
                    axios.put('http://localhost:3003/admin/vacation/update',currentVac);
                    setIcons(currentVac, !isActive);
                }}>
                <FavoriteIcon/>
                </IconButton>)
            }else{
                return(<IconButton className="btn" aria-label="favorite"  color="error" size="large" onClick={()=>{
                    //ברגע הוספת הלייק נוסיף את המזהה של החופשה ממערך החופשות האהובות
                    followedList.push(currentVac.id);
                    //add one follow from the amount of followers
                    currentVac.amountOfFollowers+=1;
                    axios.put('http://localhost:3003/admin/vacation/update',currentVac);
                    setIcons(currentVac, !isActive);
                }}>
                <FavoriteIcon/>
                </IconButton>)
            }
        }
        // const getIcons=(active:boolean, item:Vacation)=>{
        //     const icon="";
        //     followedList.map((f)=>{
        //         if(item.id===f){
        //             setActive(!active);
        //             setIcons(active,item)
                    
        //     })
        // }
        let temp=false;

    return (
        <div className="UserVacationList">
            <h1>hello {followedList}</h1>
            <div className="displayCard">
                <div className="card">
                    {currentCards.map((item)=>
                            //for like button
                            // const [active,setActive]=useState(false)
                        <div className="card-container" key={item.id} style={{ height: 360, width:250 }}>
                            <p>{item.destination}</p>
                            <p>{item.price}&#36;</p>
                            <img className="image" src={item.vacation_img} style={{height:150}}/>
                            <p>{new Date(item.start_date).toISOString().slice(8,10)}/{new Date(item.start_date).toISOString().slice(5,7)}/{new Date(item.start_date).toISOString().slice(0,4)} - {new Date(item.end_date).toISOString().slice(8,10)}/{new Date(item.end_date).toISOString().slice(5,7)}/{new Date(item.end_date).toISOString().slice(0,4)}</p>
                            <p>{item.description}</p>
                            <div className="Buttons">
                                {/* {(()=>{
                                    if(setIcons(item)){
                                    return(<IconButton className="btn" aria-label="favorite"  color="error" size="large" onClick={()=>{
                                                //ברגע הסרת הלייק נמחק את המזהה של החופשה ממערך החופשות האהובות
                                                followedList.filter((item)=>{return item!==item.id});
                                                //remove one follow from the amount of followers
                                                item.amountOfFollowers-=1;
                                                axios.put('http://localhost:3003/admin/vacation/update',item);
                                                setIcons(item,temp);
                                            }}>
                                            <FavoriteIcon/>
                                            </IconButton>)
                                    }else{
                                        return(<IconButton className="btn" aria-label="favorite"  color="error" size="large" onClick={()=>{
                                                    //ברגע הוספת הלייק נוסיף את המזהה של החופשה ממערך החופשות האהובות
                                                    followedList.push(currentVac.id);
                                                    //add one follow from the amount of followers
                                                    currentVac.amountOfFollowers+=1;
                                                    axios.put('http://localhost:3003/admin/vacation/update',currentVac);
                                                    setIcons(currentVac, !isActive);
                                                }}>
                                            <FavoriteIcon/>
                                        </IconButton>)
                                    }})()} */}
                                {setIcons(item)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Pagination count={pageCount} page={currentPage} onChange={handleChange} />


        </div>

    );
}

export default UserVacationList;
