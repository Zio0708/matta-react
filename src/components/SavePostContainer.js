import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save';

//css
import '../css/SavePostContainer.css';

//별점
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

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

const SavePostContainer = () => { 
    
    // const [selectedDate, setSelectedDate] = useState(new Date());
    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    const classes = UseStyles();
    const [tastValue, setTastStarValue] = React.useState(2);
    const [moodValue, setMoodStarValue] = React.useState(2);
    const [priceValue, setPriceStarValue] = React.useState(2);

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
                                <tr>
                                    <th scope="row">별점</th>
                                    <td>
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
                                    </td>
                                </tr>
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
export default SavePostContainer;