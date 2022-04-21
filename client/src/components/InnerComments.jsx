import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import Inner from './Inner'
const InnerComments = (props) => {
    const [innerComments,
        setInnerComments] = useState([]);

    const [texts,
        setTexts] = useState("");

    const addComment = () => {
        if (texts.length > 0) {
            setInnerComments(prevCmnt => {
                return [
                    ...prevCmnt,
                    (texts.trim())
                ]
            })
        }
        setTexts('')
        // console.log(texts)
    }
    return (
        <div>
            <div className="row">
                <Inner content={innerComments}/>
            </div>

            <div className="row">
                <TextField
                    onChange={(e) => {
                    setTexts(e.target.value)
                }}
                    value={texts}
                    id=""
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => {
                                addComment()
                            }}>
                                <SendIcon/>
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                    style={{
                    marginTop: "1%",
                    marginLeft: "5%",
                    width: "80%"
                }}
                    label="Reply"
                    className={props.displayReply}
                    variant="standard"/>

            </div>
        </div>
    )
}

export default InnerComments