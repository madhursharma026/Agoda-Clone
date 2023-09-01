import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function SearchBar() {
    return (
        <div style={{ background: '#20274D' }}>
            <div className="container-lg px-md-5 px-3">
                <div className="row p-2">
                    <div className="col-lg-4 col-md-12 mt-lg-0 mt-3">
                        <Input id="input-with-icon-adornment" placeholder='Search Departure Place' className='px-2 w-100' style={{ fontSize: '18px', height: '45px', background: 'white', borderRadius: '5px', border: '1px solid #DEE2E6' }} disableUnderline={true} startAdornment={<InputAdornment position="start"> <SearchIcon style={{ fontSize: '35px' }} /> </InputAdornment>} />
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-0 mt-3">
                        <div className="row mx-1">
                            <div className="col-6 p-0 m-0">
                                <Input multiline id="input-with-icon-adornment" placeholder='28 Aug 2023 Wednesday' className='px-2 w-100' style={{ fontSize: '16px', height: '45px', background: 'white', borderRadius: '0px', border: '1px solid #DEE2E6', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }} disableUnderline={true} startAdornment={<InputAdornment position="start"> <CalendarMonthIcon style={{ fontSize: '30px' }} /> </InputAdornment>} />
                            </div>
                            <div className="col-6 p-0 m-0">
                                <Input multiline id="input-with-icon-adornment" placeholder='30 Aug 2023 Wednesday' className='px-2 w-100' style={{ fontSize: '16px', height: '45px', background: 'white', borderRadius: '0px', border: '1px solid #DEE2E6', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }} disableUnderline={true} startAdornment={<InputAdornment position="start"> <CalendarMonthIcon style={{ fontSize: '30px' }} /> </InputAdornment>} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mt-lg-0 mt-3">
                        <Input multiline id="input-with-icon-adornment" placeholder='2 Adults 1 room' defaultValue={'2 Adults \n1 room'} className='px-2 w-100' style={{ fontSize: '16px', height: '45px', background: 'white', borderRadius: '5px', border: '1px solid #DEE2E6' }} disableUnderline={true} startAdornment={<InputAdornment position="start"> <PeopleAltIcon style={{ fontSize: '30px' }} /> </InputAdornment>} />
                    </div>
                    <div className="col-lg-2 mt-lg-0 mt-3">
                        <button type="button" class="btn btn-primary w-100" style={{ height: '45px' }}><b>SEARCH</b></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
