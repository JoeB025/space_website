const format = require("pg-format");
const db = require("../connection");
const {
  convertTimestampToDate,
  createRef,
  formatComments,
} = require("./utils");

const seed = ({
  topicData,
  userData,
  articleData,
  commentData,
  planetNameData,
  astronomyData,
}) => {
  return db
    .query(`DROP TABLE IF EXISTS comments;`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS articles;`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS users;`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS topics;`);
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS planet_names;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS astronomy_info;");
    })
    .then(() => {
      const topicsTablePromise = db.query(`
      CREATE TABLE topics (
        slug VARCHAR PRIMARY KEY,
        description VARCHAR
      );`);

      const usersTablePromise = db.query(`
      CREATE TABLE users (
        username VARCHAR PRIMARY KEY,
        name VARCHAR NOT NULL,
        avatar_url VARCHAR
      );`);

      return Promise.all([topicsTablePromise, usersTablePromise]);
    })
    .then(() => {
      return db.query(`
      CREATE TABLE articles (
        article_id SERIAL PRIMARY KEY,
        title VARCHAR NOT NULL,
        topic VARCHAR NOT NULL REFERENCES topics(slug),
        author VARCHAR NOT NULL REFERENCES users(username),
        body VARCHAR NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        votes INT DEFAULT 0 NOT NULL,
        article_img_url VARCHAR DEFAULT 'https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?w=700&h=700'
      );`);
    })
    .then(() => {
      return db.query(`
      CREATE TABLE comments (
        comment_id SERIAL PRIMARY KEY,
        body TEXT NOT NULL,
        article_id INT REFERENCES articles(article_id) NOT NULL,
        author VARCHAR REFERENCES users(username) NOT NULL,
        votes INT DEFAULT 0 NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );`);
    })

    .then(() => {
      // Create planet_names table
      return db.query(`
CREATE TABLE planet_names (
  planet_name_id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  order_from_sun INTEGER NOT NULL
);`);
    })

    .then(() => {
      return db.query(`
      CREATE TABLE astronomy_info (
        astronomy_info_id SERIAL PRIMARY KEY,
        topic VARCHAR,
        description VARCHAR NOT NULL
      );`);
    })

    .then(() => {
      const insertTopicsQueryStr = format(
        "INSERT INTO topics (slug, description) VALUES %L;",
        topicData.map(({ slug, description }) => [slug, description])
      );
      const topicsPromise = db.query(insertTopicsQueryStr);

      const insertUsersQueryStr = format(
        "INSERT INTO users ( username, name, avatar_url) VALUES %L;",
        userData.map(({ username, name, avatar_url }) => [
          username,
          name,
          avatar_url,
        ])
      );
      const usersPromise = db.query(insertUsersQueryStr);

      return Promise.all([topicsPromise, usersPromise]);
    })
    .then(() => {
      const formattedArticleData = articleData.map(convertTimestampToDate);
      const insertArticlesQueryStr = format(
        `
        INSERT INTO articles 
        (
          title, 
          topic, 
          author, 
          body, 
          created_at, 
          votes, 
          article_img_url
        ) 
        VALUES 
        %L 
        RETURNING *;
        `,
        formattedArticleData.map(
          ({
            title,
            topic,
            author,
            body,
            created_at,
            votes = 0,
            article_img_url,
          }) => [title, topic, author, body, created_at, votes, article_img_url]
        )
      );

      return db.query(insertArticlesQueryStr);
    })
    .then(({ rows: articleRows }) => {
      const articleIdLookup = createRef(articleRows, "title", "article_id");
      const formattedCommentData = formatComments(commentData, articleIdLookup);

      const insertCommentsQueryStr = format(
        "INSERT INTO comments (body, author, article_id, votes, created_at) VALUES %L;",
        formattedCommentData.map(
          ({ body, author, article_id, votes = 0, created_at }) => [
            body,
            author,
            article_id,
            votes,
            created_at,
          ]
        )
      );
      return db.query(insertCommentsQueryStr);
    })

    .then(() => {
      // Insert data into the planetName table
      const insertPlanetNameQueryStr = format(
        `
  INSERT INTO planet_names
  (name, order_from_sun)
  VALUES
  %L
  RETURNING *;
  `,
        planetNameData.map(({ name, order_from_sun }) => [name, order_from_sun])
      );
      return db.query(insertPlanetNameQueryStr);
    })

    .then(() => {
      const insertAstronomyQueryStr = format(
        `
        INSERT INTO astronomy_info
        (topic, description)
        VALUES
        %L
        RETURNING *;
        `,
        astronomyData.map(({ topic, description }) => [topic, description])
      )
      return db.query(insertAstronomyQueryStr) 
    })

};

module.exports = seed;
