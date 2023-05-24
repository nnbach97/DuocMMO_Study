import React, { useEffect } from 'react';
import PostItem from '../PostItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import { deletePost, startClickEdit } from '../../blog.reducer';

export default function PostList() {
  let postList = useSelector((state: RootState) => state.blog.postList);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deletePost(id));
  };

  const handleClickEdit = (id: string) => {
    dispatch(startClickEdit(id));
  };

  return (
    <div>
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div className='mb-10 md:mb-16'>
            <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>Được Dev Blog</h2>
            <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
              Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ. Nhưng ngày mốt sẽ có nắng
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
            {postList.map((item) => (
              <PostItem key={item.id} post={item} handleDelete={handleDelete} handleClickEdit={handleClickEdit} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
