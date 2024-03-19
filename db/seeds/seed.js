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
  blackHoleData,
  galaxyData,
  planetsData,
  moonData,
  starsData
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
      return db.query("DROP TABLE IF EXISTS black_holes;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS galaxies;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS planets;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS moons;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS stars;");
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
        topic VARCHAR NOT NULL,
        description VARCHAR NOT NULL,
        img_url VARCHAR NOT NULL
      );`);
    })

    .then(() => {
      return db.query(`
      CREATE TABLE black_holes (
        black_hole_id SERIAL PRIMARY KEY,
        name VARCHAR,
        type VARCHAR NOT NULL,
        mass VARCHAR NOT NULL,
        distance VARCHAR NOT NULL,
        description VARCHAR NOT NULL
      );`);
    })
    .then(()=> {
      return db.query(`
      CREATE TABLE galaxies (
        galaxy_id SERIAL PRIMARY KEY,
        galaxy_name VARCHAR NOT NULL,
        type VARCHAR NOT NULL,
        size VARCHAR NOT NULL,
        distance_from_earth VARCHAR NOT NULL,
        number_of_stars VARCHAR NOT NULL,
        visible_galactic_center BOOLEAN NOT NULL,
        constellation VARCHAR NOT NULL,
        img_url VARCHAR NOT NULL,
        general_info VARCHAR NOT NULL,
        observation_history VARCHAR NOT NULL,
        timeline VARCHAR NOT NULL
      );`);
    })
    .then(() => {
      return db.query(`
      CREATE TABLE planets (
        planets_id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        average_temp INTEGER NOT NULL,
        highest_recorded_temp VARCHAR NOT NULL,
        lowest_recorded_temp VARCHAR NOT NULL,
        planet_type VARCHAR NOT NULL,
        density FLOAT NOT NULL,
        dimension VARCHAR NOT NULL,
        distance_from_sun FLOAT NOT NULL,
        gravity FLOAT NOT NULL,
        mass_value FLOAT NOT NULL,
        number_of_moons INTEGER NOT NULL,
        orbital_period_years FLOAT NOT NULL,
        mass_exponent INTEGER NOT NULL,
        mean_radius FLOAT NOT NULL,
        img_url VARCHAR NOT NULL,
        planet_description TEXT NOT NULL
 
      );`);
    })
    .then(() => {
      return db.query(`
      CREATE TABLE moons (
        moons_id SERIAL PRIMARY KEY,
        orbits VARCHAR NOT NULL,
        moon_name VARCHAR NOT NULL,
        distance_from_planet VARCHAR NOT NULL,
        gravity VARCHAR NOT NULL,
        mass_value VARCHAR NOT NULL,
        mass_exponent VARCHAR NOT NULL,
        mean_radius VARCHAR NOT NULL
      );`);
    })
    .then(() => {
      return db.query(`
      CREATE TABLE stars (
        stars_id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        type VARCHAR NOT NULL,
        mass VARCHAR NOT NULL,
        radius VARCHAR NOT NULL,
        temperature VARCHAR NOT NULL,
        luminosity VARCHAR NOT NULL,
        age VARCHAR NOT NULL,
        description VARCHAR NOT NULL,
        size_comparison VARCHAR NOT NULL,
        img_url VARCHAR NOT NULL
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
        (topic, description, img_url)
        VALUES
        %L
        RETURNING *;
        `,
        astronomyData.map(({ topic, description, img_url }) => [topic, description, img_url])
      )
      return db.query(insertAstronomyQueryStr) 
    })
    .then(() => {
      const insertBlackHoleQueryStr = format(
        `
        INSERT INTO black_holes
        (name, type, mass, distance, description)
        VALUES
        %L
        RETURNING *;
        `,
        blackHoleData.map(({ name, type, mass, distance, description }) => [name, type, mass, distance, description])
      )
      return db.query(insertBlackHoleQueryStr)
    })



    .then(() => {
      const insertGalaxyQueryStr = format(
        `
        INSERT INTO galaxies
        (galaxy_name, type, size, distance_from_earth, number_of_stars, visible_galactic_center, constellation, img_url, general_info, observation_history, timeline)
        VALUES
        %L
        RETURNING *;
        `,
        galaxyData.map(({ galaxy_name, type, size, distance_from_earth, number_of_stars, visible_galactic_center, constellation, img_url, general_info, observation_history, timeline }) => [galaxy_name, type, size, distance_from_earth, number_of_stars, visible_galactic_center, constellation, img_url, general_info, observation_history, timeline])
      )
      return db.query(insertGalaxyQueryStr)
    })

    .then(() => {
      const insertPlanetsQueryStr = format(
        `
        INSERT INTO planets
        (
          name,
          average_temp, 
          highest_recorded_temp, 
          lowest_recorded_temp, 
          planet_type, 
          density,
          dimension,
          distance_from_sun,
          gravity,
          mass_value,
          number_of_moons,
          orbital_period_years,
          mass_exponent,
          mean_radius,
          img_url,
          planet_description
          
        )
        VALUES
        %L
        RETURNING *;
        `,
        planetsData.map(({ 
          name,
          average_temp, 
          highest_recorded_temp, 
          lowest_recorded_temp, 
          planet_type, 
          density,
          dimension,
          distance_from_sun,
          gravity,
          mass_value,
          number_of_moons,
          orbital_period_years,
          mass_exponent,
          mean_radius,
          img_url,
          planet_description
        }) => 
        [
          name,
          average_temp, 
          highest_recorded_temp, 
          lowest_recorded_temp, 
          planet_type, 
          density,
          dimension,
          distance_from_sun,
          gravity,
          mass_value,
          number_of_moons,
          orbital_period_years,
          mass_exponent,
          mean_radius,
          img_url,
          planet_description
        ])
      )
      return db.query(insertPlanetsQueryStr)
    })
    .then(() => {
      const insertMoonsQueryStr = format(
        `
        INSERT INTO moons
        (
          orbits,
          moon_name,
          distance_from_planet,
          gravity,
          mass_value,
          mass_exponent,
          mean_radius
        )
        VALUES
        %L
        RETURNING *;
        `,
        moonData.map(({ 
          orbits,
          moon_name,
          distance_from_planet,
          gravity,
          mass_value,
          mass_exponent,
          mean_radius
        }) => 
        [
          orbits,
          moon_name,
          distance_from_planet,
          gravity,
          mass_value,
          mass_exponent,
          mean_radius
        ])
      )
      return db.query(insertMoonsQueryStr)
    })

    .then(() => {
      const insertStarsQueryStr = format(
        `
        INSERT INTO stars
        (
          name,
          type,
          mass,
          radius,
          temperature,
          luminosity,
          age,
          description,
          size_comparison,
          img_url
        )
        VALUES
        %L
        RETURNING *;
        `,
        starsData.map(({ 
          name,
          type,
          mass,
          radius,
          temperature,
          luminosity,
          age,
          description,
          size_comparison,
          img_url
        }) => 
        [
          name,
          type,
          mass,
          radius,
          temperature,
          luminosity,
          age,
          description,
          size_comparison,
          img_url
        ])
      )
      return db.query(insertStarsQueryStr)
    })

};

module.exports = seed;
