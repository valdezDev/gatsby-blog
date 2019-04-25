import React from 'react';
import { Link } from 'gatsby';
import { Card, CardTitle, CardText, CardSubtitle, CardBody, Badge } from 'reactstrap';
import Img from 'gatsby-image';
import { slugify } from '../util/utilityFunctions';

const Post = ({ title, author, slug, date, body, fluid, tags }) => (
    <Card>
      <Link to={slug}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link to={slug}>
            {title}
          </Link>
        </CardTitle>
        <CardSubtitle>
          <span className="card-subtitle">{date}</span> by{' '}
          <span className="card-subtitle">{author}</span>
        </CardSubtitle>
      <CardText className="card-text">{body}</CardText>
      <ul className="post-tags">
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/tag/${slugify(tag)}`}>
              <Badge className="text-uppercase post-badge">
                {tag}
              </Badge>
            </Link>
          </li>
        ))}
      </ul>
      

        <Link
          to={slug}
          className="btn read-more-btn float-right">
          Read More
        </Link>
      </CardBody>
    </Card>
)

export default Post;