import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userName } = useParams();
  console.log(userName);
  return <h2>Details for user {userName}</h2>;
};
export default UserDetails;
