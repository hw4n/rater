CREATE TABLE media (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(50),
    release_year INT,
    score INT,
    review TEXT
);

INSERT INTO media (title, genre, release_year, score, review)
VALUES
    ('흑백요리사', '음식', 2024, 9, '사람 배고프게 만듬'),
    ('재벌집 막내아들', '드라마', 2022, 7, '처음에는 참 재미있음'),
    ('인터스텔라', '공상과학', 2014, 9, '나도 우주에 나가보고 싶다'),
    ('조커', '스릴러', 2019, 8, '미국은 무섭다'),
    ('기생충', '코미디/스릴러', 2019, 9, '부잣집에서는 직업창출이 가능하다');
