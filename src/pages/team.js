import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import authors from '../util/authors';
import { Button, Card, CardText, CardBody, CardTitle, Row } from 'reactstrap';
import PaulImage from '../images/user1.jpg';
import LeroyImage from '../images/user0.jpg';
import { slugify } from '../util/utilityFunctions';

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Our Team" keywords={[`gatsby`, `application`, `react`]} />
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={PaulImage} style={{ maxWidth: '100%' }} alt="Paul profile"/>
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button className="text-uppercase" color="primary" href={`/author/${slugify(authors[0].name)}`}>View Posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={LeroyImage} style={{ maxWidth: '100%' }} alt="Leroy profile"/>
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
          <CardBody>
            <CardTitle>{authors[1].name}</CardTitle>
            <CardText>{authors[1].bio}</CardText>
            <Button className="text-uppercase" color="primary" href={`/author/${slugify(authors[1].name)}`}>View Posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
