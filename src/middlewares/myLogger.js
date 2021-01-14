const myLogger = store => next => action => {
    console.log(action); // 먼저 액션 출력
    const result = next(action); // 다음 미들웨어로 액션 전달

    // 업데이트 이후의 상태 조회
    console.log('\t', store.getState());
    return result; // 반환하는 것은 dispatch(action) 의 결과물이 됨. 기본은 undefined.
};

export default myLogger;