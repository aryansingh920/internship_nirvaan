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

const Inner = (props) => {
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
    const innerComments = props.content
    return (
        <div className="p-4 ">
            <div
                className="p-1 row"
                style={{
                textAlign: 'left'
            }}>

                <ol class="col p-3 me-2 p-5 pt-1">
                    {innerComments.map((i, j) => (
                        <div key={j}>
                            <li>
                                <TextField
                                multiline
                                rows={2}
                                    disabled
                                    variant="standard"
                                    style={{
                                    width: '100%',
                                    color: 'rgb(50, 50, 50)',
                                    opacity: 1,
                                    "-webkit-text-fill-color": "rgba(0, 0, 0, 0.38)"
                                }}
                                    value={i}
                                    id=""/>

                            </li>

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

                            </div>
                        </div>

                    ))}

                </ol>
            </div>
        </div>

    )
}

export default Inner