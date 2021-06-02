import React, { useState } from 'react';

import Header from '../components/Header';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save';

// css
import '../css/SimpleReview.css';

// 별점
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

const UseStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  })
);

const SimpleReview = () => { 

    const classes = UseStyles();

    // starRating
    const [avgValue, setAvgStarValue] = useState(2);

    // DatePicker
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    // comment 초기화
    const [comment, setComment] = useState('')
    const [isActive, setActive] = useState(false);

    const checkCommentLen = (e) => {

        const currentValue = e.target.value;

        if(currentValue.length > 10){
            if(isActive == false){
                setActive(true);
            }
        }else{
            if(isActive == true){
                setActive(false);
            }
            setComment(currentValue);
        }  
    }

    

    return (
        <>
        <Header/>
        <div className="simple-review-wrapper">
            <div className="simple-review-content-wrapper">
            <form>
                <div className="simple-review-table-wrapper">
                    <table className="simple-review-table">
                    <tr>
                        <th scope="row">방문일</th>
                        <td>
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
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">한줄평</th>
                        <td>
                            <input 
                                type="text"
                                id="comment"
                                placeholder="한줄평을 입력해주세요. (100자 이내)"
                                onChange={checkCommentLen}
                                value={comment}
                            >
                            </input>
                            <span className={isActive ? "maxLenWarning-active" : "maxLenWarning-inactive"}>한줄평은 100자를 초과할 수 없습니다.</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">별점</th>
                        <td>
                            <Box component="fieldset" mb={1} borderColor="transparent">
                                <Rating 
                                    className="avgStarRating"
                                    name="avgStarRating"
                                    defaultValue={3}
                                    value={avgValue}
                                    size="large"
                                    onChange={(event, newAvgValue) => {
                                        setAvgStarValue(newAvgValue);
                                    }
                                }/>
                            </Box>
                        </td>
                    </tr>
                    </table>
                </div>    
                <center>
                <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                >
                    Save
                </Button>
                </center>
                
            </form>
            </div>
        </div>
        </>
    );
}
export default SimpleReview;