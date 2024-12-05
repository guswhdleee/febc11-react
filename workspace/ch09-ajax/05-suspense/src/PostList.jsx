import axios from "axios";
import { useSuspenseQuery } from "@tanstack/react-query";
import FetchAsYouRender from "./03-FetchAsYouRender";

// 게시글 목록 조회 API 호출
function fetchPostList() {
  return axios.get("https://11.fesp.shop/posts?type=brunch&delay=4000", {
    headers: {
      "client-id": "00-brunch",
    },
  });
}

// 게시글 목록 조회 페이지
function PostList() {
  const { data } = useSuspenseQuery({
    queryKey: ["posts", 1],
    queryFn: () => fetchPostList(),
    select: (res) => res.data,
    staleTime: 1000 * 10,
  });

  return (
    <>
      <h2>게시물 {data.item.length}건이 있습니다.</h2>
    </>
  );
}

export default PostList;
