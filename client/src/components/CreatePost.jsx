import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {deepOrange, deepPurple} from '@mui/material/colors';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Comment from './Comment';
import IconButton from '@mui/material/IconButton';
import {v4 as uuidv4} from 'uuid';

const styles = {
    textField: {
        width: '100%',
        borderRadius: '500px',
        cursor: "pointer"
    }
}

const CreatePost = () => {
    const [typing,
        setTyping] = useState('');
    const [text,
        setText] = useState('');
    const [cmnt,
        setCmnt] = useState([]);

    const createFunct = () => {
        if (text.length > 0) {
            setCmnt(prevCmnt => {
                return [
                    ...prevCmnt,
                    (text.trim())
                ]
            })
        }

        setText('');
        setTyping('');
    }
    // console.log(cmnt);

    return (
        <div className="m-5">
            <div id="postContainer" className="p-5 container-fluid">

                <div className="row">
                    <div className="col-1">
                        <Avatar
                            sx={{
                            bgcolor: 'darkgrey',
                            width: "4.7rem",
                            height: "4.7rem"
                        }}>AS</Avatar>
                    </div>
                    <div
                        style={{
                        cursor: 'pointer'
                    }}
                        className="col-11">

                        <TextField
                            onChange={(e) => {
                            if (e.target.value) {
                                setTyping("Typing....");
                                setText(e.target.value)
                            } else {
                                setTyping('');
                                setText(e.target.value)
                            }
                        }}
                            value={text}
                            helperText={typing}
                            style={styles.textField}
                            id="filled-basic"
                            placeholder="Type Something..."
                            label="Create a new post"
                            rows={2}
                            multiline
                            variant="filled"
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="centre">
                                    <IconButton>
                                        <PostAddIcon/>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 p-1 pt-4">

                        <Button
                            onClick={() => {
                            createFunct()
                        }}
                            color="primary"
                            className="btnT"
                            style={{
                            width: '100%',
                            height: '3rem'
                        }}
                            variant="outlined"
                            endIcon={< SendIcon />}>
                            Create
                        </Button>
                    </div>
                    <div className="col-3 p-1 pt-4">
                        <Button
                            color="success"
                            className="btnT"
                            style={{
                            width: '100%',
                            height: '3rem'
                        }}
                            variant="outlined"
                            endIcon={< AddAPhotoIcon />}>
                            Photo
                        </Button>
                    </div>
                    <div className="col-3 p-1 pt-4">
                        <Button
                            color="error"
                            className="btnT"
                            style={{
                            width: '100%',
                            height: '3rem'
                        }}
                            variant="outlined"
                            endIcon={< VideoLibraryIcon />}>
                            Video
                        </Button>
                    </div>
                    <div className="col-3 p-1 pt-4">
                        <Button
                            color="secondary"
                            className="btnT"
                            style={{
                            width: '100%',
                            height: '3rem'
                        }}
                            variant="outlined"
                            endIcon={< NewspaperIcon />}>
                            News
                        </Button>
                    </div>
                </div>

                <div className="m-1 mt-5 p-1 row">

                    {cmnt.map((item, index) => (<Comment key={uuidv4() + "_" + index} text={item}/>))}
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <a target="_blank" href="https://aryansingh920.github.io/AryanSingh">
                <h5>Aryan Singh</h5>
            </a>

        </div>
    )
}

export default CreatePost;