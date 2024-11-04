import React from 'react';

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Primeiro Post do Blog',
            content: 'Este é o conteúdo do primeiro post do blog.'
        },
        {
            id: 2,
            title: 'Segundo Post do Blog',
            content: 'Este é o conteúdo do segundo post do blog.'
        },
        {
            id: 3,
            title: 'Terceiro Post do Blog',
            content: 'Este é o conteúdo do terceiro post do blog.'
        }
    ];

    return (
        <div>
            <h1>Blog</h1>
            {blogPosts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Blogs;