import "./ListUsers.css";

export default function ListUsers({ users }) {
  return (
    <div class="main_div second_div">
      <ul class="users">
        {users.map((user, idx) => (
          <li key={idx}>{`${user.name} (${user.age} years old)`}</li>
        ))}
      </ul>
    </div>
  );
}
