import React from 'react';

const profileData = {
  aengun: {
    name: '김앵건',
    description: 'Backend Engineer @ WJ',
  },
  homer: {
    name: '호머 심슨',
    description: '심슨 가족 주인공',
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];
  console.log(username);

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
