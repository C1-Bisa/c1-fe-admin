'use client';

import { useState } from 'react';
import CalendarPicker from '@/components/CalendarPicker';
import CalendarRangePicker from '@/components/CalendarRangePicker';
import Input from '@/components/Input';
import Label from '@/components/Label';
import ToggleSwitch from '@/components/ToggleSwitch';

// Formatting Dates
const formatToLocale = (date) => {
    if (!date) return false;

    const option = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    };
    return new Date(date).toLocaleDateString('id', option);
};

export default function FlightCalendarPicker() {
    const [isToggle, setIsToggle] = useState(false);
    const [openCalendar, setOpenCalendar] = useState(false);
    const [openCalendarRange, setOpenCalendarRange] = useState(false);
    const [pickedDate, setPickedDate] = useState(new Date());
    const [pickedRangeDate, setPickedRangeDate] = useState(new Date());
    const handleOpenCalendar = () => setOpenCalendar(!openCalendar);
    const handleOpenCalendarRange = () => setOpenCalendarRange(!openCalendarRange);

    const fly = {
        derpatures: pickedDate,
        returns: new Date(pickedRangeDate[1]).getDate() === new Date(pickedRangeDate[0]).getDate() ? '' : pickedRangeDate[1],
    };

    const handlePickedDate = (date) => {
        setPickedDate(date);
        setPickedRangeDate((prev) => (prev === date ? [date] : date));
        handleOpenCalendar();
    };
    const handlePickedRangeDate = (date) => {
        setPickedRangeDate((prev) => (prev[0] !== pickedDate ? [pickedDate, date] : [pickedRangeDate[0], date]));
        handleOpenCalendarRange();
    };
    const handleToggleAction = () => {
        if (pickedRangeDate.length > 0) {
            setPickedRangeDate([]);
        }
        setIsToggle(!isToggle);
    };

    console.log(fly);

    return (
        <div>
            <div className='flex gap-[18px]'>
                <div className='flex h-[45px] w-[140px] flex-col gap-[8px]'>
                    <Label html='derpature' className='invisible pl-[4px] text-[16px] font-normal leading-[24px] text-[#8A8A8A]'>
                        .
                    </Label>
                    <Input
                        id='derpature'
                        readOnly
                        value={formatToLocale(fly.derpatures)}
                        onClick={handleOpenCalendar}
                        className={`cursor-pointer border-b-[1px] border-b-[#d0d0d0] px-[4px] py-[6px] text-[16px] font-medium leading-[20px] text-black outline-0`}
                    />
                </div>
                <div className='flex'>
                    <div className='flex h-[45px] w-[140px] flex-col gap-[8px]'>
                        <Label htmlFor='return' className='pl-[4px] text-[16px] font-normal leading-[24px] text-[#8A8A8A]'>
                            Return
                        </Label>
                        <Input
                            id='return'
                            readOnly
                            value={!fly.returns ? 'Pilih Tanggal' : formatToLocale(fly.returns)}
                            onClick={handleOpenCalendarRange}
                            className={`${!isToggle ? 'invisible' : 'visible'} 
                        ${
                            !fly.returns ? 'text-[14px] font-normal text-[#7126b5]' : 'text-[16px] font-medium text-black'
                        } cursor-pointer border-b-[1px] border-b-[#d0d0d0] px-[4px] py-[6px] leading-[20px] outline-0`}
                        />
                    </div>
                    <ToggleSwitch isToggle={isToggle} handleToggleAction={handleToggleAction} />
                </div>
            </div>

            <div>
                <CalendarPicker initialDate={pickedDate} handlePickedDate={handlePickedDate} open={openCalendar} handleOpen={handleOpenCalendar} />
            </div>
            <div>
                <CalendarRangePicker
                    initialRangeDate={pickedRangeDate}
                    handlePickedRangeDate={handlePickedRangeDate}
                    open={openCalendarRange}
                    handleOpen={handleOpenCalendarRange}
                />
            </div>
        </div>
    );
}
