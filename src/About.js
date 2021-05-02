import React from 'react';
import qs from 'qs';

function About({ location }) {
  // console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 물음표 지우기
  });
  // console.log(query);
  const detail = query.detail === 'true'; //true는 문자열로 비교해야함

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {detail && <p>detail 값이 true입니다.</p>}
    </div>
  );
}

export default About;
