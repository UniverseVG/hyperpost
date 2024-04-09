import { useState } from "react";
import { Container, EdgeCase, PostCard, PostSkeleton } from "../components";
import appwriteService from "../appwrite/config";
import { staticArray } from "../constants";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  appwriteService.getPosts().then((posts) => {
    setLoading(false);
    if (posts) {
      setPosts(posts.documents);
    }
  });

  if (posts.length === 0 && !loading) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <EdgeCase />
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {loading
            ? staticArray.map((post) => (
                <div key={post} className="p-2 w-1/4">
                  <PostSkeleton />
                </div>
              ))
            : posts.map((post) => (
                <div key={post.$id} className="p-2 w-1/4">
                  <PostCard {...post} />
                </div>
              ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
