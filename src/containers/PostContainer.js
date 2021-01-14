import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import { clearPost, getPost } from '../modules/posts';

function PostContainer({ postId }) {
    const { data, loading, error } = useSelector(
        state => state.posts.post[postId]
    ) || {
        loading: false,
        data: null,
        error: null
    }; // 아예 데이터가 존재하지 않을 때가 있으므로 비구조화 할당이 오류나지 않도록 작성
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(postId));
    }, [postId, dispatch]);

    if (loading && !data) return <div>로딩중...</div>; // 로딩중이면서 데이터 없을때만
    if (error) return <div>에러 발생!</div>
    if (!data) return null;

    return <Post post={data} />;
}

export default PostContainer;