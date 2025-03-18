import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate


const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const url = "http://localhost:3000/posts";
  const navigate = useNavigate();  // Khởi tạo useNavigate để chuyển hướng


  const handleSubmit = async (e) => {
    e.preventDefault();


    const newPost = {
      title,
      content,
    };


    try {
      // Gửi yêu cầu POST để tạo bài viết mới
      await axios.post(url, newPost);
      setStatus("Bài viết đã được tạo thành công!");
      setTitle("");  // Clear input fields
      setContent("");


      // Chuyển hướng đến trang ListPost sau khi tạo bài viết thành công
      navigate("/");  // Giả sử ListPost là trang trang chủ, thay đổi theo yêu cầu thực tế của bạn
    } catch (error) {
      setStatus("Có lỗi xảy ra khi tạo bài viết.");
      console.error("Lỗi khi tạo bài viết:", error);
    }
  };


  return (
    <div>
      <h1>Thêm bài viết mới</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder="Nội dung"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit">Tạo bài viết</button>
      </form>
      <p>{status}</p>
    </div>
  );
};


export default CreatePost;
