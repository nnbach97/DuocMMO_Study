import React from 'react';
import { Post } from '../../../../types/blog.type';
import { deletePost, startEdit } from '../../reducer/blog.reducer';
import { useDispatch } from 'react-redux';

interface PropsType {
  post: Post;
}

export default function PostItem(props: PropsType) {
  const { post } = props;
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deletePost(id));
  };
  const handleClickEdit = (id: string) => {
    dispatch(startEdit(id));
  };
  return (
    <div className='flex flex-col items-center overflow-hidden rounded-lg border md:flex-row'>
      <div className='group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48'>
        <img
          src={post.urlImg}
          loading='lazy'
          alt={post.title}
          className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
        />
      </div>
      <div className='flex flex-col gap-2 p-4 lg:p-6'>
        <span className='text-sm text-gray-400'>{post.publisdDate}</span>
        <h2 className='text-xl font-bold text-gray-800'>{post.title}</h2>
        <p className='text-gray-500'>{post.description}</p>
        <div>
          <div className='inline-flex rounded-md shadow-sm' role='group'>
            <button
              type='button'
              className='rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
              onClick={() => handleClickEdit(post.id)}
            >
              Edit
            </button>
            <button
              type='button'
              className='rounded-r-lg border-b border-r border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
