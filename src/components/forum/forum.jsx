import { useEffect, useState } from "react";
import getComments from "../../services/getComments";
import setComment from "../../services/setComment";
import Button from "../button/button";
import "./forum.scss";

export default function Forum() {
    window.scrollTo(0, 0);

    const newCommentT = {
        name: "",
        comment: "",
    };

    const [comments, setcomments] = useState(null);
    const [newComment, setnewComment] = useState(newCommentT);

    useEffect(() => {
        getComments()
            .then((data) => {
                setcomments(data);
                console.log(data);
            })
            .catch((error) => {
                console.log("2: ", error);
            });
    }, []);

    function handlerSend(event) {
        event.preventDefault();

        if (!newComment.name.trim() || !newComment.comment.trim())
            return

        setComment({ ...newComment, id: comments?.length ? comments?.length : 0 })
            .then((data) => {
                console.log("1: ", data);
                setcomments([...comments, newComment]);
                setnewComment(newCommentT);
            })
            .catch((error) => {
                console.log("2: ", error);
            });
    }

    return (
        <div className="comments">
            <div className="content">
                <h1>Комментарии</h1>

                <div className="comments_blocks">
                    {
                        comments && comments.length ? (
                            comments.map((comment) =>
                                <>
                                    <div className="comments_blocks_item">
                                        <h4>{comment.name} <span>{comment.date}</span></h4>
                                        <blockquote>{comment.comment}</blockquote>
                                    </div>
                                </>
                            )
                        ) : ''
                    }

                    <form className="comments_new" onSubmit={handlerSend}>
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            value={newComment.name}
                            onChange={({ target: { value } }) => setnewComment({ ...newComment, name: value })
                            }
                        />
                        <textarea
                            placeholder="Ваш комментарий"
                            value={newComment.comment}
                            onChange={({ target: { value } }) => setnewComment({ ...newComment, comment: value })
                            }
                        ></textarea>

                        <Button style='primary' txt='Отправить' />
                    </form>
                </div>
            </div>
        </div>
    );
}
