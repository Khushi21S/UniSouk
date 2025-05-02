import React from "react";

export default function Blog() {
  const posts = [
    {
      title: "Refreshing Designs",
      description: "Quench satisfying designs to help you stir up emotion and tell a story.",
      category: "RESOURCES",
      image: "https://cdn3d.iconscout.com/3d/premium/thumb/coffee-cup-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--hot-tea-user-interface-pack-illustrations-3337936.png?f=webp", // example green drink
      bgColor: "bg-purple-500"
    },
    {
      title: "Healthier Lifestyle",
      description: "Living a healthier lifestyle will help with your productivity and your mind-set.",
      category: "LIFESTYLE",
      image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2", // example orange on blue
      bgColor: "bg-blue-400"
    },
    {
      title: "Gaming Evolution",
      description: "Learn about the evolution of gaming and how it started a revolution.",
      category: "ENTERTAINMENT",
      image: "https://img.freepik.com/free-psd/3d-illustration-children-s-toy-gaming-controller_23-2149345301.jpg?semt=ais_hybrid&w=740", // example yellow gameboy
      bgColor: "bg-yellow-400"
    }
  ];

  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2">The Project Blog</h2>
      <p className="mb-10 text-gray-600">Designs and layouts to help you with your app.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className={`rounded-lg overflow-hidden text-left text-white ${post.bgColor}`}>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="inline-block text-xs font-semibold uppercase bg-white text-black px-2 py-1 rounded mb-2">
                {post.category}
              </span>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-sm mt-2">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
