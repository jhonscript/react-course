import { VscBug, VscGlobe } from 'react-icons/vsc'

export const Posts = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error))

        console.log("click");
      }}
    >
      <VscBug></VscBug>
      Traer datos
      <VscGlobe></VscGlobe>
    </button>
  );
};
