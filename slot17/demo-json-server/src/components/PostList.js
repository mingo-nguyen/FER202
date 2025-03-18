import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const PostList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:3000/posts"

  useEffect(() => {
        const fetchData = async() =>{
            try{
               
                const response = await axios.get(url);
                setData(response.data);
                setLoading(false);
                console.log(response.data);
            }catch(error){
                console.error("Lỗi", "loi"+error);
                setLoading(false);
            }
            
        };
        fetchData();
  }, []); 

 

  if (loading) {
    return <div>Đang tải...</div>;  // Hiển thị thông báo đang tải
  }

  if(!data || data.length === 0){
    return <div>Không có dữ liệu</div>;  // Hiển thị thông báo không có dữ liệu
  }

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <button>
        <Link to="/create">Tạo mới</Link>
      </button>
      <table border="1">
            <th>id</th>
            <th>title</th>
            <th>content</th>
        
              {
              data.map(post => {
                
                return (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                  </tr>
                );
              })
              }
            

      </table>
      
    </div>
  );
};
export default PostList;