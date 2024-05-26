import moment from "moment";

export default function formatDate(dateString) {
  const formattedDate = moment.utc(dateString).format("MMMM Do, YYYY");
  return formattedDate;
}
