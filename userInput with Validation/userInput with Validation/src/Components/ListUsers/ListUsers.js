import "./ListUsers.css";

export default function ListUsers({ users }) {
  return (
    <div className="main_div second_div">
      <ul className="users">
        {users.map((user, idx) => (
          <li key={idx}>{`${user.name} (${user.age} years old)`}</li>
        ))}
      </ul>
    </div>
  );
}
