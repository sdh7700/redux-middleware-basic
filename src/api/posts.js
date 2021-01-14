// n ms 동안 기다리는 프로미스를 만들어 주는 함수
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// 가짜 포스트 목록 데이터
const posts = [
    {
        id: 1,
        title: '리덕스 미들웨어 학습',
        body: '리덕스 미들웨어를 직접 만들어 보면 이해하기 쉽다.'
    },
    {
        id: 2,
        title: 'redux-thunk를 사용해 봅시다',
        body: 'redux-thunk를 사용해서 비동기 작업을 처리해 봅시다.'
    },
    {
        id: 3,
        title: 'redux-saga를 사용해 봅시다',
        body: 'redux-saga를 사용해서 비동기 작업을 처리해 봅시다.'
    }
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
    await sleep(1000);
    return posts;
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async id => {
    await sleep(1000); // 0.5초 대기
    return posts.find(post => post.id === id);
};