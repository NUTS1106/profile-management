import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUsers } from "./store/redux/userSlice";
import Home from "./pages/Home";

const mockPositions = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Engineer",
  "UX Designer",
  "Product Manager",
];

const mockSkills = [
  ["React", "JavaScript", "HTML"],
  ["Node.js", "Express", "MongoDB"],
  ["Vue", "TypeScript", "SCSS"],
  ["Figma", "Photoshop", "UI Design"],
  ["Agile", "Scrum", "Communication"],
];

function App() {
  const dispatch = useDispatch();

  const fetchUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        json.map((users, index) => {
          const { company, address, ...rest } = users;
          return {
            ...rest,
            company: company.name,
            address: address.city,
            position: mockPositions[index % mockPositions.length],
            skills: mockSkills[index % mockSkills.length],
            likes: ((index % 3) + 1) * ((index % 5) + 1) + ((index % 4) + 1),
            liked: false,
          };
        })
      );
  };

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["getUsers"],
    queryFn: fetchUser,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUsers(data));
    }
  }, [isSuccess]);

  return <>{isLoading ? <h1>loading...</h1> : <Home />}</>;
}

export default App;
