import img1 from "../../assets/BlogPosts/Img1.jpg";
import img2 from "../../assets/BlogPosts/Img2.jpg";
import img3 from "../../assets/BlogPosts/Img3.jpg";

const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      image: img1,
      date: "DECEMBER 12",
      title: "Eum ad dolor et. Autem aut fugiat debitis",
      author: "Julia Parker",
      category: "Politics",
    },
    {
      id: 2,
      image: img2,
      date: "JULY 17",
      title: "Et repellendus molestiae qui est sed omnis",
      author: "Mario Douglas",
      category: "Sports",
    },
    {
      id: 3,
      image: img3,
      date: "SEPTEMBER 05",
      title: "Quia assumenda est et veritati tirana ploder",
      author: "Lisa Hunter",
      category: "Economics",
    },
  ];

  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto text-center px-4">
        
        {/* العنوان */}
        <h2 className="text-3xl font-bold text-[#2a4b7c] mt-10">RECENT BLOG POSTS</h2>
        <div className="w-20 h-1 bg-[#3cb4e7] mx-auto mt-3"></div>
        <p className="text-gray-600 mt-4 mb-12">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>

        {/* الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100"
            >
              {/* الصورة */}
              <div className="relative">
                <img src={post.image} alt="" className="w-full h-56 object-cover" />
                <span className="absolute bottom-3 right-3 bg-[#3cb4e7] text-white text-xs px-3 py-1 rounded">
                  {post.date}
                </span>
              </div>

              {/* المحتوى */}
              <div className="p-5 text-left">
                <h3 className="font-semibold text-lg text-[#2a4b7c] hover:text-[#3cb4e7] cursor-pointer">
                  {post.title}
                </h3>

                <div className="flex items-center text-sm text-gray-500 mt-3 gap-4">
                  <span className="flex items-center gap-1">
                    <i className="ri-user-line"></i> {post.author}
                  </span>

                  <span className="flex items-center gap-1">
                    <i className="ri-folder-line"></i> {post.category}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-6 flex items-center gap-1 cursor-pointer hover:text-[#3cb4e7]">
                  Read More →
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogPosts;
