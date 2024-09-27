import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserList = () => {
  const getUsers = () => {
    let users = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== "state") {
        users.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return users;
  };
  const initUsers = getUsers();
  console.log(initUsers);
  return (
    <>
      <ul>
        {initUsers.map((el, index) => (
          <li key={index}>
            <Card className="d-flex justify-content-between">
              <Link to={`/user-list/${el.userName}`}>{el.userName}</Link>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
