import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxiosGet = (url: string) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string>('');
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const response: any = await axios.get(url);
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

export const useAxiosPut = (url: string) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response: any = await axios.put(url);
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

export const useAxiosPost = (url: string, user: any) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState('');
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

export const useAxiosDelete = (url: string, id: any) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response: any = await axios.delete(url, id);
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
