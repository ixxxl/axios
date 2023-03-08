import axios from "axios";
import { useEffect, useState } from "react";

export const useAxiosPost = (url: string, user: string) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response: any = await axios.post(url, user);
        setData(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { data, error, loaded };
};
