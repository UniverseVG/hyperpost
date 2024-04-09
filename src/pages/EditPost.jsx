import { useEffect, useState } from "react";
import { Container, PostForm, PostSkeleton } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        setLoading(false);
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post && !loading ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : (
    <div className="py-8">
      <Container>
        <PostSkeleton width={"100%"} imageHeight={600} />
      </Container>
    </div>
  );
}

export default EditPost;
