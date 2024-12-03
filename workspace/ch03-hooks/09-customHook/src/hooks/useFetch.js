import { useEffect, useState } from "react";

const API_SERVER = "https://todo-api.fesp.shop/api";

function useFetch(fetchParams) {
  // 서버로부터 받은 응답 data
  const [data, setData] = useState(null);
  // 에러 메시지
  const [error, setError] = useState(null);
  // 로딩 중 사애
  const [isLoading, setIsLoading] = useState(true);

  // API 서버에 fetch API로 ajax 요청을 보낸다.
  const request = async (fetchParams) => {
    try {
      setIsLoading(true);
      const res = await fetch(API_SERVER + fetchParams.url);
      console.log(res);
      const jsonData = await res.json();
      console.log(jsonData);
      if (jsonData.ok) {
        setData(jsonData);
        setError(null);
      } else {
        throw new Error(jsonData.error.message);
      }
    } catch (err) {
      // 에러 처리
      console.error(err);
      setError({
        message:
          "일시적인 문제로 인해 작업 처리에 실패했습니다. 잠시후 다시 요청해 주시길 바랍니다.",
      });
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    request(fetchParams);
  }, []); // 마운트 된 후 한번만 호출, 랜더링때는 X

  return { data, error, isLoading };
}

export default useFetch;
