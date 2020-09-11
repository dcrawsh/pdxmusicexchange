import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import railsDateConverter from '../../utils/railsDateConverter'

class Posts extends Component {

  state = {
    selectedId: null
  }

  mapCategories = () => {
    return this.props.categories.categories.map(category => <option key={category.id} value={category.id}>{category.attributes.name}</option>)
  }

  handleOnChange = (event) => {
    this.setState({
      selectedId: event.target.value
    })
  }

  handleOnClick = (event) => {
    this.props.deletePost(event.target.id)
  }

  
  render() {
    
    const { posts } = this.props;
   
    let filteredPosts = posts.posts
   

    if(!posts.posts) {
      return (
        <div>
          loading post
        </div>
      )
    }
    
    if(this.state.selectedId !== null && this.state.selectedId !== 'All'){
      filteredPosts = posts.posts.filter((post) => { 
        console.log(post)
        return post.attributes.category.id === parseInt(this.state.selectedId)})
    } 
  
    

    
    const postList = filteredPosts.map(post => {
      return (
        <h3 className='card' key={post.id}><Link id={post.id} to={{pathname: `/posts/${post.id}`, state:{attributes: post.attributes}}}> {post.attributes.title} </Link><p>{post.attributes.description}</p><p>{railsDateConverter(post.attributes.updated_at)}</p><button id={post.id} onClick={(event) => this.handleOnClick(event)}> X </button></h3>
      )
    });

    return(
      <div className='posts'>
      
       
          
          <select className='filter' onChange={(event) => this.handleOnChange(event)} name="category_id" id="category">
             <option value="">--Filter Posts--</option>
             <option value="All">All</option>
              {this.mapCategories()}
          </select><br></br>
      
      <ul>
        {postList}
      </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {categories: state.categories}
}


export default connect(mapStateToProps)(Posts);