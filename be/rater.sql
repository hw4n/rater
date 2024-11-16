DROP TABLE IF EXISTS media;

CREATE TABLE media (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(50),
    release_year INT,
    score INT,
    review TEXT,
    image_url TEXT
);

INSERT INTO media (title, genre, release_year, score, review, image_url)
VALUES
    ('흑백요리사', '음식', 2024, 9, '사람 배고프게 만듬', 'https://cdn.mhns.co.kr/news/photo/202409/618552_757898_619.jpg'),
    ('재벌집 막내아들', '드라마', 2022, 7, '처음에는 참 재미있음', 'https://www.ccdm.or.kr/files/attach/images/189/463/316/6a1e06127aa3a822e47e01ea825ccd84.jpeg'),
    ('인터스텔라', '공상과학', 2014, 9, '나도 우주에 나가보고 싶다', 'https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4JzF/image/-tCvO9XDw3iYQHra9bVNU6fF6Yw'),
    ('조커', '스릴러', 2019, 8, '미국은 무섭다', 'https://i.ytimg.com/vi/5jKxSmqWyP8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLARk24XbIhVEJNI81GrsTSq8dyBxA'),
    ('기생충', '코미디/스릴러', 2019, 9, '부잣집에서는 직업창출이 가능하다', 'https://www.umnews.org/-/media/umc-media/2024/09/06/13/17/parasite-poster2.jpg?mw=1200&hash=A2A8828CD39542D054F50F3C847DBB17');
