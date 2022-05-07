import { useParams } from 'react-router-dom';

const UserPage = () => {
  //const params = useParams();
  const { id } = useParams();
  //console.log(params);
  console.log(id);

  return (
    <div>
      User <h1>{id}</h1>
    </div>
  );
};

export default UserPage;
