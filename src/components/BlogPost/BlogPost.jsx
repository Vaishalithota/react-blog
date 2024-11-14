import React from 'react';
import styles from './BlogPost.module.css';
import PropTypes from 'prop-types';

function BlogPost({ title, content, author, date, readTime }) {
  return (
    <article className={styles.blogPost}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.meta}>
          <span className={styles.author}>{author}</span> | 
          <span className={styles.date}>{date}</span> | 
          <span className={styles.readTime}>{readTime} min read</span>
        </div>
      </div>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
    </article>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
};

export default BlogPost;
