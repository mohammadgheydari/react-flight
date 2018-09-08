import React from 'react'
import moment from 'moment';
import jMoment from 'moment-jalaali';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './datepicker.css';
import { DateRangePicker,SingleDatePicker } from 'react-dates';

export default class JDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      isRTL: true,
      startDatePlaceholderText: "تاریخ رفت",
      endDatePlaceholderText: "تاریخ برگشت",
      // isOutsideRange: moment().add('years', 1)
    };
  }
  render() {
    return (
   <div>
        <DateRangePicker
        //  stateDateWrapper={jMoment}
        //  renderMonthText={renderMonthText}
        //  renderDayContents={renderDayContents}
          isRTL={this.state.isRTL}
          anchorDirection="right"
          startDatePlaceholderText={this.state.startDatePlaceholderText}
          endDatePlaceholderText = {this.state.endDatePlaceholderText}
          startDateId="DOM_DepartDate_Str"
          endDateId="DOM_ReturnDate_Str"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
          block={true}
          // isOutsideRange={isOutsideRange}
          // calendarInfoPosition="top" 
          // renderCalendarInfo={renderCalendarInfo} 
        />
        {/* <SingleDatePicker
          // renderMonthText={[فروردین,اردیبهشت]} 
          // renderDayContents={renderDayContents}
          placeholder={this.state.startDatePlaceholderText}
          isRTL={this.state.isRTL}
          block={true}
          date={this.state.date} 
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          id="DOM_DepartDate_Str" // PropTypes.string.isRequired,
        /> */}
   </div>
    );
  }
}