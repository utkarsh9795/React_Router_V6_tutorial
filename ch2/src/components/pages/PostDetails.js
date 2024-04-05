import { useParams } from "react-router-dom";

const PostDetail = () => {
    let {category } = useParams();
    return (
      <>
      <h1>{category} PostDetail Page</h1>
      <h3>{category} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quia iste odit nam culpa voluptate dolores ullam provident minus cum?</h3>
      </>
    )
  };
  export default PostDetail;