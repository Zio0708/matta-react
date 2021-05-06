import React ,{ useState }from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import '../css/PostWritePage.css';
import MapSearch from './MapSearch';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const PostWritePage = () => { 
    //별점
    const [tastValue, setTastStarValue] = useState(2);
    const [moodValue, setMoodStarValue] = useState(2);
    const [priceValue, setPriceStarValue] = useState(2);

    //Editer   
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    return (
        <>
        <Header/>
        <div className="postwrite-wrapper">
            <div className="postwrite-content-wrapper">
                <div className="title-wrapper">
                    <input className="title-input" type="text" placeholder="제목을 입력하세요.."  size="24"/> 
                </div>
                <div className="title-line"></div>
                
                <div className="content-wrapper">
                <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                placeholder="맛집에 관한 내용을 적어주세요"
                onEditorStateChange={onEditorStateChange}
                />
                </div>
                <div className="title-line"></div>
                <div className="star-rate-wrapper">
                    <Box component="fieldset" mb={1} borderColor="transparent">
                        <Typography component="legend">맛</Typography>
                        <Rating 
                            name="tastStarRating"
                            defaultValue={3}
                            value={tastValue}
                            size="large"
                            onChange={(event, newTastValue) => {
                                setTastStarValue(newTastValue);
                            }
                        }/>
                    </Box>
                    <Box component="fieldset" mb={1} borderColor="transparent">
                        <Typography component="legend">분위기</Typography>
                        <Rating 
                            name="moodStarRating"
                            defaultValue={3}
                            value={moodValue}
                            size="large"
                            onChange={(event, newMoodValue) => {
                                setMoodStarValue(newMoodValue);
                            }
                        }/>
                    </Box>
                    <Box component="fieldset" mb={1} borderColor="transparent">
                        <Typography component="legend">가격</Typography>
                        <Rating 
                            name="priceStarRating"
                            defaultValue={3}
                            value={priceValue}
                            size="large"
                            onChange={(event, newPriceValue) => {
                                setPriceStarValue(newPriceValue);
                            }
                        }/>
                    </Box>
                </div>
            </div>
            <MapSearch searchPlace={"이태원 맛집"}/>
        </div>

        </>
    );
};
export default PostWritePage;