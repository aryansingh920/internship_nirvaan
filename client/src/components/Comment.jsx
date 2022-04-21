import React from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Zoom from '@mui/material/Zoom';
import InnerComments from './InnerComments';

const Comment = (props) => {
    const [thumbsUp,
        setterThumbsUp] = React.useState(true);
    const [thumbsDown,
        setterThumbsDown] = React.useState(true);

    const [displayReply,
        setDisplayReply] = React.useState("d-none");

    const setThumbsUp = () => {
        setterThumbsUp(!thumbsUp);
    }
    const setThumbsDown = () => {
        setterThumbsDown(!thumbsDown);
    }
    const checkFunct = () => {
        if (!thumbsUp && !thumbsDown) {
            setterThumbsUp(false)
            setterThumbsDown(true)
        }
        if (thumbsUp && thumbsDown) {
            setterThumbsUp(true)
            setterThumbsDown(false)
        }
    }
    // checkFunct() console.log(thumbsUp, thumbsDown);
    return (
        <div id="containerComment" className="container-fluid m-2 p-2">

            <div className="row">
                <Box
                    className="m-1"
                    sx={{
                    display: 'flex',
                    alignItems: 'flex-end'
                }}>
                    <AccountCircle
                        sx={{
                        color: 'action.active',
                        mr: 1,
                        my: 0.5
                    }}/>
                    <TextField
                        multiline
                        rows={((props.text).length) / 120}
                        style={{
                        width: '100%',
                        color: "black"
                    }}
                        value={props.text}
                        id="input-with-sx"
                        label="Aryan"
                        variant="standard"/>
                </Box>
            </div>
            <div className="row ms-4">
                <div
                    style={{
                    cursor: "pointer"
                }}
                    onClick={() => {
                    setThumbsUp()
                }}
                    className="col-1 ">
                    <IconButton>
                        {thumbsUp
                            ? <ThumbUpOffAltIcon/>
                            : <ThumbUpIcon/>}
                    </IconButton>
                </div>
                <div
                    style={{
                    cursor: "pointer"
                }}
                    onClick={() => {
                    setThumbsDown()
                }}
                    className="col-1 ">
                    <IconButton>
                        {thumbsDown
                            ? <ThumbDownOffAltIcon/>
                            : <ThumbDownIcon/>}
                    </IconButton>
                </div>
                <div
                    disabled
                    id="replyIcon"
                    onClick={() => {
                    if (displayReply === 'd-none') {
                        setDisplayReply("")
                    } else if (displayReply === '') {
                        setDisplayReply("d-none")
                    }
                }}
                    className="col-1 m-1">
                    Reply</div>

            </div>

            <InnerComments displayReply={displayReply}/>

        </div>
    )
}

export default Comment