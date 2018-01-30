import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
//import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { ArticleList, ArticleListItem } from "../../components/ArticleList";
import { Input, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    nytarticles: [],
    articles: [],
    topic: "",
    startyear: "", 
    endyear: ""
    //articleSearch: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  /*
  getNytArticles = event => {
    API.getNytArticles(this.state.topic)
      .then(res =>
        this.setState({ nytarticles: res.data, topic: "", startyear: "", endyear: "" })
      )
      .catch(err => console.log(err));
  };
  */

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, topic: "", startyear: "", endyear: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticles = id => {
    API.deleteArticles(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  saveArticles = id => {
    API.saveArticles(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.topic) {
      //console.log("clicked")
      API.getNytArticles(this.state.topic)
        //.then(res => this.setState({ nytarticles: res.data, topic: "", startyear: "", endyear: ""  }))
        .then(res => this.setState({ nytarticles: res.data.response.docs, topic: "", startyear: "", endyear: ""  }))
        //.then(res => console.log(res.data.response.docs))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <div>
          <div size="md-6">
            <Jumbotron>
              <h1>Search</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.startyear}
                onChange={this.handleInputChange}
                name="startyear"
                placeholder="Start Year (Optional)"
              />
              <Input
                value={this.state.endyear}
                onChange={this.handleInputChange}
                name="endyear"
                placeholder="End Year (Optional)"
              />
              <FormBtn
                disabled={!(this.state.topic)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </div>
          <div size="md-6">
            <Jumbotron>
              <h1>Results</h1>
            </Jumbotron>

              {this.state.nytarticles.length === 0 ? (
                <h1 className="text-center">No Articless to Display</h1>
              ) : (
                <ArticleList>
                  {this.state.nytarticles.map(nytarticle => (
                      <a href={nytarticle.web_url}>
                      <ArticleListItem
                        key={nytarticle.headline.main}
                        title={nytarticle.headline.main}
                        href={nytarticle.web_url}
                      >
                      </ArticleListItem>
                      </a>
                  ))}
                </ArticleList>
              )}

          </div>
          <div size="md-6 sm-12">
            <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.artiles.map(article => (
                  <ListItem key={article._id}>
                    <Link to={"/articles/" + article._id}>
                      <strong>
                        {article.title}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </div>
      </Container>
    );
  }
}

export default Articles;
