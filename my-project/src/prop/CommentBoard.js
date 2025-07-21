import React, { useState } from "react";


const Message = ({content,author}) => {
    return(
        <>
        <div>內容:{content}</div>
        <div>作者:{author}</div>
        </>
    )
}

const CommentBoard = () => {
    const [Comment,SetComment] = useState([
    { id:1, content:"test1", author:"user1" }
    ])

    const Addcomment = (NewComment) => {
        SetComment([...Comment,{id:Comment.length +1 , ...NewComment}])
    }

    return(
        <>
        <div>
            <h2>留言區</h2>
            <Commentform  onAddcommet={Addcomment}/>
            {Comment.map((msg)=>(
                <Message key={msg.id} content={msg.content} author={msg.author}/>
            ))}
        </div>
        </>
    );
}

const Commentform = ({onAddcommet}) => {
    const [Message,SetMessage] = useState("")
    const [User,SetUser] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!Message||!User){
            alert("請輸入內容及作者")
            return;
        }    
        
        onAddcommet({content:Message,author:User});  // 重要!! 前面是要傳的function中的名稱，後面是名稱要對應的資料
        SetMessage("")
        SetUser("")
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>內容:</label>
                    <input 
                    type="text"
                    value={Message}
                    onChange={(e)=> SetMessage(e.target.value)}
                    placeholder="輸入文本內容">
                    </input>

                    <label>作者:</label>
                    <input 
                    type="text"
                    value={User}
                    onChange={(e)=> SetUser(e.target.value)}
                    placeholder="輸入文本內容">
                    </input>

                    <button type="submit">
                        新增留言
                    </button>

                </div>
            </form>
            </>
        )
    }


export default CommentBoard