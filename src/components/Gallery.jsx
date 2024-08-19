import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useGlobalContext } from '../context/context';

const URL = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchPhoto } = useGlobalContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['images', searchPhoto],
    queryFn: async () => {
      const result = await axios.get(`${URL}&query=${searchPhoto}`);

      return result.data;
    },
  });

  if (isLoading)
    return <p style={{ marginTop: '1rem', textAlign: 'center' }}>Loading...</p>;

  if (isError)
    return (
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        There was an error...
      </p>
    );

  const results = data.results;

  if (results.length < 1)
    return (
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>No items found</p>
    );

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;

        return (
          <img
            src={url}
            alt={item.alt_description}
            key={item.id}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
