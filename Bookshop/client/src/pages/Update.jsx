import axios from "axios";
import React from "react";
import {useState} from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";

const Update = () => {
    const [book, setBook] = useState({
        title: "",
        desc:"",
        price: null,
        cover: "",
    });
    const [error,setError] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    //update할때 url뒤에 나오는 path를 쪼개서 보여준다. 그래서 bookID만 남음
    const bookId = location.pathname.split("/")[2];
    // console.log(location.pathname.split("/")[2])

    const handleChange = (e) => {
        setBook(prev=>({...prev, [e.target.name] : e.target.value}))
    };
    console.log(book);

    const handleClick = async e => {
        e.preventDefault()
        try{
            //여기에 들어가는 id는 router dom의 locationhook을 이용한다. 
            await axios.put(`http://localhost:8800/books/${bookId}`, book);
            navigate("/");
        }catch(err){
            console.log(err);
            setError(true);
        }
    }

    return (
        <div className="form">
            <h1>Update your Book</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title"/>
            <input type="text" placeholder="desc" onChange={handleChange} name="desc"/>
            <input type="number" placeholder="price" onChange={handleChange} name="price"/>
            <input type="text" placeholder="cover" onChange={handleChange} name="cover"/>
            <button className="formButton" onClick={handleClick}>수정</button>
            {error && "앗 오류!"}
            <Link to="/">책 목록보기</Link>
        </div>
    );
}

export default Update;