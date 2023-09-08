import { useParams } from "react-router-dom";
const Summary = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Hello this is summary</h1>
    </div>
  );
};

export default Summary;
