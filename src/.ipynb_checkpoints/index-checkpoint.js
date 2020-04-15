import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
/*

import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

ReactDOM.render(
  <div>
    <RangePicker />
    <br />
    <RangePicker showTime />
    <br />
    <RangePicker picker="week" />
    <br />
    <RangePicker picker="month" />
    <br />
    <RangePicker picker="year" />
  </div>,
    document.getElementById('root'),
);
*/
import { Button, notification } from 'antd';
class Tmp1 extends React.Component {
render(){
    const openNotification = () => {
  notification.success({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
return (
<Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
 )
}

}

ReactDOM.render(
  <Tmp1 />,
 document.getElementById('root'),
);
