// @flow
import * as React from 'react';
import NavBar from "./navBar";


const Home = (props) => {
    console.log(props)
 return (
  <div >
      <div className="col-md-8 offset-2">
          <h3>Posts</h3>
          {props.posts.map((post,ind)=>{

              return (
                  <div key={ind}>
                      <h5>{post.title}</h5>
                      <p>{post.description}</p>
                  </div>
              )
          })}
          {/*<h3 className="about">About</h3>*/}
          {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum lectus at iaculis consectetur. Ut commodo fermentum sem et commodo. Sed nunc turpis, dictum finibus nulla sit amet, molestie venenatis felis. Cras eget nibh libero. Vivamus euismod posuere venenatis. Etiam luctus tortor eget velit ullamcorper, nec feugiat nisl vehicula. Vestibulum eu tempus metus. Duis non mi in ante faucibus commodo eu at ante. Aliquam auctor ex ac aliquet porta. Aenean convallis pretium fringilla. Aenean maximus ante eget erat suscipit, sit amet malesuada eros fringilla. Nullam sit amet commodo tortor.</p>*/}
          {/*<h3 className="info">Info</h3>*/}
          {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum lectus at iaculis consectetur. Ut commodo fermentum sem et commodo. Sed nunc turpis, dictum finibus nulla sit amet, molestie venenatis felis. Cras eget nibh libero. Vivamus euismod posuere venenatis. Etiam luctus tortor eget velit ullamcorper, nec feugiat nisl vehicula. Vestibulum eu tempus metus. Duis non mi in ante faucibus commodo eu at ante. Aliquam auctor ex ac aliquet porta. Aenean convallis pretium fringilla. Aenean maximus ante eget erat suscipit, sit amet malesuada eros fringilla. Nullam sit amet commodo tortor.</p>*/}
          {/*<h3 className="goals">Goals</h3>*/}
          {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum lectus at iaculis consectetur. Ut commodo fermentum sem et commodo. Sed nunc turpis, dictum finibus nulla sit amet, molestie venenatis felis. Cras eget nibh libero. Vivamus euismod posuere venenatis. Etiam luctus tortor eget velit ullamcorper, nec feugiat nisl vehicula. Vestibulum eu tempus metus. Duis non mi in ante faucibus commodo eu at ante. Aliquam auctor ex ac aliquet porta. Aenean convallis pretium fringilla. Aenean maximus ante eget erat suscipit, sit amet malesuada eros fringilla. Nullam sit amet commodo tortor.</p>*/}
      </div>
  </div>
 );
};
export default Home;