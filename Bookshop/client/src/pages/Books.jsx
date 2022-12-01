import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try{
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data);
            }catch(err){
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    return (
        <div>
            <h1>정화네 서점</h1>
            <div className="books">
                {books.map(book=>(
                    //map사용시 key쓰라고 warning뜨는데 그럼 해주면 된다.
                    <div className="book" key={book.id}>
                        {book.cover && <img src={book.cover} alt="" />}
                        <h2>{book.title}</h2>
                        <p>{book.desc}</p>
                        <span>{book.price}</span>
                    </div>
                ))}
            </div>
            <button>
                <Link to="/add">Add new book</Link>
            </button>
        </div>
    )
        

};

export default Books;