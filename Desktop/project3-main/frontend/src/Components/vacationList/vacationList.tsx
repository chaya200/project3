import { IconButton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Vacation from "../../Models/Vacation";
import "./vacationList.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from "react-router";
import React from "react";


//import ReactPaginate from 'react-paginate';




function VacationList(): JSX.Element {
    const navigate= useNavigate();
    const[vacations,setVacation]=useState<Vacation[]>([]);
    const pageCount = Math.ceil(vacations.length / 10);
    const itemsPerPage=10;
        useEffect(()=>{
            axios.get(`http://localhost:3003/admin/vacation/all`)
            .then(response=>setVacation(response.data));
        },[]);
        const [page, setPage] = React.useState(1);
        const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
          setPage(value);}


    return (
        <div className="vacationList">
            {vacations.map((item)=>
                <div className="Box" key={item.id} style={{ height: 360, width:250 }}>
                    <p>{item.destination}</p>
                    <p>{item.price}&#36;</p>
                    <img className="image" src={item.vacation_img} style={{height:150}}/>
                    <p>{new Date(item.start_date).getDay()}/{new Date(item.start_date).getMonth()}/{new Date(item.start_date).getFullYear()} - {new Date(item.end_date).getDay()}/{new Date(item.end_date).getMonth()}/{new Date(item.end_date).getFullYear()}</p>
                    <p>{item.description}</p>
                    <div className="Buttons">
                        <IconButton aria-label="delete"  color="error" onClick={()=>{
                                axios.delete(`http://localhost:3003/admin/vacation/${item.id}`);
                                setVacation(vacations.filter(singleVacation=>singleVacation.id !== item.id));
                            }}>
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton aria-label="edit" color="success" onClick={() => {
                                navigate("/admin/addVacation/" + item.id);
                            }}>
                            <EditIcon/>
                        </IconButton>
                    </div>
                </div>
            )}

            <Pagination className="fixed-bottom"
            count={pageCount} shape="rounded" size="large"
            page={page} 
            showFirstButton showLastButton siblingCount={0}
            onChange={handleChange} />

        </div>

    );
}

export default VacationList;

