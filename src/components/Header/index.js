import React from 'react';
import './index.scss';

const Header = (props) => {
  const { title } = props;
  return (
    <div className="headerWrap">
      <h1>{ title }</h1>
      <i className="iconfont iconzengjia"/>
    </div>
  );
}

export default Header;
