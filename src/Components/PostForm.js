// @flow
import React,{useState} from 'react';
import {useHistory} from "react-router-dom";

const PostForm = ({createPost}) => {
    const history = useHistory();

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("")

    function createNewPost(e) {
        e.preventDefault();
         const obj = {
             title,description
         }
         createPost(obj)
        history.push('/home')
    }

    return (

        <div className="col-md-4 offset-4">
            <h1>Create New Post</h1>
            <form onSubmit={createNewPost}>
                <div className="form-group">
                    <label>
                        Post Title
                    </label>
                    <input type="text" name="title" placeholder="Title" className="form-control" required onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>
                        Details
                    </label>
                    <textarea type="text" name="description" placeholder="Description" required onChange={(e)=>setDescription(e.target.value)}
                              className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>

            </form>
        </div>
    );
};
export default PostForm;