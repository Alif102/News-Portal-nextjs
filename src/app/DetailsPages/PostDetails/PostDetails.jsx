import axios from 'axios';


import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import SinglePost from './SinglePost';
import Loader from '@/app/Components/Shared/Loader';

const PostDetails = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [related, setRelated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = sessionStorage.getItem(`post_${id}`);
        console.log(cachedData)
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          setPostData(parsedData.postData);
          setRelated(parsedData.related);
          setLoading(false);
        } else {
          const response = await axios.get(`https://admin.desh365.top/api/post/${id}`);

        
          setPostData(response.data.data);
          
          setRelated(response.data.related_post);
          setLoading(false);
          sessionStorage.setItem(`post_${id}`, JSON.stringify({ postData: response.data.data, related: response.data.related_post }));
         
       
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const transformedPostData = useMemo(() => ({ postData, related }), [postData, related]);

 


  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {transformedPostData && (
            <SinglePost related={related} postData={postData} />
          )}
        </div>
      )}
    </div>
  );
};

export default PostDetails;