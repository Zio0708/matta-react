import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save';

//css
import '../css/SavePostContainer.css';

// // date picker 관련 import 
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker
// } from '@material-ui/core/pickers';


const UseStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  })
);

const savePostContainer = () => { 
    
    // const [selectedDate, setSelectedDate] = useState(new Date());
    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    const classes = UseStyles();

    return (
        <div>
            <form>
                <table className="root-table">
                    <tr>
                        <td className="table-name">글쓰기</td>
                    </tr>
                    <tr>
                        <td className="content-table-start">
                            <table className="content-table">
                                <tr>
                                    <th scope="row">방문일</th>
                                    <td>
                                        <input type="text" id="visitedDate"></input>

                                        {/* Todo : DatePicker 로 방문일 추가*/}
                                        {/* <MuiPickersUtilsProvider uitls={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                id="visitedDate"
                                                label="방문 날짜"
                                                foramt="yyyy/MM/dd"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                            </MuiPickersUtilsProvider> */}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">내용</th>
                                    <td>
                                        <textarea id="content" placeholder="내용을 입력해주세요"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">한줄평</th>
                                    <td>
                                        <input type="text" id="comment" placeholder="한줄평을 입력해주세요"></input>
                                    </td>
                                </tr>

                                {/* Todo : 별점(맛, 분위기, 가격)*/}
                            </table>

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
                        </td>
                    </tr>
                </table>
                </form>
        </div>
    );
}
export default savePostContainer;