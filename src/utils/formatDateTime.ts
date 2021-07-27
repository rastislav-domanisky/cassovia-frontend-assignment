import moment from 'moment';

const formatDateTime = (date: Date): string => {
  const momentDate = moment(date);
  const formatedDate = momentDate.format('dddd, DD MMM YYYY | h:mm A');
  return formatedDate;
};

export default formatDateTime;
