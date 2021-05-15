import React ,{ useState, useContext }from 'react';

import Header from '../components/Header';
import MapSearch from './MapSearch';
import SlidePanel from '../components/SlidePanel';

import PostService from '../service/PostService';

import MapInfoContext from '../context/MapInfoContext';
import { MapInfoProvider } from '../context/MapInfoContext';

//별점
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

// datePicker
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    DatePicker,
}from '@material-ui/pickers';
import koLocale from "date-fns/locale/ko";

//텍스트 에디터
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';

import '../css/PostWritePage.css';

const PostWritePage = () => { 
    const mapInfo  = useContext( MapInfoContext );

    //제목
    const [title, setTitle] = useState("");
    const onTitleChange = (e) =>{
        setTitle(e.target.value);
    }

    //별점
    const [tasteValue, setTasteStarValue] = useState(2);
    const [moodValue, setMoodStarValue] = useState(2);
    const [priceValue, setPriceStarValue] = useState(2);

    //Editer   
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        //console.log(html);
    };  

    // DatePicker
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
        //console.log(date);
    };
    
    //TODO:주소context

    const handleSubmit = () => {
        const data = {
            resturant: mapInfo.state.resturant,
            title: title,
            star:{
            tasteValue: tasteValue,
            moodvalue: moodValue,
            priceValue: priceValue
            },
            html: draftToHtml(convertToRaw(editorState.getCurrentContent())),
            date: selectedDate,
        }
        console.log(data);
        //PostService.savePost(data);
    }

    return (
        <>
        <Header/>
        <MapInfoProvider>
        <div className="postwrite-wrapper">
            <div className="postwrite-content-wrapper">
                <div className="date-picker-wrapper">
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={koLocale}>
                    <DatePicker
                        disableFuture
                        autoOk
                        id="visitedDate"
                        format="yyyy/MM/dd"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                </div>
                <div className="slide-panel-wrapper">
                    <SlidePanel/>
                    {mapInfo.state.resturant} 레스토랑 이름
                </div>
                <div className="title-wrapper">
                    <input className="title-input" type="text" value={title} onChange={onTitleChange} placeholder="제목을 입력하세요.."  size="24"/> 
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
                            value={tasteValue}
                            size="large"
                            onChange={(event, newTasteValue) => {
                                setTasteStarValue(newTasteValue);
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
                <button type="submit" onClick={handleSubmit}>저장하기</button> 
            </div>
        </div>
        </MapInfoProvider>
        </>
    );
};
export default PostWritePage;